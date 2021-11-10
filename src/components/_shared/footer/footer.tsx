import Image from 'next/image'

import Typography from '@material-ui/core/Typography'

import LogoAsset from '../../../assets/images/_shared/logo.png'
import Link from '../link/link'
import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <Image
          alt="1stKare Logo"
          placeholder="blur"
          src={LogoAsset}
          layout="fixed"
          height={64}
          width={52.04}
          sizes="52.04px"
        />
      </div>

      <div className={styles.footer__bigLinks}>
        <Link href="https://blog.1stkare.com/" noRouter variant="body1">
          BLOG
        </Link>
        <Link href="/contact" noRouter variant="body1">
          CONTACT
        </Link>
        <Link href="/donate" variant="body1">
          DONATE
        </Link>
        <Link href="/faq" noRouter variant="body1">
          FAQ
        </Link>
      </div>

      <div className={styles.footer__smallLinks}>
        <Link href="/terms" variant="body2" color="textSecondary">
          Terms
        </Link>
        <Link href="/privacy" variant="body2" color="textSecondary">
          Privacy
        </Link>
      </div>

      <div className={styles.footer__copyright}>
        <Typography variant="body2" color="textSecondary">
          2021 &copy; 1stKare.com. All rights reserved.
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
