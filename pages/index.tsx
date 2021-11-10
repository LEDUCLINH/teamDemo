import { NextSeo } from 'next-seo'

import CityChooser from '../src/components/city-chooser/city-chooser'

function IndexPage() {
  return (
    <>
      <NextSeo title="Choose your city" />

      <CityChooser />
    </>
  )
}

export default IndexPage
