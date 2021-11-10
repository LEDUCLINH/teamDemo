import { gql } from 'graphql-request'
import Stripe from 'stripe'

import { hasuraServerRequest } from '../../hasura/hasura-server-request'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

export async function onUserSubscriptionCreated(
  session: Stripe.Checkout.Session
) {
  const subscriptionId =
    typeof session.subscription === 'string'
      ? session.subscription
      : session.subscription?.id
  if (!subscriptionId) {
    throw new Error('No subscription id')
  }
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  if (
    !subscription.items.data.find(
      (item) =>
        item.price.product === process.env['STRIPE_PRODUCT_USER_SUBSCRIPTION']
    )
  ) {
    return false
  }

  if (session.payment_status === 'paid' && session.mode === 'subscription') {
    // update the user's business size to national business
    // create the fee with the last payment date, status active and type subscription and subscription id

    await hasuraServerRequest<
      {
        update_users: { affected_rows: number }
        insert_payments_one: { id: number }
      },
      {
        email: string
        stripe_customer_id: string
        stripe_subscription_id: string
        user_id: string
      }
    >(
      gql`
        mutation M(
          $email: String
          $stripe_customer_id: String
          $stripe_subscription_id: String
          $user_id: bigint
        ) {
          update_users(
            where: { email: { _eq: $email } }
            _set: {
              business_size: "NATIONAL_BUSINESS"
              stripe_customer_id: $stripe_customer_id
            }
          ) {
            affected_rows
          }
          insert_payments_one(
            object: {
              active: true
              stripe_subscription_id: $stripe_subscription_id
              user_id: $user_id
              last_payment: "now()"
            }
          ) {
            id
          }
        }
      `,
      {
        email: session.customer_email!,
        stripe_customer_id: session.customer as string,
        stripe_subscription_id: session.subscription as string,
        user_id: session.metadata?.user_id!,
      }
    )

    return true
  }

  return false
}
