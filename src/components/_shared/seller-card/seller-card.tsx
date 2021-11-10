import Image from 'next/image'
import NextLink from 'next/link'

import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import AlignLeftIcon from '../../../assets/icons/_shared/seller-card/align-left.svg'
import DollarSignIcon from '../../../assets/icons/_shared/seller-card/dollar-sign.svg'
import MapPinIcon from '../../../assets/icons/_shared/seller-card/map-pin.svg'
import { useUser } from '../../../utils/user/user-context'
import Link from '../link/link'
import styles from './seller-card.module.scss'

import type {
  Cities as CityType,
  Files as FileType,
  Post_Prices as PostPriceType,
  Users as UserType,
} from '../../../generated/graphql'

export type SellerCardProps = {
  user: Pick<
    UserType,
    | 'id'
    | 'email'
    | 'public_contact_address'
    | 'public_phone'
    | 'full_name'
    | 'business_name'
  > & {
    avatar: Pick<FileType, 'url'>
    zip_code: { city: Pick<CityType, 'name' | 'state_code'> }
  }
  prices: Pick<PostPriceType, 'id' | 'price'>[]
}

function SellerCard({ user, prices }: SellerCardProps) {
  const { user: me } = useUser()

  return (
    <div className={styles.sellerCard}>
      <div className={styles.sellerCard__top}>
        <div className={styles.sellerCard__avatar}>
          <NextLink href={`/seller/${user.id}`} passHref>
            <Image
              alt={`${user.full_name}'s Avatar`}
              src={
                user.avatar?.url
                  ? user.avatar?.url
                  : `https://avatars.dicebear.com/api/initials/${encodeURIComponent(
                      user.full_name
                    )}.svg`
              }
              layout="fill"
              sizes="96px"
              objectFit="cover"
              priority
            />
          </NextLink>
        </div>

        <div className={styles.sellerCard__titles}>
          <Link href={`/seller/${user.id}`} variant="h5">
            {user.full_name}
          </Link>

          <Typography variant="body1" color="textSecondary">
            {user.business_name}
          </Typography>
        </div>
      </div>

      {!me || me.id !== user.id ? (
        <NextLink href={`/message/${user.id}`} passHref>
          <Button
            variant="contained"
            size="large"
            color="primary"
            style={{ width: '100%' }}
          >
            MESSAGE
          </Button>
        </NextLink>
      ) : null}

      <Divider style={{ width: '100%' }} />

      <div className={styles.sellerCard__infoList}>
        <div className={styles.sellerCard__infoItem}>
          <Image alt="Price Range" src={DollarSignIcon} />

          <Typography variant="body1" color="textPrimary">
            {prices.length > 1 ? (
              <>
                <span className={styles.postCard__colorText}>
                  {prices.reduce(
                    (a, c) => (a < c.price ? a : c.price),
                    Infinity
                  )}{' '}
                  $/hr
                </span>
                <span> - </span>
                <span className={styles.postCard__colorText}>
                  {prices.reduce((a, c) => (a > c.price ? a : c.price), 0)} $/hr
                </span>
              </>
            ) : prices.length > 0 ? (
              <span className={styles.postCard__colorText}>
                {prices[0].price} $/hr
              </span>
            ) : (
              'N/A'
            )}
          </Typography>
        </div>
        <div className={styles.sellerCard__infoItem}>
          <Image alt="Price Range" src={MapPinIcon} />

          <Typography variant="body1" color="textPrimary">
            {user.public_contact_address ? (
              <>
                {user.public_contact_address}
                <br />
              </>
            ) : null}
            {user.zip_code.city.name}, {user.zip_code.city.state_code}
          </Typography>
        </div>
        {user.public_phone ? (
          <div className={styles.sellerCard__infoItem}>
            <Image alt="Price Range" src={AlignLeftIcon} />

            <a
              href={`tel:${user.public_phone
                .replace(/ /g, '')
                .replace(/\-/g, '')}`}
            >
              <Typography variant="body1" color="primary">
                {user.public_phone}
              </Typography>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default SellerCard
