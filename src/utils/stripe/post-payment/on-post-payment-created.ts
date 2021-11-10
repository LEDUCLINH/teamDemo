import Stripe from 'stripe'

import {
  cancelOtherStripePostPayments,
  getStripePostProductId,
  recordNewPayment,
  setPostIsLocal,
} from './post-payment-helpers'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

export async function onPostPaymentCreated(session: Stripe.Checkout.Session) {
  const { user_id, post_id, updated_post_is_local } = session.metadata || {}
  if (
    !user_id ||
    !post_id ||
    updated_post_is_local === undefined ||
    updated_post_is_local === null
  ) {
    return false
  }

  const { productId, post, user } = await getStripePostProductId(
    Number(post_id),
    updated_post_is_local === 'true'
  )

  const subscriptionId =
    typeof session.subscription === 'string'
      ? session.subscription
      : session.subscription?.id
  if (!subscriptionId) {
    throw new Error('No subscription id')
  }
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  if (
    !subscription.items.data.find((item) => item.price.product === productId)
  ) {
    return false
  }

  await stripe.subscriptions.update(subscription.id, {
    metadata: {
      ...subscription.metadata,
      ...session.metadata,
    },
  })

  if (session.payment_status === 'paid' && session.mode === 'subscription') {
    await cancelOtherStripePostPayments(post.id, productId)
    if (
      [
        process.env['STRIPE_PRODUCT_POST_SUBSCRIPTION_INDIVIDUAL'],
        process.env['STRIPE_PRODUCT_POST_SUBSCRIPTION_BUSINESS'],
      ].includes(productId)
    ) {
      await setPostIsLocal(
        post.id,
        false,
        typeof session.customer === 'string'
          ? session.customer
          : session.customer?.id || null
      )
    }
    await recordNewPayment(subscription.id, user.id, post.id)

    return true
  }

  return false
}
