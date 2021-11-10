import { useEffect } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import { theme } from '../../styles/theme'

import type { PropsWithChildren } from 'react'

type MuiProviderProps = PropsWithChildren<unknown>

function MuiProvider({ children }: MuiProviderProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  )
}

export default MuiProvider
