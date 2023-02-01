import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { CookieSetOptions } from 'universal-cookie'
import { Server } from '../components/Server/Server'
import cookieCutter from 'cookie-cutter'
export const VIDISPINE_SERVERS_COOKIE = 'VIDISPINE-SERVERS'
export const VIDISPINE_TOKEN_COOKIE = 'VIDISPINE-TOKEN'

export const DEFAULT_COOKIE_OPTIONS: CookieSetOptions = {
  maxAge: 604800,
  path: '/',
  sameSite: 'strict',
}

export const decodeJsonCookie = (encodedJsonCookie: string) => {
  if (!encodedJsonCookie) return undefined
  const stringJsonCookie = atob(encodedJsonCookie)
  return JSON.parse(stringJsonCookie)
}

export const encodeJsonCookie = (decodedJsonCookie: Server[]) => {
  if (!decodedJsonCookie) return undefined

  const stringJsonCookie = JSON.stringify(decodedJsonCookie)
  return btoa(stringJsonCookie)
}

export const getToken = (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => {
  const isServer = !!ctx.req
  const isBrowser = !ctx.req
  let token = undefined

  if (isBrowser) {
    token = cookieCutter.get(VIDISPINE_TOKEN_COOKIE)
  } else if (isServer) {
    token =
      ctx.req && ctx.req.cookies
        ? ctx.req.cookies[VIDISPINE_TOKEN_COOKIE]
        : undefined
  }

  return token
}
