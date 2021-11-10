export type AuthSignUpOnHasuraInput = {
  idToken: string

  zip_code_id: number

  full_name: string

  business_size: 'INDIVIDUAL' | 'LOCAL_BUSINESS' | 'NATIONAL_BUSINESS'
  business_name?: string | null
}

export type AuthSetCustomClaimsInput = {
  idToken: string
}
