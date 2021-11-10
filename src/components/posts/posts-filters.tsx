import NextLink from 'next/link'
import { useMemo, useState } from 'react'

import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { theme } from '../../styles/theme'
import { useCity } from '../../utils/city/city-context'
import Link from '../_shared/link/link'
import styles from './posts.module.scss'

import type { PostsProps } from './posts'
type PostsFiltersProps = PostsProps

const useStyles = makeStyles({
  allActionButton: {
    margin: theme.spacing(-0.5, -1),
    padding: theme.spacing(0.5, 1),

    textTransform: 'initial',
  },
  categoryButton: {
    padding: theme.spacing(1),

    width: '100%',

    textTransform: 'initial',
  },
  subCategoryLink: {
    display: 'block',

    textDecoration: 'none !important',
  },
})

function PostsFilters(props: PostsFiltersProps) {
  const classes = useStyles()

  const initiallyExpandedCategoryIds = useMemo(() => {
    const expandedCategoryIds: number[] = []
    for (const category of props.categories) {
      for (const selected_sub_category_id of props.selected_sub_category_ids) {
        if (
          category.sub_categories
            .map((sc) => sc.id)
            .includes(selected_sub_category_id)
        ) {
          expandedCategoryIds.push(category.id)
        }
      }
    }
    return expandedCategoryIds
  }, [props.categories, props.selected_sub_category_ids])
  const [expandedCategoryIds, setExpandedCategoryIds] = useState<number[]>(
    initiallyExpandedCategoryIds
  )

  const { zipAndCity } = useCity()
  if (!zipAndCity) {
    return null
  }

  return (
    <aside className={styles.posts__aside}>
      <div style={{ display: 'flex' }}>
        <NextLink
          href={`/posts/city-${
            zipAndCity.city.id
          }/selected-sub-categories-${props.categories
            .map((c) => c.sub_categories)
            .flat()
            .map((sc) => sc.id)
            .sort()
            .join('-')}/q-${encodeURIComponent(props.q)}/page-1/`}
          passHref
        >
          <Button className={classes.allActionButton}>
            <Typography variant="body2" color="textSecondary">
              Select All
            </Typography>
          </Button>
        </NextLink>
        <span style={{ flex: 1 }} />
        <NextLink
          href={`/posts/city-${
            zipAndCity.city.id
          }/selected-sub-categories-/q-${encodeURIComponent(props.q)}/page-1/`}
          passHref
        >
          <Button className={classes.allActionButton}>
            <Typography variant="body2" color="textSecondary">
              Deselect All
            </Typography>
          </Button>
        </NextLink>
      </div>

      <Divider />

      {props.categories.map((category) => {
        const selectedCount = category.sub_categories
          .map((sc) => sc.id)
          .reduce(
            (a, c) => a + (props.selected_sub_category_ids.includes(c) ? 1 : 0),
            0
          )

        return (
          <div
            key={category.id}
            className={`${styles.posts__category} ${
              expandedCategoryIds.includes(category.id)
                ? styles.posts__categoryActive
                : ''
            }`}
          >
            <Button
              className={classes.categoryButton}
              onClick={() => {
                if (expandedCategoryIds.includes(category.id)) {
                  setExpandedCategoryIds(
                    expandedCategoryIds.filter((id) => id !== category.id)
                  )
                } else {
                  setExpandedCategoryIds([...expandedCategoryIds, category.id])
                }
              }}
            >
              <div className={styles.posts__categoryButtonInner}>
                <Typography variant="body2">
                  {category.name}
                  {selectedCount > 0 ? (
                    <span className={styles.posts__categorySelectedCount}>
                      {' '}
                      ({selectedCount} selected)
                    </span>
                  ) : null}
                </Typography>

                {expandedCategoryIds.includes(category.id) ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </div>
            </Button>

            {expandedCategoryIds.includes(category.id) ? (
              <div className={styles.posts__categoryExandedList}>
                <Divider style={{ marginBottom: 4 }} />

                {category.sub_categories.map((sub_category) => (
                  <Link
                    key={sub_category.id}
                    className={classes.subCategoryLink}
                    href={`/posts/city-${
                      zipAndCity.city.id
                    }/selected-sub-categories-${(props.selected_sub_category_ids.includes(
                      sub_category.id
                    )
                      ? props.selected_sub_category_ids.filter(
                          (id) => id !== sub_category.id
                        )
                      : [...props.selected_sub_category_ids, sub_category.id]
                    )
                      .sort()
                      .join('-')}/q-${encodeURIComponent(props.q)}/page-1/`}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={props.selected_sub_category_ids.includes(
                            sub_category.id
                          )}
                          color="primary"
                          size="small"
                        />
                      }
                      label={
                        <Typography variant="body2" color="textPrimary">
                          {sub_category.name}
                          <span className={styles.posts__categorySelectedCount}>
                            {' '}
                            ({sub_category.posts_aggregate.aggregate.count})
                          </span>
                        </Typography>
                      }
                    />
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        )
      })}
    </aside>
  )
}

export default PostsFilters
