import { NextSeo } from 'next-seo'

import SettingsAccount from '../../src/components/settings-account/settings-account'

type SettingsAccountPageProps = unknown

function SettingsAccountPage(_: SettingsAccountPageProps) {
  return (
    <>
      <NextSeo title="Update your account settings" />

      <SettingsAccount />
    </>
  )
}

export default SettingsAccountPage
