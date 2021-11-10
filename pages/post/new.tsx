import { gql } from 'graphql-request'
import { NextSeo } from 'next-seo'

import PostNew from '../../src/components/post-new/post-new'
import { hasuraServerRequest } from '../../src/utils/hasura/hasura-server-request'

import type { GetStaticProps } from 'next'
import type { PostNewProps } from '../../src/components/post-new/post-new'

function PostNewPage(props: PostNewProps) {
  return (
    <>
      <NextSeo title="Create a new post" />

      <PostNew {...props} />
    </>
  )
}

export default PostNewPage

export const getStaticProps: GetStaticProps<PostNewProps> = async () => {
  const { categories } = await hasuraServerRequest<{
    categories: PostNewProps['categories']
  }>(
    gql`
      query PostNew_StaticProps {
        categories {
          id
          name
          sub_categories {
            id
            name
            max_post_images
            properties {
              id
              name
              order
              is_mandatory
              possible_values {
                id
                values
              }
            }
          }
        }
      }
    `
  )

  return {
    props: {
      categories,
    },
    revalidate: 1,
  }
}
