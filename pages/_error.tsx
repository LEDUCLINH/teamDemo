import { GetServerSideProps } from 'next'
import NextError from 'next/error'

import Footer from '../src/components/_shared/footer/footer'
import Header from '../src/components/_shared/header/header'

type MyErrorProps = { statusCode: number }

function MyError({ statusCode }: MyErrorProps) {
  return (
    <>
      <Header />

      <NextError statusCode={statusCode} />

      <Footer />
    </>
  )
}

export default MyError

export const getServerSideProps: GetServerSideProps<MyErrorProps> = async ({
  res,
}) => {
  return {
    props: {
      statusCode: res.statusCode || 404,
    },
  }
}
