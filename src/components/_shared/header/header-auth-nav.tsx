import Image from 'next/image'
import NextLink from 'next/link'

import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import useLogout from '../../../utils/auth/use-logout'
import { useCity } from '../../../utils/city/city-context'
import useDropDown from '../../../utils/use-drop-down/use-drop-down'
import useMobileView from '../../../utils/use-mobile-view/use-mobile-view'
import { UserContextValue } from '../../../utils/user/user-context'
import Link from '../link/link'
import styles from './header.module.scss'

type HeaderAuthNavProps = {
  user: Exclude<UserContextValue['user'], null>
}

function HeaderAuthNav({ user }: HeaderAuthNavProps) {
  const { zipAndCity } = useCity(false)
  const logout = useLogout({
    redirectTo: zipAndCity ? `/city/${zipAndCity.city.id}` : '/',
  })

  const [menuRef, isMenuOpen, toggleMenu] = useDropDown()

  const wide = useMobileView({ inverse: true })
  const narrow = useMobileView()

  return (
    <>
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
          Posts
        </Button>
      </NextLink>

      <NextLink href="/messages" passHref>
        <Button
          variant="text"
          color="primary"
          size="large"
          className={`${wide} ${styles.header__navButtonsDefault}`}
        >
          Messages
        </Button>
      </NextLink>

      <span>
        <Button className={styles.header__avatar} onClick={toggleMenu}>
          <Image
            alt={`${user.full_name}'s Avatar`}
            src={
              user.avatar?.url
                ? user.avatar?.url
                : `https://avatars.dicebear.com/api/initials/${encodeURIComponent(
                    user.full_name
                  )}.svg`
            }
            layout="fixed"
            height={56}
            width={56}
            sizes="56px"
            objectFit="cover"
            priority
          />
        </Button>

        {!isMenuOpen ? null : (
          <div className={styles.header__menu} ref={menuRef}>
            <Typography variant="body2">{user.full_name}</Typography>

            <Link href={`/seller/${user.id}`}>MY POSTS</Link>
            <Link href="/settings/seller-profile">SELLER PROFILE</Link>
            <Link href="/settings/account">ACCOUNT SETTINGS</Link>

            <Divider />

            <Link
              className={narrow}
              href={zipAndCity ? `/city/${zipAndCity.id}` : '/'}
            >
              POSTS
            </Link>
            <Link className={narrow} href={`/messages`}>
              MESSAGES
            </Link>

            <Divider className={narrow} />

            <Link href={`https://blog.1stkare.com`} noRouter>
              BLOG
            </Link>
            <Link href={`/donate`}>DONATE</Link>

            <Divider />

            <Link
              href={zipAndCity ? `/city/${zipAndCity.id}` : '/'}
              onClick={logout}
            >
              LOGOUT
            </Link>
          </div>
        )}
      </span>
    </>
  )
}

export default HeaderAuthNav
