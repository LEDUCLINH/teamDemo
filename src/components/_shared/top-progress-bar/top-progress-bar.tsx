import Router from 'next/router'
import NProgress from 'nprogress'

let timer: NodeJS.Timeout | undefined
let state: 'loading' | 'stop' | undefined
let activeRequests = 0
const delay = 250

function load() {
  if (state === 'loading') {
    return
  }

  state = 'loading'

  timer = setTimeout(function () {
    NProgress.start()
  }, delay)
}

function stop() {
  if (activeRequests > 0) {
    return
  }

  state = 'stop'

  if (timer !== undefined) {
    clearTimeout(timer)
  }
  NProgress.done()
}

Router.events.on('routeChangeStart', load)
Router.events.on('routeChangeComplete', stop)
Router.events.on('routeChangeError', stop)

NProgress.configure({ showSpinner: false })

const originalFetch = window.fetch
window.fetch = async function (...args) {
  if (activeRequests === 0) {
    load()
  }

  activeRequests++

  try {
    const response = await originalFetch(...args)
    return response
  } catch (error) {
    return Promise.reject(error)
  } finally {
    activeRequests -= 1
    if (activeRequests === 0) {
      stop()
    }
  }
}

function TopProgressBar() {
  return null
}

export default TopProgressBar
