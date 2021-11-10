import { gql } from 'graphql-request'
import { NextSeo } from 'next-seo'

import PostEdit from '../../../src/components/post-edit/post-edit'
import { hasuraServerRequest } from '../../../src/utils/hasura/hasura-server-request'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { PostEditProps } from '../../../src/components/post-edit/post-edit'
import type {
  Categories as CategoryType,
  Files as FileType,
  Possible_Values as PossibleValueType,
  Posts as PostType,
  Post_Attributes as PostAttributeType,
  Post_Prices as PostPriceType,
  Sub_Categories as SubCategoryType,
} from '../../../src/generated/graphql'
import { CropDinSharp } from '@material-ui/icons'

function PostEditPage(props: PostEditProps) {
  console.log({ props })
  return (
    <>
      <NextSeo title="Update your post" />

      <PostEdit {...props} />
    </>
  )
}

export default PostEditPage

type PostEditParams = { post_id: string }

export const getStaticPaths: GetStaticPaths<PostEditParams> = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PostEditProps, PostEditParams> =
  async ({ params }) => {
    if (!params?.post_id) {
      return { notFound: true }
    }
    const post_id = Number(params.post_id)

    const { categories, post } = await hasuraServerRequest<
      {
        categories: PostEditProps['categories']
        post: Pick<
          PostType,
          'id' | 'is_local' | 'title' | 'detail' | 'years_of_experience'
        > & {
          sub_category: Pick<SubCategoryType, 'id'> & {
            category: Pick<CategoryType, 'id'>
          }
          post_attachments: (Pick<PostPriceType, 'id'> & {
            file: Pick<FileType, 'id' | 'url' | 'name'>
          })[]
          post_prices: Pick<PostPriceType, 'id' | 'price' | 'detail'>[]
          post_attributes: any
        }
      },
      { post_id: number }
    >(
      gql`
        query PostEdit_StaticProps($post_id: bigint!) {
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
                  values
                }
              }
            }
          }

          post: posts_by_pk(id: $post_id) {
            id

            sub_category {
              id
              category {
                id
              }
            }
            is_local

            title
            detail
            post_attachments {
              id
              file {
                id
                url
                name
              }
            }

            post_prices {
              id
              price
              detail
            }
            years_of_experience

            post_attributes {
              possible_value
            }
          }
        }
      `,
      { post_id }
    )

    return {
      props: {
        categories,
        postInitial: {
          id: post.id,

          // FORM - General:
          sub_category_id: post.sub_category.id,
          category_id: post.sub_category.category.id,
          is_local: post.is_local,

          // FORM - Title:
          title: post.title,
          detail: post.detail,
          attachment_files: post.post_attachments.map(
            (attachment) => attachment.file
          ),

          // FORM - Price:
          prices: post.post_prices,
          years_of_experience: post.years_of_experience,

          // FORM - <attributes>
          attributes: post.post_attributes.possible_value,
        },
      },
      revalidate: 1,
    }
  }
