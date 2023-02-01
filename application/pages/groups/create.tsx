import type { NextPage } from 'next'
import React, { FunctionComponent, useState } from 'react'
import withLayout from 'utils/withLayout'
import Typography from 'components/Typography'
import { group as GroupApi } from '@vidispine/vdt-api'
import { Divider } from 'antd'
import { useForm, UseFormRegister } from 'react-hook-form'
import { GroupDocument } from '@vidispine/types'
import TextField from 'components/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Link from 'next/link'
import Router from 'next/router'
import { Api } from 'utils/Api'
import Breadcrumbs from 'components/Breadcrumbs'
import { Folder } from 'components/Icons'

type InputProps = {
    name: string
    label: string
    register: UseFormRegister<GroupDocument>
    error?: boolean
    errorMessage?: string
}

const TextInput: FunctionComponent<InputProps> = ({
    name,
    label,
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
                type="text"
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

const removeEmptyValues = (fields: GroupDocument) => {
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

const CreateGroupPage: NextPage = () => {
    const [errMessage, setErrMessage] = useState('')
    const schema = yup
        .object({
            groupName: yup.string().required(),
        })
        .required()

    const formOptions = { resolver: yupResolver(schema) }

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm(formOptions)

    const onSubmit = async (data: GroupDocument) => {
        const groupDocument = removeEmptyValues(data)
        const groupName: string | undefined = groupDocument.groupName?.trim()

        Api.fetch(GroupApi.updateGroup, {
            groupName,
        })
            .then(() => {
                Router.push('/groups/edit/' + groupName)
            })
            .catch((error) => {
                if (error.response) {
                    setErrMessage(error.response.data.conflict.explanation)
                }
            })
    }

    return (
        <>
            <Typography type="title">Create Group</Typography>

            <Breadcrumbs
                segmentsRawText={[0]}
                replaceLabelSegments={[
                    { segment: 0, value: 'Create Group' },
                    { segment: 1, value: 'Create' },
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
                    Group Details
                </Divider>
                <div className="w-full px-3 mb-6 md:mb-0 p-5">
                    <div className="grid grid-cols-3 gap-4 mb-5">
                        <div className="col-span-2">
                            <div className="grid grid-cols-2 gap-5">
                                <TextInput
                                    name="groupName"
                                    label="Group Name*"
                                    register={register}
                                    error={errors.groupName?.message !== undefined}
                                />
                            </div>
                            {errMessage && (
                                <div
                                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-10"
                                    role="alert"
                                >
                                    <strong className="font-bold">Error!</strong>
                                    <span className="block sm:inline">{errMessage}</span>
                                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                        <svg
                                            onClick={() => {
                                                setErrMessage('')
                                            }}
                                            className="fill-current h-6 w-6 text-red-500"
                                            role="button"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <title>Close</title>
                                            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                        </svg>
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-end gap-5">
                    <Link href={'/groups'} as={`/groups`}>
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
                        Create
                    </button>
                </div>
            </form>
        </>
    )
}

export default withLayout(CreateGroupPage, ['group.write'])
