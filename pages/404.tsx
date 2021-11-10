import NextError from 'next/error'

import Footer from '../src/components/_shared/footer/footer'
import Header from '../src/components/_shared/header/header'

function Custom404() {
  return (
    <>
      <Header />

      <NextError statusCode={404} />

      <Footer />
    </>
  )
}

export default Custom404
