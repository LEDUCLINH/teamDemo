import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import DollarSignIcon from '../../assets/icons/_shared/post-card/dollar-sign.svg'
import EditIcon from '../../assets/icons/_shared/post-card/edit.svg'
import MessageSquareIcon from '../../assets/icons/_shared/post-card/message-square.svg'
import PhoneCallIcon from '../../assets/icons/_shared/post-card/phone-call.svg'
import TrashIcon from '../../assets/icons/_shared/post-card/trash.svg'
import ContentLinkIcon from '../../assets/icons/post-detail/content-link.svg'
import { usePostCard__DeletePostMutation } from '../../generated/graphql'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import Link from '../_shared/link/link'
import SellerCard from '../_shared/seller-card/seller-card'
import styles from './post-detail.module.scss'

import type {
  Categories as CategoryType,
  Cities as CityType,
  Files as FileType,
  Possible_Values as PossibleValueType,
  Posts as PostType,
  Post_Attachments as PostAttachmentType,
  Post_Attributes as PostAttributeType,
  Post_Prices as PostPriceType,
  Properties as PropertyType,
  Sub_Categories as SubCategoryType,
} from '../../generated/graphql'
import type { SellerDetailProps } from '../seller-detail/seller-detail'

export type PostDetailProps = {
  post: Pick<
    PostType,
    'id' | 'posted_by' | 'title' | 'years_of_experience' | 'detail'
  > & {
    user: Omit<SellerDetailProps['user'], 'zip_code'> & {
      zip_code: { city: Pick<CityType, 'id' | 'name' | 'state_code'> }
    }
    post_attachments: (Pick<PostAttachmentType, 'id'> & {
      file: Pick<FileType, 'url' | 'name'>
    })[]
    post_prices: Pick<PostPriceType, 'id' | 'price' | 'detail'>[]
    sub_category: Pick<SubCategoryType, 'id' | 'name'> & {
      category: Pick<CategoryType, 'id' | 'name'> & {
        sub_categories: Pick<SubCategoryType, 'id'>[]
      }
    }
    post_attributes: (Pick<PostAttributeType, 'id'> & {
      possible_value: Pick<PossibleValueType, 'name'> & {
        property: Pick<PropertyType, 'name' | 'order'>
      }
    })[]
  }
}

function PostDetail({ post }: PostDetailProps) {
  const { user: me } = useUser()

  const router = useRouter()

  const deletePost = usePostCard__DeletePostMutation()[1]
  const handleDelete = useCallback(() => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost({ post_id: post.id })
        .then(() =>
          router.prefetch('/seller/[seller_id]', `/seller/${post.user.id}`, {
            priority: true,
          })
        )
        .then(() => router.push(`/seller/${post.user.id}`))
    }
  }, [deletePost, post.id, post.user.id, router])

  return (
    <>
      <Header />

      <main className={styles.postDetail}>
        <SellerCard user={post.user} prices={post.post_prices} />

        <div className={styles.postDetail__content}>
          <div className={styles.postDetail__post}>
            <div className={styles.postDetail__postCategory}>
              <Link
                href={`/posts/city-${
                  post.user.zip_code.city.id
                }/selected-sub-categories-${post.sub_category.category.sub_categories
                  .map((sc) => sc.id)
                  .sort()
                  .join('-')}/q-/page-1`}
                variant="body1"
                color="textSecondary"
              >
                {post.sub_category.category.name}
              </Link>
              <span
                className={styles.postDetail__postCategoryChevronIconContainer}
              >
                <ChevronRightIcon />
              </span>
              <Link
                href={`/posts/city-${post.user.zip_code.city.id}/selected-sub-categories-${post.sub_category.id}/q-/page-1`}
                variant="body1"
                color="textSecondary"
              >
                {post.sub_category.name}
              </Link>
            </div>

            <Divider />

            <div className={styles.postDetail__postTitles}>
              <div className={styles.postDetail__postTitleAndActionRow}>
                <Typography variant="h3" component="h1">
                  {post.title}
                </Typography>

                {me?.id === post.user.id ? (
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

              {!(post.years_of_experience ?? null) ? null : (
                <Typography variant="body2" color="textSecondary">
                  {post.years_of_experience} YEAR
                  {post.years_of_experience === 1 ? '' : 'S'} OF EXPERIENCE
                </Typography>
              )}
            </div>

            <Typography variant="body1">
              <pre>{post.detail}</pre>
            </Typography>

            {!post.post_attributes.length ? null : (
              <div className={styles.postDetail__postAttributes}>
                {post.post_attributes
                  .map((a) => ({
                    id: a.id,
                    order: a.possible_value.property.order,
                    property: a.possible_value.property.name,
                    value: a.possible_value.name,
                  }))
                  .map((a) => (
                    <div key={a.id}>
                      <Typography variant="body2" color="textSecondary">
                        {a.property.toUpperCase()}
                      </Typography>
                      <Typography variant="body1" color="textPrimary">
                        {a.value}
                      </Typography>
                    </div>
                  ))}
              </div>
            )}

            {post.post_attachments.length ? (
              <>
                <Divider />

                <Typography variant="h6">ATTACHMENTS</Typography>

                {post.post_attachments.map((attachment) => (
                  <a
                    key={attachment.id}
                    className={styles.postDetail__postAttachment}
                    href={attachment.file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={attachment.file.name}
                  >
                    <Image alt="Attachment" src={ContentLinkIcon} />
                    <Typography variant="body2" color="primary">
                      {attachment.file.name}
                    </Typography>
                  </a>
                ))}
              </>
            ) : null}
          </div>

          <div className={styles.postDetail__postPrices}>
            <Typography variant="h6">PRICING</Typography>

            <Divider />

            {!post.post_prices.length ? (
              <Typography variant="body2" color="textSecondary">
                Seller has not mentioned any price for the service on this post.
              </Typography>
            ) : (
              post.post_prices.map((price) => (
                <div key={price.id} className={styles.postDetail__postPrice}>
                  <Image alt="Price" src={DollarSignIcon} />

                  <div className={styles.postDetail__postPriceInfo}>
                    <Typography variant="body1">{price.price} $/hr</Typography>

                    {price.detail ? (
                      <Typography variant="body2" color="textSecondary">
                        {price.detail}
                      </Typography>
                    ) : null}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default PostDetail
