import { DropzoneDialog } from 'material-ui-dropzone'
import NextError from 'next/error'
import Image from 'next/image'
import NextLink from 'next/link'
import router from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import EditIcon from '@material-ui/icons/Edit'

import {
  useSettingsSellerProfile__GetStripeCustomerPortalLinkMutation,
  useSettingsSellerProfile__UpdateProfileMutation,
} from '../../generated/graphql'
import { upload } from '../../utils/object-storage/upload'
import useSearchParams from '../../utils/use-search-params/use-search-params'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import Link from '../_shared/link/link'
import styles from './settings-seller-profile.module.scss'

import type { FormEvent } from 'react'
import type { AuthSignUpOnHasuraInput } from '../../utils/auth/types'

type SettingsSellerProfileProps = unknown

function SettingsSellerProfile(_: SettingsSellerProfileProps) {
  const { user, userLoading, refresh: refreshUser, auth } = useUser(true)

  const query = useSearchParams()
  const onboarding = query.get('onboarding') === '1'

  const [loading, setLoading] = useState(false)
  const [customError, setCustomError] = useState<Error | null>(null)

  const [business_size, setBusinessSize] = useState<
    AuthSignUpOnHasuraInput['business_size']
  >(
    (user?.business_size as AuthSignUpOnHasuraInput['business_size']) ??
      'INDIVIDUAL'
  )
  const [business_name, setBusinessName] = useState<
    AuthSignUpOnHasuraInput['business_name']
  >(user?.business_name ?? '')
  const [contact_address, setContactAddress] = useState<string>(
    user?.contact_address ?? ''
  )
  const [is_privacy_enabled, setIsPrivacyEnabled] = useState<boolean>(
    user?.is_privacy_enabled ?? true
  )

  useEffect(() => {
    setBusinessSize(
      (prev) =>
        (user?.business_size as AuthSignUpOnHasuraInput['business_size']) ??
        prev
    )
    setBusinessName((prev) => user?.business_name ?? prev)
    setContactAddress((prev) => user?.contact_address ?? prev)
    setIsPrivacyEnabled((prev) => user?.is_privacy_enabled ?? prev)
  }, [user])

  const goToCheckout = useCallback(
    async (onboarding: boolean): Promise<boolean> => {
      if (!user) {
        setCustomError(new Error('User not found'))
        return false
      }

      setLoading(true)

      await fetch('/api/stripe/user-subscription/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          onboarding,
          email: user.email,
          user_id: user.id,
        }),
      })
        .then((res) => res.json())
        .then((data: { url: string }) => (window.location.href = data.url))
        .catch(setCustomError)
        .finally(() => setLoading(false))

      return true
    },
    [user]
  )

  const [{ fetching, error }, updateProfile] =
    useSettingsSellerProfile__UpdateProfileMutation()
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      if (!user) {
        return
      }

      const wantsToBeNational =
        business_size === 'NATIONAL_BUSINESS' &&
        user.business_size !== 'NATIONAL_BUSINESS'

      updateProfile({
        user_id: user.id,
        _set: {
          business_size: wantsToBeNational ? user.business_size : business_size,
          business_name: business_name || null,
          contact_address: contact_address || null,
          is_privacy_enabled,
        },
      }).then(() =>
        Promise.all([
          refreshUser(),

          wantsToBeNational
            ? goToCheckout(onboarding)
            : onboarding
            ? router.push('/post/new?onboarding=1')
            : Promise.resolve(true),
        ])
      )
    },
    [
      business_name,
      business_size,
      contact_address,
      goToCheckout,
      is_privacy_enabled,
      onboarding,
      refreshUser,
      updateProfile,
      user,
    ]
  )

  const [isAvatarDialogOpen, setIsAvatarDialogOpen] = useState(false)
  const handleChangeAvatar = useCallback(
    (files) => {
      const file = files[0]
      const token = auth.idToken?.token
      if (!file || !user || !token) {
        return
      }

      setLoading(true)
      setCustomError(null)

      upload(file, token)
        .then((data) =>
          updateProfile({
            user_id: user.id,
            _set: { avatar_file_id: data.file.id },
          })
        )
        .then(() => refreshUser())
        .catch(setCustomError)
        .finally(() => setLoading(false))
    },
    [auth.idToken?.token, refreshUser, updateProfile, user]
  )

  const [{ fetching: gettingLink }, getStripeCustomerPortalLink] =
    useSettingsSellerProfile__GetStripeCustomerPortalLinkMutation()

  return (
    <>
      <Header />

      {!user && !userLoading ? (
        <NextError statusCode={401} />
      ) : (
        <main className={styles.settings}>
          <form
            className={styles.settings__paper}
            method="POST"
            action="#"
            onSubmit={handleSubmit}
          >
            {!user || userLoading ? (
              <div style={{ textAlign: 'center' }}>
                <CircularProgress />
              </div>
            ) : (
              <>
                <div style={{ textAlign: 'center' }}>
                  <Button
                    className={styles.settings__avatar}
                    onClick={() => setIsAvatarDialogOpen(true)}
                    title="Change Avatar"
                    disabled={fetching || loading}
                  >
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <>
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
                        <div className={styles.settings__avatarOverlay}>
                          <EditIcon />
                        </div>
                      </>
                    )}
                  </Button>
                  <DropzoneDialog
                    open={isAvatarDialogOpen}
                    onSave={(files) => {
                      handleChangeAvatar(files)
                      setIsAvatarDialogOpen(false)
                    }}
                    acceptedFiles={['image/*']}
                    filesLimit={1}
                    previewGridProps={{
                      container: { xs: 12 },
                      item: { xs: 12 },
                    }}
                    maxFileSize={5000000}
                    onClose={() => setIsAvatarDialogOpen(false)}
                    submitButtonText="Upload"
                  />
                </div>

                <Typography variant="h5" component="h1" align="center">
                  {onboarding
                    ? 'Let us know more about your business'
                    : 'Seller Profile Settings'}
                </Typography>

                {business_size === 'NATIONAL_BUSINESS' &&
                !(
                  business_size === 'NATIONAL_BUSINESS' &&
                  user.business_size !== 'NATIONAL_BUSINESS'
                ) ? (
                  <div
                    style={{
                      display: 'grid',
                      gap: 8,
                      width: '100%',
                      paddingBottom: 8,
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      style={{ width: '100%' }}
                    >
                      <span className={styles.settings__paperTextSecondary}>
                        Business Size:
                      </span>{' '}
                      National Business
                    </Typography>

                    <Button
                      variant="outlined"
                      color="primary"
                      disabled={loading || gettingLink}
                      style={{ margin: '0 auto 0 0' }}
                      size="small"
                      onClick={() => {
                        setCustomError(null)

                        getStripeCustomerPortalLink({
                          path: router.asPath,
                        })
                          .then(({ error, data }) => {
                            if (error) {
                              throw error
                            }

                            const link =
                              data?.get_stripe_customer_portal_link.link
                            if (link) {
                              window.location.href = link
                            }
                          })
                          .catch(setCustomError)
                      }}
                    >
                      Manage Subscription
                    </Button>
                  </div>
                ) : (
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="business-size-select-label">
                      Business Size
                    </InputLabel>
                    <Select
                      labelId="business-size-select-label"
                      id="business-size-select"
                      label="Business Size"
                      aria-label="Business Size"
                      disabled={fetching || loading}
                      value={business_size}
                      onChange={(e) =>
                        setBusinessSize(e.target.value as typeof business_size)
                      }
                      required
                    >
                      <MenuItem value="INDIVIDUAL">
                        Individual Freelancer
                      </MenuItem>
                      <MenuItem value="LOCAL_BUSINESS">Local Business</MenuItem>
                      <MenuItem value="NATIONAL_BUSINESS">
                        National Business
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}

                <FormControl fullWidth>
                  <TextField
                    type="text"
                    label="Business Name"
                    aria-label="Business Name"
                    size="medium"
                    variant="outlined"
                    disabled={fetching || loading}
                    value={business_name}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                    type="text"
                    label="Street Address"
                    aria-label="Street Address"
                    size="medium"
                    variant="outlined"
                    disabled={fetching || loading}
                    value={contact_address}
                    onChange={(e) => setContactAddress(e.target.value)}
                    helperText={
                      <>
                        {user.zip_code.city.name},{' '}
                        {user.zip_code.city.state_code} (
                        <Link
                          href={`/?stay=1&continue=${encodeURIComponent(
                            router.asPath
                          )}`}
                        >
                          Change
                        </Link>
                        )
                      </>
                    }
                  />
                </FormControl>

                <div style={{ display: 'grid', gap: 8, width: '100%' }}>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ width: '100%' }}
                  >
                    <span className={styles.settings__paperTextSecondary}>
                      Phone:
                    </span>{' '}
                    {user.phone || 'N/A'}
                  </Typography>

                  <NextLink
                    href={`/settings/update-phone-number?continue=${encodeURIComponent(
                      router.asPath
                    )}`}
                    passHref
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      disabled={loading}
                      style={{ margin: '0 auto 0 0' }}
                      size="small"
                    >
                      {user.phone ? 'Update Number' : 'Set Phone Number'}
                    </Button>
                  </NextLink>
                </div>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={is_privacy_enabled}
                      onChange={(e) => setIsPrivacyEnabled(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="Enable street and phone privacy"
                  style={{ marginRight: 'auto' }}
                />

                <Button
                  type="submit"
                  color="primary"
                  size="large"
                  variant="contained"
                  disabled={fetching || loading}
                  style={{ width: '100%' }}
                >
                  {onboarding ? 'Continue' : 'Save Changes'}
                </Button>

                {!error?.message && !customError?.message ? null : (
                  <>
                    <Divider style={{ width: '100%' }} />

                    <Typography variant="body2" color="error" component="div">
                      {error?.message || customError?.message}
                    </Typography>
                  </>
                )}
              </>
            )}
          </form>
        </main>
      )}
      <Footer />
    </>
  )
}

export default SettingsSellerProfile
