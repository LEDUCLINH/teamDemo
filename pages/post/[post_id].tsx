import { gql } from 'graphql-request'
import { NextSeo } from 'next-seo'

import PostDetail from '../../src/components/post-detail/post-detail'
import { hasuraServerRequest } from '../../src/utils/hasura/hasura-server-request'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { PostDetailProps } from '../../src/components/post-detail/post-detail'

function PostDetailPage(props: PostDetailProps) {
  return (
    <>
      <NextSeo title={props.post.title} description={props.post.detail} />

      <PostDetail {...props} />
    </>
  )
}

export default PostDetailPage

type PostDetailParams = { post_id: string }

export const getStaticPaths: GetStaticPaths<PostDetailParams> = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PostDetailProps, PostDetailParams> =
  async ({ params }) => {
    if (!params?.post_id) {
      return { notFound: true }
    }
    const post_id = Number(params.post_id)

    const { post } = await hasuraServerRequest<
      { post: PostDetailProps['post'] },
      { post_id: number }
    >(
      gql`
        query PostDetail_StaticProps($post_id: bigint!) {
          post: posts_by_pk(id: $post_id) {
            id
            posted_by
            title
            years_of_experience
            detail
            user {
              id
              zip_code {
                city {
                  id
                  name
                  state_code
                }
              }
              email
              public_contact_address
              public_phone
              avatar {
                url
              }
              full_name
              business_name
            }
            post_attachments {
              id
              file {
                url
                name
                type
              }
            }
            post_prices {
              id
              price
              detail
            }
            sub_category {
              id
              name
              category {
                id
                name
                sub_categories {
                  id
                }
              }
            }
            post_attributes {
              id
              possible_value {
                name
                property {
                  name
                  order
                }
              }
            }
          }
        }
      `,
      { post_id }
    )

    return {
      props: {
        post,
      },
      revalidate: 1,
    }
  }
