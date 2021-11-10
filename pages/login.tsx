import { NextSeo } from 'next-seo'

import Login from '../src/components/login/login'

function LoginPage() {
  return (
    <>
      <NextSeo title="Login" />

      <Login />
    </>
  )
}

export default LoginPage
