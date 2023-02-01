import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { VIDISPINE_TOKEN_COOKIE } from 'utils/CookieUtils'

export function middleware(request: NextRequest) {
  let response = NextResponse.next()

  if (
    request.nextUrl.pathname != '/login' &&
    request.nextUrl.pathname != '/404'
  ) {
    const loggedInCookie = request.cookies.get(VIDISPINE_TOKEN_COOKIE)

    if (!loggedInCookie) {
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  }

  return response
}

export const config = {
  matcher: ['/((?!api|static|favicon.ico|_next).*)'],
}
