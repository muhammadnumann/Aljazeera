export const APP_TITLE: string = 'AJ Digital MAM'
export const SETTINGS_LOCAL_STORAGE_KEY: string = 'APP_SETTINGS'
export const VIDISPINE_CREDENTIALS: string = 'VIDISPINE-CREDENTIALS'
export const LOGIN_EXPIRES_SECONDS: number = 1209600 // 14 days
export const VIDISPINE_URL: string | undefined =
  process.env.REACT_APP_VIDISPINE_URL === ''
    ? undefined
    : process.env.REACT_APP_VIDISPINE_URL

const getBasename = () => {
  const publicUrl =
    process.env.PUBLIC_URL === '' ? undefined : process.env.PUBLIC_URL
  if (publicUrl && publicUrl.startsWith('http')) {
    const url = new URL(publicUrl)
    return url.pathname.replace(/(.+?)\/+$/, '$1')
  }
  return '/'
}

export const BASENAME = getBasename()

let publicUrl: string | undefined | URL =
  process.env.PUBLIC_URL === '' ? '/' : process.env.PUBLIC_URL
if (publicUrl && publicUrl.startsWith('http')) {
  publicUrl = new URL(publicUrl)
  publicUrl = publicUrl.pathname.replace(/(.+?)\/+$/, '$1')
}

export const APP_BASENAME: string | undefined | URL = publicUrl
