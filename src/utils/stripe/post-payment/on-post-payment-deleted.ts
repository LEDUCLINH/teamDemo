import Stripe from 'stripe'

import {
  deactivatePaymentRecord,
  getStripePostProductId,
  setPostIsLocal,
} from './post-payment-helpers'

export async function onPostPaymentDeleted(subscription: Stripe.Subscription) {
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

  const { productId, isNational, post } = await getStripePostProductId(
    Number(post_id),
    updated_post_is_local === 'true'
  )

  if (
    !subscription.items?.data.find((item) => item.price?.product === productId)
  ) {
    return false
  }

  if (subscription) {
    const subscriptionId =
      typeof subscription === 'string' ? subscription : subscription?.id
    if (!subscriptionId) {
      throw new Error('Subscription ID not found')
    }

    if (isNational) {
      await setPostIsLocal(post.id, true, null)
    }
    await deactivatePaymentRecord(subscriptionId)

    return true
  }

  return false
}
