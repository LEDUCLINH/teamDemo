import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Autocomplete from '@material-ui/lab/Autocomplete'

import LogoAsset from '../../assets/images/_shared/logo.png'
import CityChooserBgAsset from '../../assets/images/city-chooser/city-chooser-bg.jpg'
import { useCityChooser__SearchCitiesQuery } from '../../generated/graphql'
import { useCity } from '../../utils/city/city-context'
import useSearchParams from '../../utils/use-search-params/use-search-params'
import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './city-chooser.module.scss'

import type { CityContextValue } from '../../utils/city/city-context'

function CityChooser() {
  const query = useSearchParams()
  const query_q = useMemo(() => query.get('q'), [query])
  const query_stay = useMemo(() => query.get('stay'), [query])
  const query_continue = useMemo(() => query.get('continue'), [query])

  const [term, setTerm] = useState(query_q || '')
  const [selectedZipAndCity, setSelectedZipAndCity] = useState<
    CityContextValue['zipAndCity'] | null
  >(null)

  const [termUpdatedPaused, setTermUpdatePaused] = useState(false)
  useEffect(() => {
    if (query_q) {
      setTerm(query_q)
      setTermUpdatePaused(true)
    }
    setTimeout(() => setTermUpdatePaused(false), 0)
  }, [query_q])

  const { zipAndCity, setZipAndCity } = useCity()
  const router = useRouter()

  const [searchCitiesResult] = useCityChooser__SearchCitiesQuery({
    variables: { term: `%${term.split(',')[0] || ''}%` },
  })

  const [submitted, setSubmitted] = useState(false)
  const handleSetCity = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      if (!selectedZipAndCity) {
        return
      }
      setSubmitted(true)
      setZipAndCity(selectedZipAndCity)
      router.push(query_continue ?? `/city/${selectedZipAndCity.city.id}`)
    },
    [query_continue, router, selectedZipAndCity, setZipAndCity]
  )

  const shouldAutoRedirect = useMemo(
    () => query_stay !== '1' && zipAndCity?.city.id,
    [query_stay, zipAndCity?.city.id]
  )
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])
  if (shouldAutoRedirect) {
    router.replace(query_continue ?? `/city/${zipAndCity?.city.id || 1}`)
  }

  return (
    <>
      <Header />

      <main className={styles.cityChooser__main}>
        {!ready || shouldAutoRedirect ? (
          <CircularProgress style={{ margin: 'auto' }} />
        ) : (
          <>
            <Image
              className={styles.cityChooser__bg}
              alt="City Chooser page's background image"
              src={CityChooserBgAsset}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              priority
            />

            <form
              className={styles.cityChooser__paper}
              method="POST"
              action="#"
              onSubmit={handleSetCity}
            >
              <div>
                <Image
                  alt="1stKare Logo"
                  src={LogoAsset}
                  placeholder="blur"
                  layout="fixed"
                  height={64}
                  width={52.04}
                  sizes="52.04px"
                  priority
                />
              </div>

              <Typography variant="h5" component="h1">
                Choose Your City
              </Typography>

              <Typography variant="body1" color="textSecondary">
                Where are you looking to get service?
              </Typography>

              <Autocomplete
                id="combo-box-demo"
                options={searchCitiesResult.data?.zip_codes || []}
                getOptionLabel={(zipAndCity) =>
                  `${zipAndCity.city.name}, ${zipAndCity.city.state_code}, ${zipAndCity.zip_code}`
                }
                onChange={(_e, value) => setSelectedZipAndCity(value)}
                inputValue={term}
                onInputChange={
                  termUpdatedPaused ? undefined : (_e, value) => setTerm(value)
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Enter your ZIP Code"
                    helperText={
                      selectedZipAndCity
                        ? `${selectedZipAndCity.city.name}, ${selectedZipAndCity.city.state_code}, ${selectedZipAndCity.zip_code}`
                        : zipAndCity
                        ? `${zipAndCity.city.name}, ${zipAndCity.city.state_code}, ${zipAndCity.zip_code}`
                        : undefined
                    }
                    autoFocus
                  />
                )}
                fullWidth
              />

              <Button
                style={{ width: '100%' }}
                type="submit"
                color="primary"
                size="large"
                variant="contained"
                disabled={!selectedZipAndCity || submitted}
              >
                Continue
              </Button>
            </form>
          </>
        )}
      </main>

      <Footer />
    </>
  )
}

export default CityChooser
