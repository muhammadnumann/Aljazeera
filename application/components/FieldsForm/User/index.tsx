import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { Divider } from 'antd'
import { useForm, UseFormRegister } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { GroupType, UserDocument } from '@vidispine/types'
import TextField from 'components/TextField'
import SelectField from 'components/SelectField'
import Typography from 'components/Typography'
import { group as GroupApi, user as UserApi } from '@vidispine/vdt-api'
import Link from 'next/link'
import { Listbox, Transition } from '@headlessui/react'
import { Checkmark, ArrowDown, Folder } from 'components/Icons'
import ModalDialog from 'components/ModalDialog'
import Router from 'next/router'
import { Api, ApiResponse, ApiError } from 'utils/Api'
import Breadcrumbs from 'components/Breadcrumbs'

type Props = {
  user: UserDocument
}

type InputProps = {
  name: string
  label: string
  type?: 'password' | 'text'
  register: UseFormRegister<UserDocument>
  error?: boolean
  errorMessage?: string
}

interface SelectProps extends InputProps {
  options: { value: string; label: string }[]
  onChange?: (value: string) => void
}

const TextInput: FunctionComponent<InputProps> = ({
  name,
  label,
  type,
  register,
  error,
  errorMessage,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <label
        className="self-center justify-self-end text-xs text-gray-900 dark:text-grayDark-900"
        htmlFor={name}
      >
        {label}
      </label>
      <TextField
        id={name}
        className="col-span-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm block text-sm border-gray-200 rounded-md"
        register={register}
        error={error}
        errorText={errorMessage}
        type={type}
      />
    </div>
  )
}

const SelectInput: FunctionComponent<SelectProps> = ({
  name,
  label,
  register,
  error,
  errorMessage,
  options,
  onChange,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <label
        className="self-center justify-self-end text-xs text-gray-900 dark:text-grayDark-900"
        htmlFor={name}
      >
        {label}
      </label>
      <SelectField
        id={name}
        className="self-center col-span-2"
        onChange={onChange}
        register={register}
        error={error}
        errorText={errorMessage}
        options={options}
      />
    </div>
  )
}

const isEmptyValue = (value: string | boolean | Object) => {
  if (Object.keys(value).length === 0) {
    return true
  }
  return value === '' || value === false
}

const removeEmptyValues = (fields: UserDocument) => {
  const newFields = { ...fields }
  Object.keys(fields).forEach((key) => {
    if (fields[key] instanceof Object) {
      fields[key] = removeEmptyValues(fields[key])
    }
    if (isEmptyValue(fields[key])) {
      delete newFields[key]
    }
  })
  return newFields
}

