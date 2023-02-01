import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import withLayout from 'utils/withLayout'
import { GroupListType, UserListType } from '@vidispine/types'
import ReactTable from 'components/ReactTable'
import { createColumnHelper } from '@tanstack/react-table'
import { group as GroupApi } from '@vidispine/vdt-api'
import { DeleteOutline, Edit, Folder } from 'components/Icons'
import ModalDialog from 'components/ModalDialog'
import { useRouter } from 'next/router'
import { Restrict } from 'modules/permissions'
import { Api, ApiResponse } from 'utils/Api'
import Breadcrumbs from 'components/Breadcrumbs'
import Typography from 'components/Typography'

const columnHelper = createColumnHelper<GroupListType>()

const userListCount = (userList: UserListType) => {
  if (userList?.user) return userList.user.length

  return 0
}

const groupListCount = (groupList: GroupListType) => {
  if (groupList?.group) return groupList.group.length

  return 0
}

const GroupsPage: NextPage = () => {
  const router = useRouter()

  const [groups, setGroups] = useState<GroupListType>({})

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedGroupName, setSelectedGroupName] = useState('')

  const isLoading = false

  const getGroups = async () => {
    Api.fetch(GroupApi.listGroup, {
      queryParams: { role: false },
    }).then((response: ApiResponse) => {
      setGroups(response.data.group)
    })
  }

  useEffect(() => {
    getGroups()
  }, [])

  const handleGroupRemoveClick = (groupName: string) => {
    setSelectedGroupName(groupName)
    setIsModalOpen(true)
  }

  const columns = [
    columnHelper.accessor('groupName', {
      header: () => 'Group',
    }),
    columnHelper.accessor('origin', {
      header: () => 'Origin',
    }),
    columnHelper.accessor('userList', {
      header: () => 'No. of Users',
      cell: ({ getValue }) => userListCount(getValue<UserListType>()),
    }),
    columnHelper.accessor('parentGroupList', {
      header: () => 'No. of Parent Groups',
      cell: ({ getValue }) => groupListCount(getValue<GroupListType>()),
    }),
    columnHelper.accessor('childGroupList', {
      header: () => 'No. of Child Groups',
      cell: ({ getValue }) => groupListCount(getValue<GroupListType>()),
    }),
    columnHelper.accessor('groupName', {
      header: () => 'Actions',
      cell: ({ getValue }) => {
        return (
          <Restrict to="group.write, administrator">
            <div className="flex">
              <Link
                href={`/groups/edit/[groupName]`}
                as={`/groups/edit/${getValue()}`}
              >
                <Edit className="ml-2 h-6 w-6" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  handleGroupRemoveClick(getValue<string>() ?? '')
                }}
              >
                <DeleteOutline className="ml-2 h-6 w-6" />
              </button>
            </div>
          </Restrict>
        )
      },
    }),
  ]

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const removeGroup = async (groupName: string) => {
    Api.fetch(GroupApi.removeGroup, { groupName: groupName }).then(() => {
      setIsModalOpen(false)
      router.reload()
    })
  }

  return (
    <>
      <div className="flex justify-between">
        <Typography type="title">Groups</Typography>

        <div className="right-1">
          <Restrict to="group.write, administrator" key={1}>
            <Link key={2} href={'/groups/create'} as={`/groups/create`}>
              <button
                type="button"
                className="rounded-md bg-white border-gray-900 border-2 shadow-md disabled:text-gray-200 disabled:border-gray-200 text-gray-900 font-bold px-4 py-2 mt-10"
              >
                Create Group
              </button>
            </Link>
          </Restrict>
          ,
        </div>
      </div>

      <Breadcrumbs
        segmentsRawText={[0]}
        replaceLabelSegments={[{ segment: 0, value: 'Groups' }]}
        icon={
          <Folder className="h-6 w-6 text-gray-600 dark:text-grayDark-600" />
        }
      />

      <ReactTable columns={columns} data={groups} />

      <ModalDialog
        show={isModalOpen}
        title="Remove Group"
        description={`CAUTION: Are you sure you want to remove this group : "${selectedGroupName}"?`}
        ok="REMOVE"
        cancel="Cancel"
        okDisabled={isLoading}
        onClick={() => removeGroup(selectedGroupName)}
        onClose={closeModal}
        okClassName="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-black-900 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        cancelClassName="ml-2 inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-black-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      />
    </>
  )
}

export default withLayout(GroupsPage, ['group.read'])
