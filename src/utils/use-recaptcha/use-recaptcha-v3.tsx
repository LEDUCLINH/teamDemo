import firebase from 'firebase/app'
import { useEffect, useMemo } from 'react'

function useRecaptchaV3() {
  const appCheck = useMemo(() => firebase.appCheck(), [])

  useEffect(() => {
    appCheck.activate(process.env['NEXT_PUBLIC_RECAPTCHA_SITE_KEY']!, true)

    return () => {
      appCheck.setTokenAutoRefreshEnabled(false)
    }
  }, [appCheck])

  return appCheck.getToken
}

export default useRecaptchaV3
