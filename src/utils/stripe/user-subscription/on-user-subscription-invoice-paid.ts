import { gql } from 'graphql-request'
import Stripe from 'stripe'

import { hasuraServerRequest } from '../../hasura/hasura-server-request'

export async function onUserSubscriptionInvoicePaid(invoice: Stripe.Invoice) {
  if (
    !invoice.lines?.data.find(
      (item) =>
        item.price?.product === process.env['STRIPE_PRODUCT_USER_SUBSCRIPTION']
    )
  ) {
    return false
  }

  // update the fee's last payment date and status to active and type subscription

  if (invoice.subscription) {
    await hasuraServerRequest<
      { update_payments: { id: number } },
      { stripe_subscription_id: string; last_payment: Date }
    >(
      gql`
        mutation M(
          $last_payment: timestamptz
          $stripe_subscription_id: String
        ) {
          update_payments(
            where: { stripe_subscription_id: { _eq: $stripe_subscription_id } }
            _set: { last_payment: $last_payment }
          ) {
            returning {
              id
            }
          }
        }
      `,
      {
        stripe_subscription_id: invoice.subscription as string,
        last_payment: new Date(),
      }
    )

    return true
  }

  return false
}
