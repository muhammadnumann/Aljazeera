import 'styles/globals.css'
import type { AppProps } from 'next/app'
import AppContext from '../utils/contexts/AppContext'
import { useEffect, useState } from 'react'
import { VIDISPINE_CREDENTIALS } from '../consts/consts'
import { ThemeProvider } from '../utils/contexts/ThemeContext'
import * as amplitude from '@amplitude/analytics-browser'
import { getToken } from 'utils/CookieUtils'
import { Permissions } from 'modules/permissions'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [serverUrl, setServerUrl] = useState(undefined)
  const [username, setUsername] = useState(undefined)
  const [token, setToken] = useState(undefined)
  const [environment, setEnvironment] = useState(undefined)
  const [userPermissions, setUserPermissions] = useState(
    pageProps.userPermissions,
  )

  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(VIDISPINE_CREDENTIALS)

    if (item) {
      const data = JSON.parse(item)

      pageProps.serverUrl = data.serverUrl
      pageProps.username = data.username
    }
  }

  useEffect(() => {
    setServerUrl(pageProps.serverUrl)
    setUsername(pageProps.setUsername)
    setToken(pageProps.token)
    setUserPermissions(pageProps.userPermissions)
    setEnvironment(pageProps.environment)
  }, [
    pageProps.serverUrl,
    pageProps.setUsername,
    pageProps.token,
    pageProps.userPermissions,
    pageProps.environment,
  ])

  return (
    <ThemeProvider>
      <AppContext.Provider
        value={{ serverUrl, token, username, userPermissions, environment }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    </ThemeProvider>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
MyApp.getInitialProps = async ({ ctx }: any) => {
  let token = getToken(ctx)

  const userPermissionsCookie = Permissions.processUserPermissionCookies(
    ctx.req?.headers.cookie,
  )
  const amplitudeKey = process.env.AMPLITUDE_API_KEY!

  const environment = process.env.MAM_ENVIRONMENT || 'dev'

  if (!!amplitudeKey) amplitude.init(amplitudeKey)

  return {
    pageProps: {
      token: token,
      userPermissions: userPermissionsCookie,
      environment: environment,
    },
  }
}

export default MyApp
