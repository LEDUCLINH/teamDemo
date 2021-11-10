import { gql } from 'graphql-request'
import { NextSeo } from 'next-seo'

import SellerDetail from '../../src/components/seller-detail/seller-detail'
import { hasuraServerRequest } from '../../src/utils/hasura/hasura-server-request'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { SellerDetailProps } from '../../src/components/seller-detail/seller-detail'

function SellerDetailPage(props: SellerDetailProps) {
  return (
    <>
      <NextSeo title={`${props.user.full_name} — Seller`} />

      <SellerDetail {...props} />
    </>
  )
}

export default SellerDetailPage

type SellerDetailParams = { seller_id: string }

export const getStaticPaths: GetStaticPaths<SellerDetailParams> = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<
  SellerDetailProps,
  SellerDetailParams
> = async ({ params }) => {
  if (!params?.seller_id) {
    return { notFound: true }
  }
  const seller_id = Number(params.seller_id)

  const { user, post_prices, posts } = await hasuraServerRequest<
    {
      user: SellerDetailProps['user']
      post_prices: SellerDetailProps['prices']
      posts: SellerDetailProps['posts']
    },
    { seller_id: number }
  >(
    gql`
      query SellerDetail_StaticProps($seller_id: bigint!) {
        user: users_by_pk(id: $seller_id) {
          id
          email
          public_contact_address
          public_phone
          avatar {
            url
          }
          full_name
          business_name

          zip_code {
            city {
              name
              state_code
            }
          }
        }

        post_prices(where: { post: { posted_by: { _eq: $seller_id } } }) {
          id
          price
        }

        posts(where: { posted_by: { _eq: $seller_id } }) {
          id
          title
          detail
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
            id
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
    { seller_id }
  )

  return {
    props: {
      user,
      prices: post_prices,
      posts,
    },
    revalidate: 1,
  }
}
