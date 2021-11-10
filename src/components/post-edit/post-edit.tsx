import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import Typography from '@material-ui/core/Typography'

import {
  PostEdit__UpdatePostDocument,
  usePostEdit__GetStripeCustomerPortalLinkMutation,
  usePostEdit__UpdatePostMutation,
} from '../../generated/graphql'
import * as Urql from 'urql'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import PostForm from '../_shared/post-form/post-form'
import usePostFormFeilds from '../_shared/post-form/use-post-form-fields'

import type { PostFormProps } from '../_shared/post-form/post-form'
import type { UsePostFormConfig } from '../_shared/post-form/use-post-form-fields'

export type PostEditProps = {
  categories: PostFormProps['categories']
  postInitial: Exclude<UsePostFormConfig['initialValue'], undefined>
}

function PostEdit({ categories, postInitial }: PostEditProps) {
  const { user } = useUser(true)

  const router = useRouter()

  const fields = usePostFormFeilds({ initialValue: postInitial })

  const [{ fetching, stale, error }, updatePost] =
    usePostEdit__UpdatePostMutation()
  const [{ fetching: redirecting }, getStripeCustomerPortalLink] =
    usePostEdit__GetStripeCustomerPortalLinkMutation()
  const [isSentSuccess, setIsSentSuccess] = useState(false)
  const [customError, setCustomError] = useState<Error | null>(null)

  const handleSubmit = () => {
    if (!fields.title || !fields.detail) {
      console.error('Missing fields')
      return
    }
    console.log({ attributes: fields.attributes })
    const possible_value = fields.attributes
    updatePost({
      post_id: postInitial.id,
      sub_category_id: fields.sub_category_id,
      title: fields.title,
      detail: fields.detail,
      post_attachments: fields.attachment_files.map((file) => ({
        post_id: postInitial.id,
        file_id: file.id,
      })),
      post_prices: fields.prices.map(({ price, detail }) => ({
        post_id: postInitial.id,
        price,
        detail,
      })),
      years_of_experience: fields.years_of_experience,
      post_attributes: { post_id: postInitial.id, possible_value },
    })
      .then(({ data }) => {
        const post_id = postInitial.id
        console.log({ data })
        if (!post_id) {
          throw new Error('Post ID not found')
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
          loading: fetching || redirecting || stale || isSentSuccess,
          error: error ?? null,
          onFinish: handleSubmit,

          fields,

          categories,
        }}
      />

      <Footer />
    </>
  )
}

export default PostEdit
