import NextError from 'next/error'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import LogoAsset from '../../assets/images/_shared/logo.png'
import { useSettingsSellerProfile__UpdateProfileMutation } from '../../generated/graphql'
import { getAuth } from '../../utils/firebase/firebase-app'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './settings-account.module.scss'

import type { FormEvent } from 'react'
import type { AuthSignUpOnHasuraInput } from '../../utils/auth/types'

type SettingsAccountProps = unknown

function SettingsAccount(_: SettingsAccountProps) {
  const { user, userLoading, refresh: refreshUser, auth } = useUser(true)

  const [loading, setLoading] = useState(false)
  const [customError, setCustomError] = useState<Error | null>(null)

  const [full_name, setFullName] = useState<
    AuthSignUpOnHasuraInput['full_name']
  >(user?.full_name ?? '')
  const [email, setEmail] = useState(user?.email ?? '')

  const [isPasswordResetEmailSent, setIsPasswordResetEmailSent] =
    useState(false)
  const sendPasswordResetEmail = useCallback(() => {
    setLoading(true)
    setCustomError(null)
    getAuth()
      .sendPasswordResetEmail(email)
      .then(() => setIsPasswordResetEmailSent(true))
      .catch(setCustomError)
      .finally(() => setLoading(false))
  }, [email])

  useEffect(() => {
    setFullName(user?.full_name ?? '')
    setEmail(user?.email ?? '')
  }, [user])

  const [{ fetching, error }, updateProfile] =
    useSettingsSellerProfile__UpdateProfileMutation()

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      if (!user) {
        return
      }

      updateProfile({
        user_id: user.id,
        _set: {
          full_name,

          ...(auth.idToken?.signInProvider === 'password' ? { email } : {}),
        },
      }).then(() => refreshUser())
    },
    [
      auth.idToken?.signInProvider,
      email,
      full_name,
      refreshUser,
      updateProfile,
      user,
    ]
  )

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
                </div>

                <Typography variant="h5" component="h1">
                  Account Settings
                </Typography>

                <FormControl fullWidth>
                  <TextField
                    type="text"
                    label="Full Name"
                    aria-label="Full Name"
                    size="medium"
                    variant="outlined"
                    required
                    disabled={fetching}
                    value={full_name}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                    type="email"
                    label="Email"
                    aria-label="Email"
                    size="medium"
                    variant="outlined"
                    required
                    disabled={
                      fetching || auth.idToken?.signInProvider !== 'password'
                    }
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <Button
                  type="submit"
                  color="primary"
                  size="large"
                  variant="contained"
                  disabled={fetching}
                  style={{ width: '100%' }}
                >
                  Save Changes
                </Button>

                {!error?.message && !customError?.message ? null : (
                  <>
                    <Divider style={{ width: '100%' }} />

                    <Typography variant="body2" color="error" component="div">
                      {error?.message || customError?.message}
                    </Typography>
                  </>
                )}

                <Divider style={{ width: '100%' }} />

                <div style={{ display: 'grid', gap: 8, width: '100%' }}>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ width: '100%' }}
                  >
                    <span className={styles.settings__paperTextSecondary}>
                      Login Method:
                    </span>{' '}
                    {auth.idToken?.signInProvider?.toUpperCase() || 'N/A'}
                  </Typography>

                  {isPasswordResetEmailSent ? (
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      style={{ width: '100%' }}
                    >
                      We&apos;ve sent you a password reset link! Please check
                      your email&apos;s inbox for instructions.
                    </Typography>
                  ) : (
                    <Button
                      variant="outlined"
                      color="primary"
                      disabled={loading}
                      onClick={() => sendPasswordResetEmail()}
                      style={{ margin: '0 auto 0 0' }}
                      size="small"
                    >
                      Reset Password
                    </Button>
                  )}
                </div>
              </>
            )}
          </form>
        </main>
      )}
      <Footer />
    </>
  )
}

export default SettingsAccount
