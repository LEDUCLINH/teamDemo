import Image from 'next/image'
import NextLink from 'next/link'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'

import CityDetailHeroBgAsset from '../../assets/images/city-detail/city-detail-hero-bg.jpg'
import { useUser } from '../../utils/user/user-context'
import CategoryCard from '../_shared/category-card/category-card'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './city-detail.module.scss'

export type CityDetailProps = {
  categories: {
    id: number
    name: string
    sub_categories: {
      id: number
    }[]
  }[]
}

function CityDetail({ categories }: CityDetailProps) {
  const { user, userLoading } = useUser()

  return (
    <>
      <Header />

      <main className={styles.cityDetail}>
        <div className={styles.cityDetail__hero}>
          <Image
            className={styles.cityDetail__heroBg}
            alt="City Chooser page's background image"
            src={CityDetailHeroBgAsset}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            priority
          />

          <div className={styles.cityDetail__heroOverlay}>
            <div>
              <div>
                <Typography variant="h1">
                  Discover skilled service providers near you!
                </Typography>

                <Typography variant="body1" style={{ opacity: 0.84 }}>
                  Choose a category to find skilled professionals and their
                  services posted near you.
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cityDetail__content}>
          <div className={styles.cityDetail__contentCategoriesList}>
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {!userLoading && !user ? (
            <div className={styles.cityDetail__contentSignUpCard}>
              <div className={styles.cityDetail__contentSignUpCardText}>
                <Typography variant="h4">
                  Are you a service provider?
                </Typography>

                <Typography variant="body1" color="textSecondary">
                  Join 1stKare and post your services to get discovered and chat
                  with clients.
                </Typography>
              </div>

              <NextLink href="/sign-up" passHref>
                <Button
                  className={styles.cityDetail__contentSignUpCardButton}
                  size="large"
                  color="primary"
                  variant="outlined"
                  startIcon={<AddIcon />}
                >
                  CREATE AN ACCOUNT
                </Button>
              </NextLink>
            </div>
          ) : null}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default CityDetail
