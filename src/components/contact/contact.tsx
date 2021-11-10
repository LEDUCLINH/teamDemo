import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import ContactBgAsset from '../../assets/images/contact/contact-bg.jpg'
import useRecaptchaV3 from '../../utils/use-recaptcha/use-recaptcha-v3'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './contact.module.scss'

import type { FormEvent } from 'react'
import type { ContactMessageInput } from '../../utils/contact/types'

export type ContactProps = {}

function Contact(_: ContactProps) {
  const [view, setView] = useState<'FORM' | 'SENT'>('FORM')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const formRef = useRef<HTMLFormElement | null>(null)
  const getToken = useRecaptchaV3()

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      if (!formRef.current || loading) {
        return
      }

      setLoading(true)
      setError(null)

      const body: ContactMessageInput = {
        full_name: formRef.current.full_name.value,
        email: formRef.current.email.value,
        message: formRef.current.message.value,
      }

      getToken()
        .then(({ token }) =>
          fetch((e.target as HTMLFormElement).action, {
            method: (e.target as HTMLFormElement).method,
            headers: {
              'content-type': 'application/json',
              'x-recaptcha-token': token,
            },
            body: JSON.stringify(body),
          })
        )
        .then((response) => {
          if (response.ok) {
            setView('SENT')
            formRef.current?.reset()
          } else {
            throw new Error(
              `Unable to send message (${response.status}: ${response.statusText})`
            )
          }
        })
        .catch((e) => setError(e))
        .finally(() => setLoading(false))
    },
    [getToken, loading]
  )

  return (
    <>
      <Header />

      <main className={styles.contact}>
        <div className={styles.contact__bg}>
          <Image
            alt="Contact page's background image"
            src={ContactBgAsset}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {view === 'SENT' ? (
          <div className={styles.contact__form}>
            <Typography variant="h2" component="h1" align="center">
              Thanks for your message!
            </Typography>

            <Typography
              variant="subtitle1"
              component="div"
              align="center"
              color="textSecondary"
            >
              We will get back to you as soon as possible.
            </Typography>

            <Button
              variant="text"
              color="primary"
              onClick={() => setView('FORM')}
            >
              Go back to the contact form
            </Button>
          </div>
        ) : (
          <form
            ref={formRef}
            className={styles.contact__form}
            method="POST"
            action="/api/contact/message"
            onSubmit={handleSubmit}
          >
            <Typography variant="h2" component="h1">
              Contact 1stKare
            </Typography>

            <TextField
              fullWidth
              name="full_name"
              variant="outlined"
              label="Your name"
              required
              autoFocus
              disabled={loading}
            />

            <TextField
              fullWidth
              name="email"
              type="email"
              variant="outlined"
              label="Your email"
              required
              disabled={loading}
            />

            <TextField
              fullWidth
              name="message"
              variant="outlined"
              label="Message (optional)"
              multiline
              rows={10}
              disabled={loading}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={26} color="inherit" />
              ) : (
                'Send message'
              )}
            </Button>

            {!error?.message ? null : (
              <Typography variant="body1" color="error" component="div">
                {error?.message}
              </Typography>
            )}
          </form>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Contact
