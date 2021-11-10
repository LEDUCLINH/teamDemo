import { gql } from 'graphql-request'
import { NextSeo } from 'next-seo'

import Posts from '../../src/components/posts/posts'
import { hasuraServerRequest } from '../../src/utils/hasura/hasura-server-request'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { PostsProps } from '../../src/components/posts/posts'

function PostsPage(props: PostsProps) {
  const sub_categories = props.categories.map((c) => c.sub_categories).flat()
  const selected_sub_categories = props.selected_sub_category_ids
    .map((id) => sub_categories.find((s) => s.id === id))
    .filter((sc) => !!sc)

  return (
    <>
      <NextSeo
        title="Search service posts"
        description={`Discover for service posts by skilled professionals in ${selected_sub_categories.join(
          ', '
        )} categories${props.q ? ` matching the term "${props.q}"` : ''}.`}
      />

      <Posts {...props} />
    </>
  )
}

export default PostsPage

type PostsParams = {
  params: [`city-${string}`] &
    `${'selected-sub-categories-' | 'q-' | 'page-'}${string}`[]
}

export const getStaticPaths: GetStaticPaths<PostsParams> = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PostsProps, PostsParams> = async ({
  params,
}) => {
  const cityRegex = /^city\-/
  const selectedSubCategoriesRegex = /^selected-sub-categories\-/
  const qRegex = /^q\-/
  const pageRegex = /^page\-/

  const city_id = Number(
    params?.params?.find((p) => cityRegex.test(p))?.replace(cityRegex, '')
  )
  if (!city_id) {
    return { notFound: true }
  }
  const selected_sub_category_ids = (
    params?.params
      ?.find((p) => selectedSubCategoriesRegex.test(p))
      ?.replace(selectedSubCategoriesRegex, '') || ''
  )
    .split('-')
    .filter((id) => !!id)
    .map((id) => Number(id))
  const q =
    params?.params?.find((p) => qRegex.test(p))?.replace(qRegex, '') || ''
  const page =
    Number(
      params?.params?.find((p) => pageRegex.test(p))?.replace(pageRegex, '')
    ) || 1

  const { categories, posts_aggregate, result_posts } =
    await hasuraServerRequest<
      {
        categories: PostsProps['categories']
        posts_aggregate: { aggregate: { count: number } }
        result_posts: PostsProps['result_posts']
      },
      {
        city_id: number
        selected_sub_category_ids?: number[]
        q_ilike?: string
        offset?: number
      }
    >(
      gql`
        query Posts_StaticProps(
          $city_id: bigint!
          $selected_sub_category_ids: [bigint!] = []
          $q_ilike: String! = ""
          $offset: Int = 0
        ) {
          categories {
            id
            name
            sub_categories {
              id
              name
              posts_aggregate {
                aggregate {
                  count
                }
              }
            }
          }
          posts_aggregate(
            where: {
              sub_category_id: { _in: $selected_sub_category_ids }
              _and: [
                {
                  _or: [
                    { is_local: { _eq: false } }
                    {
                      _and: [
                        { is_local: { _eq: true } }
                        { user: { zip_code: { city_id: { _eq: $city_id } } } }
                      ]
                    }
                  ]
                }
                {
                  _or: [
                    { title: { _ilike: $q_ilike } }
                    { detail: { _ilike: $q_ilike } }
                  ]
                }
              ]
            }
          ) {
            aggregate {
              count
            }
          }
          result_posts: posts(
            offset: $offset
            limit: 24
            where: {
              sub_category_id: { _in: $selected_sub_category_ids }
              _and: [
                {
                  _or: [
                    { is_local: { _eq: false } }
                    {
                      _and: [
                        { is_local: { _eq: true } }
                        { user: { zip_code: { city_id: { _eq: $city_id } } } }
                      ]
                    }
                  ]
                }
                {
                  _or: [
                    { title: { _ilike: $q_ilike } }
                    { detail: { _ilike: $q_ilike } }
                  ]
                }
              ]
            }
          ) {
            id
            title
            user {
              id
              email
              public_phone
              avatar {
                url
              }
              full_name
              business_name
            }
            post_prices {
              price
            }
            sub_category {
              id
              name
              category {
                id
                name
              }
            }
          }
        }
      `,
      {
        city_id,
        selected_sub_category_ids,
        q_ilike: `%${q}%`,
        offset: 24 * (page - 1),
      }
    )

  return {
    props: {
      city_id,
      selected_sub_category_ids,
      q,
      page,

      categories,
      result_posts_count: posts_aggregate.aggregate.count,
      result_posts,
    },
    revalidate: 1,
  }
}
