import { gql } from 'graphql-request'
import Stripe from 'stripe'

import { hasuraServerRequest } from '../../hasura/hasura-server-request'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

export async function onUserSubscriptionDeleted(
  subscription: Stripe.Subscription
) {
  if (
    !subscription.items?.data.find(
      (item) =>
        item.price?.product === process.env['STRIPE_PRODUCT_USER_SUBSCRIPTION']
    )
  ) {
    return false
  }

  const user = (await stripe.customers.retrieve(
    subscription.customer.toString()
  )) as Stripe.Customer
  if (subscription) {
    await hasuraServerRequest<
      {
        update_users: { affected_rows: number }
        update_payments: { affected_rows: number }
      },
      {
        stripe_subscription_id: string
        email: string
      }
    >(
      gql`
        mutation M($stripe_subscription_id: String, $email: String) {
          update_users(
            where: { email: { _eq: $email } }
            _set: { business_size: "LOCAL_BUSINESS" }
          ) {
            affected_rows
          }
          update_payments(
            where: { stripe_subscription_id: { _eq: $stripe_subscription_id } }
            _set: { active: false }
          ) {
            affected_rows
          }
        }
      `,
      {
        email: user.email!,
        stripe_subscription_id: subscription.id as string,
      }
    )

    return true
  }

  return false
}
