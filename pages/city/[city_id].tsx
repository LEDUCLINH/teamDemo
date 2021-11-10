import { gql } from 'graphql-request'
import { NextSeo } from 'next-seo'

import CityDetail from '../../src/components/city-detail/city-detail'
import { hasuraServerRequest } from '../../src/utils/hasura/hasura-server-request'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { CityDetailProps } from '../../src/components/city-detail/city-detail'

function CityDetailPage(props: CityDetailProps) {
  return (
    <>
      <NextSeo title="Discover skilled professionals near you!" />

      <CityDetail {...props} />
    </>
  )
}

export default CityDetailPage

export const getStaticPaths: GetStaticPaths<{ city_id: string }> = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<CityDetailProps> = async () => {
  const { categories } = await hasuraServerRequest<{
    categories: {
      id: number
      name: string
      sub_categories: {
        id: number
      }[]
    }[]
  }>(gql`
    query CityDetail__StaticProps {
      categories {
        id
        name
        sub_categories {
          id
        }
      }
    }
  `)

  return {
    props: {
      categories,
    },
    revalidate: 1,
  }
}
