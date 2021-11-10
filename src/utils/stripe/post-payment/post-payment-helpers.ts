import { gql } from 'graphql-request'
import Stripe from 'stripe'

import {
  Posts as PostType,
  Users as UserType,
} from '../../../generated/graphql'
import { hasuraServerRequest } from '../../hasura/hasura-server-request'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

export async function isPostNational(post_id: number) {
  type PostsResponse = (Pick<
    PostType,
    'id' | 'is_local' | 'stripe_customer_id'
  > & { user: Pick<UserType, 'id' | 'email' | 'business_size'> })[]
  const { posts } = await hasuraServerRequest<
    { posts: PostsResponse },
    { post_id: number }
  >(
    gql`
      query IsPostNational($post_id: bigint!) {
        posts(limit: 1, where: { id: { _eq: $post_id } }) {
          id
          is_local
          stripe_customer_id
          user {
            id
            email
            business_size
          }
        }
      }
    `,
    { post_id }
  )
  const post = posts[0]
  if (!post) {
    throw new Error('Post not found')
  }
  const user = post.user
  if (!user) {
    throw new Error('User not found')
  }

  return {
    isNational: !post.is_local && post.stripe_customer_id,
    post,
    user,
  }
}

export async function getStripePostProductId(
  post_id: number,
  updated_post_is_local: boolean | null
) {
  const isPostNationalReturns = await isPostNational(post_id)

  const user = isPostNationalReturns.user

  if (updated_post_is_local === null) {
    updated_post_is_local = isPostNationalReturns.post.is_local
  }

  let productId: string | undefined
  switch (user.business_size) {
    case 'INDIVIDUAL':
      productId = updated_post_is_local
        ? process.env['STRIPE_PRODUCT_POST_SPONSORSHIP_INDIVIDUAL']
        : process.env['STRIPE_PRODUCT_POST_SUBSCRIPTION_INDIVIDUAL']
      break

    case 'LOCAL_BUSINESS':
      productId = updated_post_is_local
        ? process.env['STRIPE_PRODUCT_POST_SPONSORSHIP_BUSINESS']
        : process.env['STRIPE_PRODUCT_POST_SUBSCRIPTION_BUSINESS']
      break

    default:
      throw new Error('Invalid business size')
  }
  if (!productId) {
    throw new Error('Product ID not supported')
  }

  return {
    productId,
    ...isPostNationalReturns,
  }
}

export async function setPostIsLocal(
  post_id: number,
  is_local: boolean,
  stripe_customer_id: string | null
) {
  await hasuraServerRequest<
    { affected_rows: number },
    { post_id: number; is_local: boolean; stripe_customer_id: string | null }
  >(
    gql`
      mutation SetPostIsLocal(
        $post_id: bigint!
        $is_local: Boolean!
        $stripe_customer_id: String
      ) {
        update_posts(
          where: { id: { _eq: $post_id } }
          _set: { is_local: $is_local, stripe_customer_id: $stripe_customer_id }
        ) {
          affected_rows
        }
      }
    `,
    { post_id, is_local, stripe_customer_id }
  )
}

export async function cancelOtherStripePostPayments(
  post_id: number,
  activeProductId: string
) {
  const { post } = await getStripePostProductId(post_id, null)

  const { data: allActiveSubscriptions } = await stripe.subscriptions.list({
    status: 'active',
  })
  const otherPostSubscriptions = allActiveSubscriptions.filter(
    (s) =>
      s.metadata?.post_id === post.id &&
      !s.items.data.find((i) => i.price.product === activeProductId)
  )

  await Promise.all(
    otherPostSubscriptions.map((subscription) =>
      stripe.subscriptions.update(subscription.id, {
        cancel_at_period_end: true,
      })
    )
  )
}

export async function updateLastPaymentDateAndActivate(subscriptionId: string) {
  await hasuraServerRequest<
    { update_payments: { id: number } },
    { stripe_subscription_id: string }
  >(
    gql`
      mutation UpdateLastPaymentDate(
        $last_payment: timestamptz
        $stripe_subscription_id: String
      ) {
        update_payments(
          where: { stripe_subscription_id: { _eq: $stripe_subscription_id } }
          _set: { active: true, last_payment: "now()" }
        ) {
          returning {
            id
          }
        }
      }
    `,
    {
      stripe_subscription_id: subscriptionId,
    }
  )
}

export async function recordNewPayment(
  stripe_subscription_id: string,
  user_id: number,
  post_id?: number
) {
  await hasuraServerRequest<
    { insert_payments_one: { id: number } },
    { stripe_subscription_id: string; user_id: number; post_id?: number }
  >(
    gql`
      mutation RecordNewPayment(
        $stripe_subscription_id: String!
        $user_id: bigint!
        $post_id: bigint
      ) {
        insert_payments_one(
          object: {
            active: true
            stripe_subscription_id: $stripe_subscription_id
            user_id: $user_id
            post_id: $post_id
            last_payment: "now()"
          }
        ) {
          id
        }
      }
    `,
    {
      stripe_subscription_id,
      user_id,
      post_id,
    }
  )
}

export async function deactivatePaymentRecord(stripe_subscription_id: string) {
  await hasuraServerRequest<
    { update_payments: { affected_rows: number } },
    { stripe_subscription_id: string }
  >(
    gql`
      mutation DeactivatePaymentRecord($stripe_subscription_id: String) {
        update_payments(
          where: { stripe_subscription_id: { _eq: $stripe_subscription_id } }
          _set: { active: false }
        ) {
          affected_rows
        }
      }
    `,
    { stripe_subscription_id }
  )
}
