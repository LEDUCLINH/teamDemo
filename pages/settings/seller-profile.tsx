import { NextSeo } from 'next-seo'

import SettingsSellerProfile from '../../src/components/settings-seller-profile/settings-seller-profile'

type SettingsSellerProfilePageProps = unknown

function SettingsSellerProfilePage(_: SettingsSellerProfilePageProps) {
  return (
    <>
      <NextSeo title="Update your seller profile settings" />

      <SettingsSellerProfile />
    </>
  )
}

export default SettingsSellerProfilePage
