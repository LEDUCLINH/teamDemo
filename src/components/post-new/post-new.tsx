import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'

import Typography from '@material-ui/core/Typography'

import {
  usePostNew__GetStripeCustomerPortalLinkMutation,
  usePostNew__InsertPostMutation,
  usePostNew__PreviousPostsCountQuery,
} from '../../generated/graphql'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import PostForm from '../_shared/post-form/post-form'
import usePostFormFeilds from '../_shared/post-form/use-post-form-fields'

import type { PostFormProps } from '../_shared/post-form/post-form'

export type PostNewProps = {
  categories: PostFormProps['categories']
  // property_screens: PostFormProps['property_screens']
}

function PostNew({ categories }: PostNewProps) {
  const { user } = useUser(true)

  const router = useRouter()

  const fields = usePostFormFeilds()

  const [{ fetching, stale, error }, insertPost] =
    usePostNew__InsertPostMutation()

  const [{ fetching: redirecting }, getStripeCustomerPortalLink] =
    usePostNew__GetStripeCustomerPortalLinkMutation()
  const [isSentSuccess, setIsSentSuccess] = useState(false)
  const [customError, setCustomError] = useState<Error | null>(null)

  const handleSubmit = () => {
    if (!fields.title || !fields.detail) {
      console.error('Missing fields')
      return
    }
    console.log({ attribute: fields.attributes })
    const possible_value =
      fields.attributes?.length === 0 ? {} : fields.attributes
    // const post_attribue = fields.attributes
    insertPost({
      sub_category_id: fields.sub_category_id,
      title: fields.title,
      detail: fields.detail,
      post_attachments: fields.attachment_files.map((file) => ({
        file_id: file.id,
      })),
      post_prices: fields.prices.map(({ price, detail }) => ({
        price,
        detail,
      })),
      years_of_experience: fields.years_of_experience,
      post_attributes: { possible_value },
    })
      .then(({ data }) => {
        const post_id = data?.insert_posts_one?.id
        console.log({ post_id })
        if (!post_id) {
          throw new Error('New post ID not found')
        }

        if (user?.business_size === 'NATIONAL_BUSINESS') {
          router.push(`/post/${post_id}`)

          setIsSentSuccess(true)
        } else {
          getStripeCustomerPortalLink({
            post_id,
            updated_post_is_local: fields.is_local || false,
          })
            .then(({ error, data }) => {
              if (error) {
                throw error
              }

              const url = data?.checkout_or_manage_post_payment.url
              if (url) {
                window.location.href = url
              }

              setIsSentSuccess(true)
            })
            .catch(setCustomError)
        }
      })
      .catch(console.error)
  }

  const [{ data: previousPosts }] = usePostNew__PreviousPostsCountQuery({
    variables: { user_id: user?.id },
  })
  const limitReached = useMemo(
    () =>
      !!(
        previousPosts?.posts_aggregate.aggregate?.count &&
        previousPosts.posts_aggregate.aggregate.count >= 3
      ),
    [previousPosts?.posts_aggregate.aggregate?.count]
  )

  console.log(fields)

  return (
    <>
      <Header />

      {!customError?.message ? null : (
        <Typography
          variant="body2"
          color="error"
          component="div"
          align="center"
          style={{ padding: 24 }}
        >
          {customError.message}
        </Typography>
      )}

      <PostForm
        {...{
          loading:
            fetching || redirecting || stale || isSentSuccess || limitReached,
          error: limitReached
            ? new Error('Sorry, you can have only a maximum of 3 posts.')
            : error ?? null,
          onFinish: limitReached ? () => {} : () => handleSubmit(),

          fields,

          categories,
        }}
      />

      <Footer />
    </>
  )
}

export default PostNew
