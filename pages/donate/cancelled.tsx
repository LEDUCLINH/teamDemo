import { NextSeo } from 'next-seo'

import DonateCancelled from '../../src/components/donate-cancelled/donate-cancelled'

type DonateCancelledPageProps = unknown

function DonateCancelledPage(_: DonateCancelledPageProps) {
  return (
    <>
      <NextSeo title="Donation cancelled" />

      <DonateCancelled />
    </>
  )
}

export default DonateCancelledPage
