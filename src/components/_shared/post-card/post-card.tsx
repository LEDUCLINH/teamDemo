import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import AlignLeftIcon from '../../../assets/icons/_shared/post-card/align-left.svg'
import DollarSignIcon from '../../../assets/icons/_shared/post-card/dollar-sign.svg'
import EditIcon from '../../../assets/icons/_shared/post-card/edit.svg'
import MessageSquareIcon from '../../../assets/icons/_shared/post-card/message-square.svg'
import PhoneCallIcon from '../../../assets/icons/_shared/post-card/phone-call.svg'
import TrashIcon from '../../../assets/icons/_shared/post-card/trash.svg'
import { usePostCard__DeletePostMutation } from '../../../generated/graphql'
import { useCity } from '../../../utils/city/city-context'
import Link from '../link/link'
import styles from './post-card.module.scss'

import type {
  Categories as CategoryType,
  Files as FileType,
  Post_Prices as PostPriceType,
  Posts as PostType,
  Sub_Categories as SubCategoryType,
  Users as UserType,
} from '../../../generated/graphql'

type CommonInPostModes = Pick<PostType, 'id' | 'title'> & {
  user: Pick<
    UserType,
    'id' | 'email' | 'public_phone' | 'full_name' | 'business_name'
  > & {
    avatar: Pick<FileType, 'url'>
  }
  post_prices: Pick<PostPriceType, 'price'>[]
  sub_category: Pick<SubCategoryType, 'id' | 'name'> & {
    category: Pick<CategoryType, 'id' | 'name'>
  }
}

export type PostCardProps =
  | { mode: 'MINI'; post: CommonInPostModes }
  | { mode: 'LARGE'; post: CommonInPostModes & { detail?: PostType['detail'] } }
  | { mode: 'OWNER'; post: CommonInPostModes & { detail?: PostType['detail'] } }

function PostCard(props: PostCardProps) {
  const { mode, post } = props

  const router = useRouter()

  const [isDeleted, setIsDeleted] = useState(false)
  const deletePost = usePostCard__DeletePostMutation()[1]
  const handleDelete = useCallback(() => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost({ post_id: post.id }).then(() => {
        setIsDeleted(true)
        router.prefetch(router.basePath, router.asPath, { priority: true })
      })
    }
  }, [deletePost, post.id, router])

  const { zipAndCity } = useCity()
  if (!zipAndCity) {
    return null
  }

  if (isDeleted) {
    return null
  }

  return (
    <div className={`${styles.postCard} ${styles[`postCard__mode-${mode}`]}`}>
      <div className={styles.postCard__content}>
        <div className={styles.postCard__topRow}>
          <Link
            href={`/post/${post.id}`}
            variant={mode === 'MINI' ? 'h6' : 'h5'}
            color="textPrimary"
          >
            {post.title}
          </Link>

          {mode === 'OWNER' ? (
            <>
              <Link href={`/post/edit/${post.id}`}>
                <Image alt="Message" src={EditIcon} />
              </Link>
              <span onClick={handleDelete} style={{ cursor: 'pointer' }}>
                <Image alt="Message" src={TrashIcon} />
              </span>
            </>
          ) : (
            <>
              {post.user.public_phone ? (
                <Link
                  href={`tel:${post.user.public_phone
                    .replace(/ /g, '')
                    .replace(/\-/g, '')}`}
                >
                  <Image alt="Call" src={PhoneCallIcon} />
                </Link>
              ) : (
                <span />
              )}
              <Link href={`/message/${post.user.id}`}>
                <Image alt="Message" src={MessageSquareIcon} />
              </Link>
            </>
          )}
        </div>

        {props.mode !== 'MINI' && props.post.detail ? (
          <Link
            className={styles.postCard__contentDetail}
            href={`/post/${post.id}`}
            variant="body1"
            color="textSecondary"
          >
            <pre>{props.post.detail}</pre>
          </Link>
        ) : null}
      </div>

      <Divider />

      <div className={styles.postCard__bottomRow}>
        <NextLink href={`/seller/${post.user.id}`} passHref>
          <Image
            className={styles.postCard__avatar}
            alt={`${post.user.full_name}'s Avatar`}
            src={
              post.user.avatar?.url
                ? post.user.avatar?.url
                : `https://avatars.dicebear.com/api/initials/${encodeURIComponent(
                    post.user.full_name
                  )}.svg`
            }
            layout="fixed"
            height={64}
            width={64}
            sizes="56px"
            objectFit="cover"
            priority
          />
        </NextLink>

        <div className={styles.postCard__bottomRowInfo}>
          <div>
            <Link
              href={`/seller/${post.user.id}`}
              variant="body2"
              color="primary"
              style={mode === 'MINI' ? {} : { fontWeight: 'bold' }}
            >
              {post.user.full_name}
              {post.user.business_name ? (
                <span className={styles.postCard__colorTextSecondary}>
                  {' '}
                  – {post.user.business_name}
                </span>
              ) : null}
            </Link>
          </div>

          <div>
            <Image alt="Price Range" src={DollarSignIcon} />

            <Link
              href={`/post/${post.id}`}
              variant="body2"
              color="textSecondary"
            >
              {post.post_prices.length > 1 ? (
                <>
                  <span className={styles.postCard__colorText}>
                    {post.post_prices.reduce(
                      (a, c) => (a < c.price ? a : c.price),
                      Infinity
                    )}{' '}
                    $/hr
                  </span>
                  <span> - </span>
                  <span className={styles.postCard__colorText}>
                    {post.post_prices.reduce(
                      (a, c) => (a > c.price ? a : c.price),
                      0
                    )}{' '}
                    $/hr
                  </span>
                </>
              ) : post.post_prices.length > 0 ? (
                <span className={styles.postCard__colorText}>
                  {post.post_prices[0].price} $/hr
                </span>
              ) : (
                'N/A'
              )}
            </Link>
          </div>

          <div>
            <Image alt="Category" src={AlignLeftIcon} />

            <div className={styles.postCard__category}>
              <Typography variant="body2" color="textSecondary">
                {post.sub_category.category.name}
              </Typography>
              <ChevronRightIcon fontSize="small" />
              <Link
                href={`/posts/city-${zipAndCity.city.id}/selected-sub-categories-${post.sub_category.id}/q-/page-1`}
                variant="body2"
                color="textSecondary"
              >
                {post.sub_category.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
