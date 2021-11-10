import { NextSeo } from 'next-seo'

import SignUp from '../src/components/sign-up/sign-up'

function SignUpPage() {
  return (
    <>
      <NextSeo title="Sign up" />

      <SignUp />
    </>
  )
}

export default SignUpPage
