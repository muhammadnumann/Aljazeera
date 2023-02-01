import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { getToken } from './CookieUtils'
import { utils } from '@vidispine/vdt-api'

export const callApi = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
  callback: Function,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apiParams?: any,
) => {
  const token = getToken(context)

  utils.login({
    baseURL: process.env.NEXT_PUBLIC_VIDISPINE_URL,
    token: token,
  })

  if (typeof apiParams !== 'undefined') {
    const result = await callback(apiParams)
    return result?.data
  }

  const result = await callback()

  return result?.data
}
