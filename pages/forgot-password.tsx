import { NextSeo } from 'next-seo'

import ForgotPassword from '../src/components/forgot-password/forgot-password'

function ForgotPasswordPage() {
  return (
    <>
      <NextSeo title="Reset your password" />

      <ForgotPassword />
    </>
  )
}

export default ForgotPasswordPage
