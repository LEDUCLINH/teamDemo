import { useRouter } from 'next/router'
import { FormEvent, useCallback, useEffect, useState } from 'react'

import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import CategoryIcon from '@material-ui/icons/Category'
import SearchIcon from '@material-ui/icons/Search'
import Pagination from '@material-ui/lab/Pagination'

import { theme } from '../../styles/theme'
import { useCity } from '../../utils/city/city-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import PostCard from '../_shared/post-card/post-card'
import PostsFilters from './posts-filters'
import styles from './posts.module.scss'

import type {
  Categories as CategoryType,
  Sub_Categories as SubCategoryType,
} from '../../generated/graphql'
import type { PostCardProps } from '../_shared/post-card/post-card'
import Autosuggest from 'react-autosuggest'
import axios from 'axios'
import { SearchSubCategories } from '../../utils/graphql'
import { print } from 'graphql'

export type PostsProps = {
  city_id: number
  selected_sub_category_ids: number[]
  q: string
  page: number

  categories: (Pick<CategoryType, 'id' | 'name'> & {
    sub_categories: (Pick<SubCategoryType, 'id' | 'name'> & {
      posts_aggregate: { aggregate: { count: number } }
    })[]
  })[]
  result_posts_count: number
  result_posts: PostCardProps['post'][]
}

const useStyles = makeStyles({
  filtersContainerOnDesktop: {
    [theme.breakpoints.down(721)]: {
      display: 'none',
    },
  },
  filtersContainerOnMobile: {
    display: 'none',

    paddingTop: theme.spacing(2),

    [theme.breakpoints.down(721)]: {
      display: 'initial',
    },
  },
  filtersContainerHiddenOnMobile: {
    display: 'none',
  },
  searchForm: {
    display: 'grid',

    gap: 8,
    gridTemplateColumns: '1fr 0',

    [theme.breakpoints.down(721)]: {
      gridTemplateColumns: '56px 1fr 0',
    },
  },
  filtersButton: {
    display: 'none',

    padding: '4px 0 0',

    minWidth: 56,
    width: 56,
    height: 56,

    [theme.breakpoints.down(721)]: {
      display: 'initial',
    },
  },
  searchField: {
    marginRight: -8,

    height: 56,

    borderRadius: 4,

    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[7],
  },
  searchButton: {
    marginLeft: -56,

    minWidth: 56,
    width: 56,
    height: 56,

    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
})

function Posts(props: PostsProps) {
  const [filtersHiddenOnMobile, setFiltersHiddenOnMobile] = useState(true)
  const [term, setTerm] = useState(props.q || '')
  const [subs, setSubs]: any = useState([])

  const router = useRouter()
  const { zipAndCity } = useCity()

  const handleSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      if (!zipAndCity) {
        return
      }

      router.push(
        `/posts/city-${
          zipAndCity.city.id
        }/selected-sub-categories-${props.selected_sub_category_ids.join(
          '-'
        )}/q-${encodeURIComponent(term)}/page-1/`
      )
    },
    [zipAndCity, props.selected_sub_category_ids, router, term]
  )

  const classes = useStyles()

  useEffect(() => {
    if (!props.city_id || !zipAndCity) {
      router.push('/')
    } else if (props.city_id !== zipAndCity.city.id) {
      router.push(
        `/posts/city-${
          zipAndCity.city.id
        }/selected-sub-categories-${props.selected_sub_category_ids.join(
          '-'
        )}/q-${encodeURIComponent(props.q)}/page-1/`
      )
    }
  }, [
    zipAndCity,
    props.city_id,
    props.q,
    props.selected_sub_category_ids,
    router,
  ])
  if (!props.city_id || !zipAndCity) {
    return null
  }

  const onSuggestionsFetchRequested = ({ value }: any) => {
    const api: any = process.env.NEXT_PUBLIC_HASURA_ENDPOINT
    axios
      .post(api, {
        query: print(SearchSubCategories),
        variables: {
          where: {
            _or: [
              {
                name: {
                  _ilike: `%${value}%`,
                },
              },
              {
                category: {
                  name: {
                    _ilike: `%${value}%`,
                  },
                },
              },
              {
                posts: {
                  post_attributes: {
                    possible_value_search: {
                      _ilike: `%${value}%`,
                    },
                  },
                },
              },
            ],
          },
        },
      })
      .then((result) => {
        setSubs(result.data.data.sub_categories)
      })
  }

  const onSuggestionsClearRequested = () => {
    setSubs([])
  }

  const getSuggestionValue = (suggestion: any) => {
    if (!zipAndCity) return

    router.push(
      `/posts/city-${zipAndCity.city.id}/selected-sub-categories-${
        suggestion.id
      }/q-${encodeURIComponent(props.q)}/page-1/`
    )
    return suggestion.name
  }

  function renderSuggestion(suggestion: any) {
    return <span>{suggestion.name}</span>
  }

  const onChange = (_: any, a: any) => {
    setTerm(a.newValue)
  }

  return (
    <>
      <Header />

      <main className={styles.posts}>
        <div className={classes.filtersContainerOnDesktop}>
          <PostsFilters {...props} />
        </div>

        <div className={styles.posts__content}>
          <form
            className={classes.searchForm}
            method="GET"
            action="#"
            onSubmit={handleSearch}
          >
            <Button
              className={classes.filtersButton}
              type="button"
              size="large"
              variant="contained"
              color={!filtersHiddenOnMobile ? 'secondary' : 'primary'}
              onClick={() => setFiltersHiddenOnMobile(!filtersHiddenOnMobile)}
            >
              <CategoryIcon />
            </Button>

            {/* <TextField
              className={`${classes.searchField} ${styles.posts__searchField}`}
              type="search"
              variant="outlined"
              placeholder="Search for posts…"
              size="medium"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            /> */}
            <Autosuggest
              suggestions={subs}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={{
                onChange: onChange,
                value: term,
                placeholder: 'Search for posts…',
              }}
            />
            <Button
              className={classes.searchButton}
              type="submit"
              size="large"
              variant="text"
            >
              <SearchIcon color="secondary" />
            </Button>
          </form>

          <div
            className={`${classes.filtersContainerOnMobile} ${
              filtersHiddenOnMobile
                ? classes.filtersContainerHiddenOnMobile
                : ''
            }`}
          >
            <PostsFilters {...props} />
          </div>

          {!props.result_posts.length ? (
            <Typography color="textSecondary">
              No posts found.
              <br />
              Please adjust the filters and/or your city to see more service
              posts.
            </Typography>
          ) : (
            <div className={styles.posts__contentPostsGrid}>
              {props.result_posts.map((post) => (
                <PostCard key={post.id} mode="MINI" post={post} />
              ))}
            </div>
          )}

          <div style={{ margin: '0 auto' }}>
            <Pagination
              count={Math.ceil(props.result_posts_count / 24)}
              page={props.page}
              onChange={(_e, value) => {
                router.push(
                  `/posts/city-${
                    zipAndCity.city.id
                  }/selected-sub-categories-${props.selected_sub_category_ids.join(
                    '-'
                  )}/q-${encodeURIComponent(props.q)}/page-${value}/`
                )
              }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Posts
