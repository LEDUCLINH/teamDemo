import { gql } from 'graphql-tag'

export const SearchSubCategories = gql`
  query sub_categories($where: sub_categories_bool_exp) {
    sub_categories(where: $where) {
      id
      name
    }
  }
`
