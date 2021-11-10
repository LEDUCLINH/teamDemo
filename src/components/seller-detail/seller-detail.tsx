import NextLink from 'next/link'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'

import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import PostCard from '../_shared/post-card/post-card'
import SellerCard from '../_shared/seller-card/seller-card'
import styles from './seller-detail.module.scss'

import type { PostCardProps } from '../_shared/post-card/post-card'
import type { SellerCardProps } from '../_shared/seller-card/seller-card'

export type SellerDetailProps = {
  user: SellerCardProps['user']
  prices: SellerCardProps['prices']
  posts: PostCardProps['post'][]
}

function SellerDetail({ user, prices, posts }: SellerDetailProps) {
  const { user: me } = useUser()

  return (
    <>
      <Header />

      <main className={styles.sellerDetail}>
        <SellerCard user={user} prices={prices} />

        <div className={styles.sellerDetail__content}>
          <div className={styles.sellerDetail__contentTopRow}>
            <Typography variant="h3" component="h1">
              POSTS BY{' '}
              {(user.full_name.split(' ')[0] || 'THIS SELLER').toUpperCase()}
            </Typography>

            {me?.id === user.id ? (
              <NextLink href="/post/new" passHref>
                <Button
                  startIcon={<AddIcon />}
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  New Post
                </Button>
              </NextLink>
            ) : null}
          </div>

          {!posts.length ? (
            <Typography color="textSecondary">
              {me?.id === user.id ? 'You' : 'This seller'} have no posts yet.
            </Typography>
          ) : (
            posts.map((post) => (
              <PostCard
                key={post.id}
                mode={me?.id === user.id ? 'OWNER' : 'LARGE'}
                post={post}
              />
            ))
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default SellerDetail
