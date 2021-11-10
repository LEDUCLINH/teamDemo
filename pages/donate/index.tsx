import { NextSeo } from 'next-seo'

import Donate from '../../src/components/donate/donate'

type DonatePageProps = unknown

function DonatePage(_: DonatePageProps) {
  return (
    <>
      <NextSeo title="Donate" />

      <Donate />
    </>
  )
}

export default DonatePage
