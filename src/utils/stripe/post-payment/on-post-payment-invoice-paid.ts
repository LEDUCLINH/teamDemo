import Stripe from 'stripe'

import {
  cancelOtherStripePostPayments,
  getStripePostProductId,
  setPostIsLocal,
  updateLastPaymentDateAndActivate,
} from './post-payment-helpers'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

export async function onPostPaymentInvoicePaid(invoice: Stripe.Invoice) {
  const subscriptionId =
    typeof invoice.subscription === 'string'
      ? invoice.subscription
      : invoice.subscription?.id
  if (!subscriptionId) {
    throw new Error('Subscription ID not found')
  }
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  const { user_id, post_id, updated_post_is_local } =
    subscription.metadata || {}
  if (
    !user_id ||
    !post_id ||
    updated_post_is_local === undefined ||
    updated_post_is_local === null
  ) {
    return false
  }

  const { productId, post } = await getStripePostProductId(
    Number(post_id),
    updated_post_is_local === 'true'
  )

  if (!invoice.lines?.data.find((item) => item.price?.product === productId)) {
    return false
  }

  if (invoice.subscription) {
    const subscriptionId =
      typeof invoice.subscription === 'string'
        ? invoice.subscription
        : invoice.subscription?.id
    if (!subscriptionId) {
      throw new Error('Subscription ID not found')
    }

    await cancelOtherStripePostPayments(post.id, productId)
    await updateLastPaymentDateAndActivate(subscriptionId)
    if (
      [
        process.env['STRIPE_PRODUCT_POST_SUBSCRIPTION_INDIVIDUAL'],
        process.env['STRIPE_PRODUCT_POST_SUBSCRIPTION_BUSINESS'],
      ].includes(productId)
    ) {
      await setPostIsLocal(
        post.id,
        false,
        typeof subscription.customer === 'string'
          ? subscription.customer
          : subscription.customer?.id || post.stripe_customer_id || null
      )
    }

    return true
  }

  return false
}