const FieldsForm: FunctionComponent<Props> = (props) => {
  const user = props?.user
  const isAddMode = !user

  const [isModalOpen, setIsModalOpen] = useState(false)
  const isLoading = false

  type IKeys = {
    id: string | undefined
    value: string | undefined
  }

  const [selectedUserGroups, setSelectedUserGroups] = useState([])
  const [groupList, setGroupList] = useState([])

  //default value according to Vidispine docs)
  const [passwordType, setPasswordType] = useState('md5')

  useEffect(() => {
    Api.fetch(GroupApi.listGroup, { queryParams: { role: false } }).then(
      (response: ApiResponse) => {
        const groups = response.data.group.map(
          (val: GroupType): IKeys => ({
            id: val.groupName,
            value: val.groupName,
          }),
        )

        setGroupList(groups)
        if (!isAddMode) {
          setSelectedUserGroups(
            groups?.filter((group: IKeys) => {
              return user.groupList?.group
                ? user.groupList?.group?.findIndex(
                    (g) => g.groupName === group.value,
                  ) !== -1
                : false
            }),
          )
        }
      },
    )
  }, [user, isAddMode])

  const schema = yup.object({
    userName: yup.string().matches(/^\S+$/).min(3).required(),
    realName: yup.string().required(),
    //password: yup.string().required()
    password: yup.lazy((value) => {
      if (isAddMode || value)
        return yup.string().matches(/^\S+$/).min(3).required()
      return yup.mixed().notRequired()
    }),
  })

  const formOptions = { resolver: yupResolver(schema) }

  if (!isAddMode) {
    // @ts-ignore
    formOptions.defaultValues = user
  }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UserDocument>(formOptions)

  const handleChangeSelect = (e: string) => {
    setPasswordType(e)
  }

  const onSubmit = async (data: UserDocument) => {
    const userDocumentForm = removeEmptyValues(data)
    const groups: { groupName: string | undefined }[] = []
    selectedUserGroups?.map((group: IKeys) =>
      groups.push({ groupName: group.value }),
    )

    const userDocument = {
      userName: userDocumentForm.userName,
      realName: userDocumentForm.realName,
      password: userDocumentForm.password,
      groupList: { group: groups },
    }
    const queryParams = {
      passwordType: passwordType,
    }

    if (isAddMode) {
      Api.fetch(UserApi.createUser, {
        userDocument,
        queryParams,
      })
        .then((result: ApiResponse) => {
          if (result.status === 200) {
            Router.push('/users')
          } else {
            console.log(result)
          }
        })
        .catch((error: ApiError) => {
          if (error.response?.status === 409) setIsModalOpen(true)
          else console.error(error)
        })
    } else {
      Api.fetch(UserApi.updateUser, {
        userName: userDocument.userName,
        userDocument,
        queryParams,
      })
        .then((result: ApiResponse) => {
          if (result.status === 200) {
            Router.push('/users')
          } else {
            console.log(result)
          }
        })
        .catch((error: ApiError) => {
          if (error.response?.status === 409) setIsModalOpen(true)
          else console.error(error)
        })
    }
  }

  return (
    <>
      <Typography type="title">
        {isAddMode ? 'New User' : 'Editing User'}
      </Typography>

      <Breadcrumbs
        segmentsRawText={[0]}
        replaceLabelSegments={[
          { segment: 0, value: isAddMode ? 'New User' : 'Editing User' },
        ]}
        icon={
          <Folder className="h-6 w-6 text-gray-600 dark:text-grayDark-600" />
        }
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-md bg-white dark:bg-grayDark-50 rounded px-8 pt-6 pb-8 mb-4 mt-5"
      >
        <Divider
          className="dark:text-grayDark-900 dark:border-t-grayDark-900"
          orientation="left"
        >
          User Details
        </Divider>
        <div className="w-full px-3 mb-6 md:mb-0 p-5">
          <div className="grid grid-cols-4 grid-rows-3 gap-2">
            <div>
              <TextInput
                name="userName"
                label="User Name*"
                register={register}
                error={errors.userName?.message !== undefined}
              />
            </div>
            <div>
              <TextInput
                name="realName"
                label="Real Name"
                register={register}
                error={errors.realName?.message !== undefined}
              />
            </div>
            <div>
              <SelectInput
                name="type"
                label="Password Type*"
                register={register}
                onChange={handleChangeSelect}
                options={[
                  { value: 'md5', label: 'md5' },
                  { value: 'raw', label: 'raw' },
                ]}
              />
            </div>
            <div>
              <TextInput
                name="password"
                label="Password"
                type="password"
                register={register}
                error={errors.password?.message !== undefined}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <label className="self-center justify-self-end text-xs text-gray-900 dark:text-grayDark-900">
                Group List
              </label>
              <Listbox
                value={selectedUserGroups}
                onChange={setSelectedUserGroups}
                multiple
                name="groupList"
              >
                <div>
                  <Listbox.Button className="col-span-3 relative min-w-24 w-auto mt-1 cursor-default rounded-lg bg-white dark:bg-grayDark-200 py-2 pl-3 pr-10 text-left shadow appearance-none focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate h-5 text-gray-900 dark:text-grayDark-900">
                      {selectedUserGroups
                        ?.map((group: IKeys) => group?.value)
                        .join(', ')}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ArrowDown
                        className="h-4 w-4 text-gray-900 dark:text-grayDark-900"
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
                    <Listbox.Options className="cols-span-3 absolute mt-1 max-h-60 w-24 min-w-min overflow-auto rounded-md bg-white dark:bg-grayDark-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {groupList?.map((group: IKeys) => (
                        <Listbox.Option
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-gray-200 dark:bg-gray-400 text-gray-600'
                                : 'text-gray-900'
                            }`
                          }
                          key={group.id}
                          value={group}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate text-gray-900 dark:text-grayDark-900 ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {group.value}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900 dark:text-grayDark-900">
                                  <Checkmark
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end gap-5">
          <Link href={'/users'} as={`/users`}>
            <button
              type="button"
              disabled={isSubmitting}
              className="rounded-md bg-white border-gray-900 border-2 shadow-md disabled:text-gray-200 disabled:border-gray-200 text-gray-900 font-bold px-4 py-2 mt-5"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-green-800 shadow-md text-white disabled:bg-green-200 font-bold px-4 py-2 mt-5"
          >
            {isSubmitting && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Save
          </button>
        </div>
      </form>

      <ModalDialog
        show={isModalOpen}
        title="Create New User"
        description={`User already exists !`}
        ok="Ok"
        okDisabled={isLoading}
        onClick={() => setIsModalOpen(false)}
        onClose={() => setIsModalOpen(false)}
        okClassName="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-black-900 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        cancelClassName="ml-2 inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-black-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      />
    </>
  )
}

export { FieldsForm }
