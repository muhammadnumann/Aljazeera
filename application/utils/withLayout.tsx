import { VidispineApi } from '@vidispine/vdt-react'
import Layout from '../components/Layout'
import { PagePermissions } from 'modules/permissions'

interface LayoutInputProps {
  token: string
  username: string
  serverUrl: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withLayout = (Component: any, permissions: string[] = []) => {
  function getLayout(pageProps: LayoutInputProps) {
    if (permissions) {
      return (
        <div>
          <VidispineApi
            token={pageProps.token}
            username={pageProps.username}
            serverUrl={pageProps.serverUrl}
          >
            <Layout>
              <PagePermissions allow={permissions}>
                <Component {...pageProps} />
              </PagePermissions>
            </Layout>
          </VidispineApi>
        </div>
      )
    }

    return (
      <div>
        <VidispineApi
          token={pageProps.token}
          username={pageProps.username}
          serverUrl={pageProps.serverUrl}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </VidispineApi>
      </div>
    )
  }

  return getLayout
}

export default withLayout
