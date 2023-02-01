import type { NextPage } from 'next'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { user as UserApi } from '@vidispine/vdt-api'
import { useState } from 'react'
import {
  DEFAULT_COOKIE_OPTIONS,
  VIDISPINE_TOKEN_COOKIE,
} from 'utils/CookieUtils'
import { useCookies } from 'react-cookie'
import { VIDISPINE_CREDENTIALS } from 'consts/consts'
import { useAmplitude } from 'utils/hooks/useAmplitude'
import { Permissions, RolesUrlParams } from 'modules/permissions'
import Image from 'next/image'
import Logo from '../public/undefined/logo.png'

const LoginPage: NextPage = () => {
  const serverUrl = process.env.NEXT_PUBLIC_VIDISPINE_URL
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [, setCookie] = useCookies([VIDISPINE_TOKEN_COOKIE])
  const [instrument] = useAmplitude()

  const onLogin = async () => {
    try {
      const token = await UserApi.getToken({
        userName: username,
        queryParams: { seconds: 2592000, autoRefresh: 'true' },
        headers: { password, username },
        baseURL: serverUrl,
      })

      console.log('Vidispine URL: ', serverUrl)

      setCookie(VIDISPINE_TOKEN_COOKIE, token.data, {
        ...DEFAULT_COOKIE_OPTIONS,
        path: '/',
      })

      localStorage.setItem(
        VIDISPINE_CREDENTIALS,
        JSON.stringify({ serverUrl, username }),
      )

      const urlParams: RolesUrlParams = {
        token: token.data,
        baseURL: serverUrl as string,
      }

      Permissions.getUserPermissions(username as string, urlParams).then(
        (response) => {
          if (response && Object.keys(response.data).length != 0) {
            Permissions.serializeUserPermissions(response.data.group)
          }

          const dayOfWeekName = new Date()
            .toLocaleString('default', {
              weekday: 'long',
            })
            .toLowerCase()

          window.history.pushState(
            {},
            document.title,
            `/aje/news-packages/${dayOfWeekName}`,
          )

          instrument('Logged In', { username: username })

          window.location.reload()
        },
      )
    } catch (e) {
      instrument('Failed to Log In', { username: username })

      setErrorMessage('Username and/or password invalid')
    }
  }

  return (
    <>
      <div className="flex items-center  dark:bg-grayDark-200 bg-gray-50 overflow-hidden h-screen w-full relative">
        <div
          className={`lg:w-8/12 w-full h-full bg-[url('../public/undefined/library.png')] bg-no-repeat bg-center bg-cover lg:blur-none blur-sm`}
        ></div>
        <div className="lg:relative lg:block flex justify-center items-center absolute lg:mx-16 lg:w-4/12 w-full lg:p-0 sm:p-5 top-[25%]  lg:left-0 lg:top-0">
          <div>
            <div className="flex items-center">
              <div className="grow-0 shrink-1 lg:shrink-0 basis-auto">
                <Image src={Logo} alt="" />
              </div>
              <div className="ml-4 pl-0.5">
                <h1 className="text-3xl text-gray-900 dark:text-grayDark-900 gray-900 font-bold">
                  AJ Digital MAM
                </h1>
              </div>
            </div>
            <h2 className="text-2xl text-gray-900 dark:text-grayDark-900 mt-14 font-bold">
              Sign in to your account
            </h2>
            <div className="pb-5 pt-2 mt-5 max-w-xs">
              <label className="font-semibold text-gray-900 dark:text-grayDark-900">
                Username
              </label>
              <TextField
                onChange={setUsername}
                placeholder="you@example.com"
                testId="Username"
                InputClassName="mt-1 border-gray-300 !rounded-full"
              />
            </div>
            <div className="pb-2 max-w-xs">
              <label className="font-semibold text-gray-900 dark:text-grayDark-900">
                Password
              </label>
              <TextField
                onChange={setPassword}
                placeholder="*********"
                testId="Password"
                type="password"
                InputClassName="mt-1 p-2 border-gray-300 !rounded-full"
              />
            </div>
            <Button
              onClick={onLogin}
              data-testid="Sign in"
              className="w-full justify-center bg-blue-800 active:bg-blue-800 mt-5 font-semibold text-base !border-0 !rounded-full max-w-xs"
            >
              Sign in
            </Button>
            <label className="dark:text-red-700 text-red-900">
              {errorMessage}
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
