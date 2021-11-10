import { gql } from 'graphql-request'
import Stripe from 'stripe'

import { hasuraServerRequest } from '../../hasura/hasura-server-request'

export async function onUserSubscriptionInvoiceFailed(invoice: Stripe.Invoice) {
  if (
    !invoice.lines?.data.find(
      (item) =>
        item.price?.product === process.env['STRIPE_PRODUCT_USER_SUBSCRIPTION']
    )
  ) {
    return false
  }

  if (invoice.subscription) {
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
        email: invoice.customer_email!,
        stripe_subscription_id: invoice.subscription as string,
      }
    )

    return true
  }

  return false
}
