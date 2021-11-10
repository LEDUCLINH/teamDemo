import { NextSeo } from 'next-seo'

import DonateSuccess from '../../src/components/donate-success/donate-success'

type DonatePageSuccessProps = unknown

function DonateSuccessPage(_: DonatePageSuccessProps) {
  return (
    <>
      <NextSeo title="Thanks for donating!" />

      <DonateSuccess />
    </>
  )
}

export default DonateSuccessPage
