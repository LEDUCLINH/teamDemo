import firebase from 'firebase/app'
import NextError from 'next/error'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useRef, useState } from 'react'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import LogoAsset from '../../assets/images/_shared/logo.png'
import { useSettingsUpdatePhoneNumber__UpdateProfileMutation } from '../../generated/graphql'
import useRecaptchaV2 from '../../utils/use-recaptcha/use-recaptcha-v2'
import useSearchParams from '../../utils/use-search-params/use-search-params'
import { useUser } from '../../utils/user/user-context'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import Link from '../_shared/link/link'
import styles from './settings-update-phone-number.module.scss'

import type { FormEvent } from 'react'

type SettingsUpdatePhoneNumberProps = unknown

function SettingsUpdatePhoneNumber(_: SettingsUpdatePhoneNumberProps) {
  const { user, userLoading, refresh: refreshUser, auth } = useUser(true)

  const query = useSearchParams()
  const query_continue = useMemo(() => query.get('continue'), [query])

  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [customError, setCustomError] = useState<Error | null>(null)

  const [phone, _setPhone] = useState('')
  const setPhone = useCallback((value: string) => {
    let newValue = value
    if (!newValue.startsWith('+')) {
      newValue = `+1${newValue}`
    }
    _setPhone(newValue)
  }, [])
  const [code, setCode] = useState('')

  const codeFieldRef = useRef<HTMLInputElement | null>(null)

  const [isCodeSent, setIsCodeSent] = useState(false)
  const [verificationId, setVerificationId] = useState<string | null>(null)

  const verifier = useRecaptchaV2()

  const handleSendCode = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      if (!verifier) {
        setCustomError(new Error('Recaptcha not configured'))
        return
      }

      setLoading(true)
      setCustomError(null)

      verifier.render()

      const phoneProvider = new firebase.auth.PhoneAuthProvider()
      phoneProvider
        .verifyPhoneNumber(phone, verifier)
        .then((id) => {
          setVerificationId(id)
          setIsCodeSent(true)
        })
        .catch(setCustomError)
        .finally(() => {
          setLoading(false)
          setTimeout(
            () => codeFieldRef.current?.querySelector('input')?.focus(),
            300
          )
        })
    },
    [phone, verifier]
  )

  const [{ error }, updateProfile] =
    useSettingsUpdatePhoneNumber__UpdateProfileMutation()
  const handleVerify = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      if (!user || !auth.authUser || !verificationId) {
        return
      }

      setLoading(true)
      setCustomError(null)

      const cred = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      )

      Promise.all([
        auth.authUser.updatePhoneNumber(cred),
        updateProfile({ user_id: user.id, _set: { phone } }),
      ])
        .then(() => refreshUser())
        .then(() => router.push(query_continue ?? '/settings/account'))
        .catch(setCustomError)
        .finally(() => setLoading(false))
    },
    [
      auth.authUser,
      code,
      phone,
      query_continue,
      refreshUser,
      router,
      updateProfile,
      user,
      verificationId,
    ]
  )

  return (
    <>
      <Header />

      {!user && !userLoading ? (
        <NextError statusCode={401} />
      ) : (
        <main className={styles.settings}>
          {!isCodeSent ? (
            <form
              className={styles.settings__paper}
              method="POST"
              action="#"
              onSubmit={handleSendCode}
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
                    Update Your Phone Number
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    Enter your phone number for verification. We will send a
                    one-use code to your number.
                  </Typography>

                  <FormControl fullWidth>
                    <TextField
                      type="phone"
                      label="Phone Number"
                      aria-label="Phone Number"
                      placeholder="E.g. +15551234567"
                      size="medium"
                      variant="outlined"
                      required
                      disabled={loading}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      helperText={
                        user.phone ? `Current Number: ${user.phone}` : ''
                      }
                      autoFocus
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    color="primary"
                    size="large"
                    variant="contained"
                    disabled={loading || !phone}
                    style={{ width: '100%' }}
                  >
                    Continue
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
          ) : (
            <form
              className={styles.settings__paper}
              method="POST"
              action="#"
              onSubmit={handleVerify}
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
                    Complete Phone Number Verification
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    Enter the code we sent to {phone} in the box below to
                    complete your phone verification.
                  </Typography>

                  <FormControl fullWidth>
                    <TextField
                      ref={codeFieldRef}
                      type="text"
                      label="Code"
                      aria-label="Code"
                      size="medium"
                      variant="outlined"
                      required
                      disabled={loading}
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      helperText={
                        <>
                          <Link
                            href={router.asPath}
                            onClick={(e) => {
                              e.preventDefault()
                              verifier?.render()
                              setIsCodeSent(false)
                            }}
                          >
                            Go back and try again
                          </Link>
                        </>
                      }
                      autoFocus
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    color="primary"
                    size="large"
                    variant="contained"
                    disabled={loading}
                    style={{ width: '100%' }}
                  >
                    Verify and Save
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
          )}
        </main>
      )}
      <Footer />
    </>
  )
}

export default SettingsUpdatePhoneNumber
