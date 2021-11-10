import { DocumentContext } from 'next/document'
import React from 'react'

import { ServerStyleSheets } from '@material-ui/core/styles'

export async function getMuiServerStyleSheets(ctx: DocumentContext) {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  return sheets
}
