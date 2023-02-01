import type { GetServerSideProps, NextPage } from 'next'
import React, { useEffect, useState, Fragment } from 'react'
import withLayout from 'utils/withLayout'
import Typography from 'components/Typography'
import { group as GroupApi, user as UserApi } from '@vidispine/vdt-api'
import {
  GroupDocument,
  UserType,
  UserListType,
  GroupListType,
  GroupType,
} from '@vidispine/types'
import { Divider } from 'antd'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { callApi } from 'utils/fetchData'
import ReactTable from 'components/ReactTable'
import { createColumnHelper } from '@tanstack/react-table'
import { CloseCircle, ArrowDown, Folder } from 'components/Icons'
import { Listbox, Transition } from '@headlessui/react'
import ModalDialog from 'components/ModalDialog'
import { useRouter } from 'next/router'
import { Api } from 'utils/Api'
import Breadcrumbs from 'components/Breadcrumbs'

const parentColumnHelper = createColumnHelper<GroupListType>()
const userColumnHelper = createColumnHelper<UserType>()

interface GroupProps {
  group: GroupDocument
  notFound: boolean
}

const EditGroupPage: NextPage<GroupProps> = ({ group, notFound }) => {
  const router = useRouter()
  const groupName = group.groupName
  const [parentGroups] = useState<GroupListType | undefined>(
    group.parentGroupList,
  )
  const [groupUsers] = useState<UserListType | undefined>(group.userList)

  const [groupList, setGroupList] = useState<GroupType[] | undefined>()

  const [userList, setUserList] = useState<UserType[] | undefined>()

  const getAllGroups = async () => {
    Api.fetch(GroupApi.listGroup).then((response) => {
      setGroupList(response.data.group)
    })
  }

  const getAllUsers = async () => {
    Api.fetch(UserApi.listUser).then((response) => {
      setUserList(response.data.user)
    })
  }

  useEffect(() => {
    getAllUsers()
    getAllGroups()
  }, [])

  const schema = yup
    .object({
      groupName: yup.string().required(),
    })
    .required()

  const formOptions = { resolver: yupResolver(schema) }

  const {
    formState: { isSubmitting },
  } = useForm(formOptions)

  // Parent Group Table & Modal

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedGroupName, setSelectedGroupName] = useState('')

  const isLoading = false

  const handleParentGroupRemoveClick = (groupname: string) => {
    setSelectedGroupName(groupname)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const parentColumns = [
    parentColumnHelper.accessor('groupName', {
      header: () => 'Group',
    }),

    parentColumnHelper.accessor('groupName', {
      header: () => 'Actions',
      cell: ({ getValue }) => {
        return (
          <div className="flex">
            <button
              type="button"
              onClick={() => {
                handleParentGroupRemoveClick(getValue<string>() ?? '')
              }}
            >
              <CloseCircle className="ml-2 h-6 w-6" />
            </button>
          </div>
        )
      },
    }),
  ]

  const removeParentGroup = async (parentGroupName: string) => {
    Api.fetch(GroupApi.removeGroupChildren, {
      groupName: parentGroupName,
      childGroupName: groupName,
    }).then(() => {
      setIsModalOpen(false)
      router.reload()
    })
  }

  // Add Parent Group

  const [addSelectedParentGroup, setAddSelectedParentGroup] = useState('')

  const [isAddParentGroupModalOpen, setIsAddParentGroupModalOpen] =
    useState(false)

  const closeAddParentGroupModal = () => {
    setIsAddParentGroupModalOpen(false)
  }

  const addParentGroup = async (parentGroupName: string) => {
    Api.fetch(GroupApi.addGroupChildren, {
      groupName: parentGroupName,
      childGroupName: groupName,
    }).then(() => {
      setIsAddParentGroupModalOpen(false)
      router.reload()
    })
  }

  const handleAddParentGroupAddClick = () => {
    setIsAddParentGroupModalOpen(true)
  }

  // Add User to Group

  const [addSelectedUser, setAddSelectedUser] = useState('')

  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)

  const closeAddUserModal = () => {
    setIsAddUserModalOpen(false)
  }

  const addUserGroup = async (userName: string) => {
    Api.fetch(GroupApi.addGroupUser, {
      groupName: groupName,
      userName: userName,
    }).then(() => {
      setIsAddUserModalOpen(false)
      router.reload()
    })
  }

  const handleAddUserClick = () => {
    setIsAddUserModalOpen(true)
  }

  // User Table & Modal

  const [isRemoveUserModalOpen, setIsRemoveUserModalOpen] = useState(false)
  const [selectedRemoveUserName, setSelectedRemoveUserName] = useState('')

  const handleRemoveUserClick = (userName: string) => {
    setSelectedRemoveUserName(userName)
    setIsRemoveUserModalOpen(true)
  }

  const userColumns = [
    userColumnHelper.accessor('userName', {
      header: () => 'Username',
    }),
    userColumnHelper.accessor('realName', {
      header: () => 'Real Name',
    }),

    userColumnHelper.accessor('userName', {
      header: () => 'Actions',
      cell: (info) => {
        return (
          <div className="flex">
            <button
              type="button"
              onClick={() => {
                handleRemoveUserClick(info.getValue() ?? '')
              }}
            >
              <CloseCircle className="ml-2 text-lg" />
            </button>
          </div>
        )
      },
    }),
  ]

  const closeRemoveUserModal = () => {
    setIsRemoveUserModalOpen(false)
  }

  const removeUserGroup = async (userName: string) => {
    Api.fetch(GroupApi.removeGroupUser, {
      groupName: groupName,
      userName: userName,
    }).then(() => {
      setIsRemoveUserModalOpen(false)
      router.reload()
    })
  }

  if (notFound) {
    return (
      <>
        <Typography type="title">Resource Not Found</Typography>
      </>
    )
  }

  return (
    <>
      <Typography type="title">Edit Group - {groupName}</Typography>

      <Breadcrumbs
        segmentsRawText={[0, 1]}
        replaceLabelSegments={[{ segment: 0, value: 'Edit Group' }]}
        omitIndexList={[1]}
        icon={
          <Folder className="h-6 w-6 text-gray-600 dark:text-grayDark-600" />
        }
      />

      <div className="shadow-md bg-white dark:bg-grayDark-50 rounded px-8 pt-6 pb-8 mb-4">
        <Divider
          className="dark:text-grayDark-900 dark:border-t-grayDark-900"
          orientation="left"
        >
          Group Users
        </Divider>

        <ReactTable columns={userColumns} data={groupUsers?.user} />

        <ModalDialog
          show={isRemoveUserModalOpen}
          title="Remove User"
          description={`Are you sure you want to remove this user from group : "${selectedRemoveUserName}"?`}
          ok="REMOVE"
          cancel="Cancel"
          okDisabled={isLoading}
          onClick={() => removeUserGroup(selectedRemoveUserName)}
          onClose={closeRemoveUserModal}
          okClassName="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-black-900 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          cancelClassName="ml-2 inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-black-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        />
      </div>

      <div className="shadow-md bg-white dark:bg-grayDark-50 rounded px-8 pt-6 pb-8 mb-4">
        <Divider
          className="dark:text-grayDark-900 dark:border-t-grayDark-900"
          orientation="left"
        >
          Add User to Group
        </Divider>
        <div className="top-16 w-72">
          <Listbox value={addSelectedUser} onChange={setAddSelectedUser}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate h-5">{addSelectedUser}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ArrowDown
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {userList?.map((user, i) => {
                    return (
                      <Listbox.Option
                        key={i}
                        value={user.userName}
                        className="relative cursor-default select-none py-2 pl-10 pr-4 bg-amber-100 text-amber-900"
                      >
                        {user.userName}
                      </Listbox.Option>
                    )
                  })}
                </Listbox.Options>
              </Transition>
            </div>
            <button
              onClick={handleAddUserClick}
              disabled={isSubmitting}
              className="rounded-md bg-green-800 shadow-md text-white disabled:bg-green-200 font-bold px-4 py-2 mt-5"
            >
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Add
            </button>

            <ModalDialog
              show={isAddUserModalOpen}
              title="Add User"
              description={`Are you sure you want to add this user : "${addSelectedUser}"?`}
              ok="Confirm"
              cancel="Cancel"
              okDisabled={isLoading}
              onClick={() => addUserGroup(addSelectedUser)}
              onClose={closeAddUserModal}
              okClassName="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-black-900 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              cancelClassName="ml-2 inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-black-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            />
          </Listbox>
        </div>
      </div>

      <div className="shadow-md bg-white dark:bg-grayDark-50 rounded px-8 pt-6 pb-8 mb-4">
        <Divider
          className="dark:text-grayDark-900 dark:border-t-grayDark-900"
          orientation="left"
        >
          Parent Groups/Roles
        </Divider>
        <ReactTable columns={parentColumns} data={parentGroups?.group} />

        <ModalDialog
          show={isModalOpen}
          title="Remove Parent Group/Role"
          description={`Are you sure you want this group from being a parent : "${selectedGroupName}"?`}
          ok="REMOVE"
          cancel="Cancel"
          okDisabled={isLoading}
          onClick={() => removeParentGroup(selectedGroupName)}
          onClose={closeModal}
          okClassName="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-black-900 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          cancelClassName="ml-2 inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-black-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        />
      </div>

      <div className="shadow-md bg-white dark:bg-grayDark-50 rounded px-8 pt-6 pb-8 mb-4">
        <Divider
          className="dark:text-grayDark-900 dark:border-t-grayDark-900"
          orientation="left"
        >
          Add Parent Group/Role
        </Divider>
        <div className="top-16 w-72">
          <Listbox
            value={addSelectedParentGroup}
            onChange={setAddSelectedParentGroup}
          >
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate h-5">
                  {addSelectedParentGroup}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ArrowDown
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {groupList?.map((grp, i) => {
                    return (
                      <Listbox.Option
                        key={i}
                        value={grp.groupName}
                        className="relative cursor-default select-none py-2 pl-10 pr-4 bg-amber-100 text-amber-900"
                      >
                        {grp.groupName}
                      </Listbox.Option>
                    )
                  })}
                </Listbox.Options>
              </Transition>
            </div>
            <button
              onClick={handleAddParentGroupAddClick}
              disabled={isSubmitting}
              className="rounded-md bg-green-800 shadow-md text-white disabled:bg-green-200 font-bold px-4 py-2 mt-5"
            >
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Add
            </button>

            <ModalDialog
              show={isAddParentGroupModalOpen}
              title="Add Parent Group/Role"
              description={`Are you sure you want this group as a parent : "${addSelectedParentGroup}"?`}
              ok="Confirm"
              cancel="Cancel"
              okDisabled={isLoading}
              onClick={() => addParentGroup(addSelectedParentGroup)}
              onClose={closeAddParentGroupModal}
              okClassName="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-black-900 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              cancelClassName="ml-2 inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-black-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            />
          </Listbox>
        </div>
      </div>
    </>
  )
}

export default withLayout(EditGroupPage, [
  'group.write',
  'group.read',
  'user.read',
])

export const getServerSideProps: GetServerSideProps = async (context) => {
  const groupName = context.params?.groupName

  let notFound = false

  let data = {}

  try {
    data = await callApi(context, GroupApi.getGroup, { groupName: groupName })
  } catch (e) {
    notFound = true
  }

  return {
    props: {
      group: data,
      notFound: notFound,
    },
  }
}
