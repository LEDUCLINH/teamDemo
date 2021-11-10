import dynamic from 'next/dynamic'
import Image from 'next/image'
import NextLink from 'next/link'

import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/icons/Menu'
import Place from '@material-ui/icons/Place'

import LogoAsset from '../../../assets/images/_shared/logo.png'
import { useCity } from '../../../utils/city/city-context'
import useDropDown from '../../../utils/use-drop-down/use-drop-down'
import useMobileView from '../../../utils/use-mobile-view/use-mobile-view'
import { useUser } from '../../../utils/user/user-context'
import Link from '../link/link'
import styles from './header.module.scss'

const HeaderAuthNav = dynamic(() => import('./header-auth-nav'))

function Header() {
  const { user, userLoading } = useUser()

  const { zipAndCity } = useCity(false)

  const [menuRef, isMenuOpen, toggleMenu] = useDropDown()

  const wide = useMobileView({ inverse: true })
  const narrow = useMobileView()

  return (
    <header className={styles.header}>
      <NextLink
        href={zipAndCity ? `/city/${zipAndCity.city.id}` : '/'}
        passHref
      >
        <Button className={styles.header__logo}>
          <Image
            alt="1stKare Logo"
            src={LogoAsset}
            placeholder="blur"
            layout="fixed"
            height={64}
            width={52.04}
            sizes="52.04px"
            priority
          />
        </Button>
      </NextLink>

      <span className={narrow} />

      <NextLink href="/?stay=1" passHref>
        <Button
          className={styles.header__location}
          startIcon={<Place color="secondary" />}
        >
          <Typography
            className={styles.header__locationText}
            variant="body2"
            color={zipAndCity ? 'textPrimary' : 'textSecondary'}
          >
            {zipAndCity
              ? `${zipAndCity.city.name}, ${zipAndCity.city.state_code}`
              : 'Enter you city *'}
          </Typography>
        </Button>
      </NextLink>

      <span className={wide} />

      <nav className={styles.header__nav}>
        {userLoading ? (
          <></>
        ) : user ? (
          <HeaderAuthNav user={user} />
        ) : (
          <>
            <span className={narrow}>
              <Button className={styles.header__avatar} onClick={toggleMenu}>
                <Menu />
              </Button>

              {!isMenuOpen ? null : (
                <div className={styles.header__menu} ref={menuRef}>
                  <NextLink href="/sign-up" passHref>
                    <Button variant="contained" color="primary" size="large">
                      GET STARTED
                    </Button>
                  </NextLink>

                  <Link href={zipAndCity ? `/city/${zipAndCity.city.id}` : '/'}>
                    POSTS
                  </Link>

                  <Divider />

                  <Link href={`/blog`}>BLOG</Link>

                  <Link href={`/donate`}>DONATE</Link>
                </div>
              )}
            </span>

            <NextLink
              href={zipAndCity ? `/city/${zipAndCity.city.id}` : '/'}
              passHref
            >
              <Button
                variant="text"
                color="primary"
                size="large"
                className={`${wide} ${styles.header__navButtonsDefault}`}
              >
                POSTS
              </Button>
            </NextLink>

            <NextLink href="/sign-up" passHref>
              <Button
                className={wide}
                variant="contained"
                color="primary"
                size="large"
              >
                GET STARTED
              </Button>
            </NextLink>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
