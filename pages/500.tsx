import NextError from 'next/error'

import Footer from '../src/components/_shared/footer/footer'
import Header from '../src/components/_shared/header/header'

function Custom500() {
  return (
    <>
      <Header />

      <NextError statusCode={500} />

      <Footer />
    </>
  )
}

export default Custom500
