import { NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { user as api } from '@vidispine/vdt-api'
import { UserDocument } from '@vidispine/types'
import withLayout from 'utils/withLayout'
import { FieldsForm } from 'components/FieldsForm/User'
import { Api, ApiResponse } from 'utils/Api'

const UserByNamePage: NextPage = () => {
  const router = useRouter()
  const { userName }: ParsedUrlQuery = router.query
  const [user, setUser] = useState<UserDocument | undefined>()

  useEffect(() => {
    Api.fetch(api.getUser, { userName })
      .then((response: ApiResponse) => {
        setUser(response.data)
      })
      .catch((error: string) => {
        console.error(error)
      })
  }, [userName])

  return <>{user ? <FieldsForm user={user} /> : null}</>
}

export default withLayout(UserByNamePage, ['administrator', 'group.read'])
