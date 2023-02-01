import type { NextPage } from 'next'
import { user } from '@vidispine/vdt-api'
import { Api, ApiResponse } from 'utils/Api'
import { useEffect, useState } from 'react'
import withLayout from 'utils/withLayout'
import Spinner from 'components/Spinner'
import { createColumnHelper } from '@tanstack/react-table'
import ReactTable from 'components/ReactTable'
import {
  CheckmarkCircle,
  CloseCircle,
  DeleteOutline,
  Edit,
  Folder,
} from 'components/Icons'
import { GroupListType, UserType } from '@vidispine/types'
import Link from 'next/link'
import ModalDialog from 'components/ModalDialog'
import { PageHeader } from 'antd'
import { Restrict } from 'modules/permissions'
import Breadcrumbs from 'components/Breadcrumbs'
import Typography from 'components/Typography'

const Users: NextPage = () => {
  const [users, setUsers] = useState<UserType[] | undefined>([])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userName, setUserName] = useState('')

  const isLoading = false

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const onRemoveUser = (username: string) => {
    setUserName(username)
    openModal()
  }

  const deleteUser = async (username: string) => {
    Api.fetch(user.disableUser, {
      userName: username,
      queryParams: { hard: true },
    }).then((response: ApiResponse) => {
      if (response.status == 200) {
        closeModal()

        Api.fetch(user.listUser, {
          queryParams: {},
        }).then((listUserResponse: ApiResponse) => {
          setUsers(listUserResponse.data.user)
        })
      } else {
        console.error(JSON.stringify(response))
      }
    })
  }

  useEffect(() => {
    Api.fetch(user.listUser, {
      queryParams: {},
    }).then((response: ApiResponse) => {
      setUsers(response.data.user)
    })
  }, [users])

  if (users?.length == 0) {
    return (
      <>
        <PageHeader
          ghost={false}
          title={
            <label className="text-gray-900 dark:text-grayDark-900 text-[20px]">
              Users
            </label>
          }
          className="pl-1 bg-gray-200 text-gray-900 dark:text-grayDark-900 dark:bg-grayDark-200"
        />
        <Spinner />
      </>
    )
  }

  const getGroupList = (group: GroupListType | undefined) => {
    return group?.group?.map((g) => g.groupName).join(', ')
  }

  const columnHelper = createColumnHelper<UserType>()

  const columns = [
    columnHelper.accessor('userName', {
      header: () => 'User Name',
    }),
    columnHelper.accessor('realName', {
      header: () => 'Real Name',
    }),
    columnHelper.accessor('origin', {
      header: () => 'Origin',
    }),
    columnHelper.accessor('disabled', {
      header: () => 'Enabled',
      cell: (info) =>
        !info.getValue() ? (
          <CheckmarkCircle color="green" className={'w-6 h-6'} />
        ) : (
          <CloseCircle color="red" size="2rem" />
        ),
    }),
    columnHelper.accessor('groupList', {
      header: () => 'Group List',
      cell: (info) => getGroupList(info.getValue()),
    }),
    columnHelper.accessor('userName', {
      header: () => 'Actions',
      id: 'Actions',
      cell: (info) => {
        return (
          <Restrict to="administrator, group.read">
            <div className="flex">
              <Link
                href={`/users/edit/[userName]`}
                as={`/users/edit/${info.getValue()}`}
              >
                <Edit className="ml-2 w-6 h-6" />
              </Link>
              <button
                type="button"
                onClick={() => onRemoveUser(info.getValue())}
              >
                <DeleteOutline className="ml-2 w-6 h-6" />
              </button>
            </div>
          </Restrict>
        )
      },
    }),
  ]

  return (
    <>
      <div className="flex justify-between">
        <Typography type="title">Users</Typography>

        <Restrict to="administrator, group.read" key={1}>
          <Link key={2} href={'/users/create'} as={`/users/create`}>
            <button
              type="button"
              className="rounded-md bg-white border-gray-900 border-2 shadow-md disabled:text-gray-200 disabled:border-gray-200 text-gray-900 font-bold px-4 py-2 mt-10"
            >
              Add New User
            </button>
          </Link>
        </Restrict>
      </div>

      <Breadcrumbs
        segmentsRawText={[0]}
        replaceLabelSegments={[{ segment: 0, value: 'Users' }]}
        icon={
          <Folder className="h-6 w-6 text-gray-600 dark:text-grayDark-600" />
        }
      />

      <ReactTable columns={columns} data={users} />
      <ModalDialog
        show={isModalOpen}
        title="Remove User"
        description={`Are you sure you want to remove the user ${userName}?`}
        ok="Yes"
        cancel="No"
        okDisabled={isLoading}
        onClick={() => deleteUser(userName)}
        onClose={closeModal}
        okClassName="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-black-900 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        cancelClassName="ml-2 inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-black-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      />
    </>
  )
}

export default withLayout(Users, ['user.read'])
