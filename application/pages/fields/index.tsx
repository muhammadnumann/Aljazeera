import { NextPage } from 'next'
import withLayout from 'utils/withLayout'
import { metadatafield as MetadataFieldApi } from '@vidispine/vdt-api'
import React, { useEffect, useState } from 'react'
import Typography from 'components/Typography'
import Spinner from 'components/Spinner'
import { createColumnHelper } from '@tanstack/react-table'
import { MetadataFieldDocument, MetadataFieldListType } from '@vidispine/types'
import ReactTable from 'components/ReactTable'
import {
  CheckmarkCircleOutline,
  DeleteOutline,
  Edit,
  Folder,
} from 'components/Icons'
import Link from 'next/link'
import ModalDialog from 'components/ModalDialog'
import { useAmplitude } from 'utils/hooks/useAmplitude'
import { Guid } from 'utils/guid'
import { Api, ApiError, ApiResponse } from 'utils/Api'
import { Restrict } from 'modules/permissions'
import Breadcrumbs from 'components/Breadcrumbs'

const Index: NextPage = () => {
  const [instrument] = useAmplitude()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedFieldName, setSelectedFieldName] = useState('')

  const isLoading = false

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const deleteField = async (fieldName: string) => {
    Api.fetch(MetadataFieldApi.removeMetadataField, { fieldName })
      .then(() => {
        closeModal()
        instrument('Remove Metadata Field', { fieldName: fieldName })
        window.location.reload()
      })
      .catch((error: ApiError) => {
        console.error(error)
      })
  }

  const handleDeleteClick = (fieldName: string) => {
    setSelectedFieldName(fieldName)
    setIsModalOpen(true)
  }

  const [metadataFields, setMetadataFields] = useState<MetadataFieldListType>(
    {},
  )

  useEffect(() => {
    Api.fetch(MetadataFieldApi.listMetadataField, {
      queryParams: {
        includeValues: true,
      },
    }).then((response: ApiResponse) => {
      setMetadataFields(response.data.field)
      instrument('Metadata List', {
        metadataFields: metadataFields.field?.length,
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const columnHelper = createColumnHelper<MetadataFieldDocument>()

  const columns = [
    columnHelper.accessor('name', {
      header: () => 'Name',
    }),
    columnHelper.accessor('type', {
      header: () => 'Type',
    }),
    columnHelper.accessor('system', {
      header: () => 'System',
      cell: (info) =>
        info.getValue() ? <CheckmarkCircleOutline className={'h-6 w-6'} /> : '',
    }),
    columnHelper.accessor('inheritance', {
      header: () => 'Inheritance',
      cell: (info) =>
        info.getValue() === 'true' ? (
          <CheckmarkCircleOutline className={'h-6 w-6'} />
        ) : (
          ''
        ),
    }),
    columnHelper.accessor('name', {
      header: () => 'Actions',
      cell: (info) => {
        const fieldId = info.getValue()
        return (
          <Restrict to="metadata_field.write">
            <div className="flex">
              <Link
                href={`/fields/edit/[fieldName]`}
                as={`/fields/edit/${fieldId}`}
                key={Guid.newGuid()}
              >
                <div>
                  <Edit className="ml-2 h-6 w-6" />
                </div>
              </Link>
              <button
                type="button"
                onClick={() => {
                  handleDeleteClick(info.getValue() ?? '')
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

  if (!metadataFields) {
    return (
      <>
        <Typography type="title">Fields</Typography>
        <Spinner />
      </>
    )
  }

  return (
    <>
      <div className="flex justify-between">
        <Typography type="title">Metadata Fields</Typography>

        <div className="right-1">
          <Restrict to="metadata_field.write" key={1}>
            <Link key={2} href={'/fields/add'} as={'/fields/add'}>
              <button
                type="button"
                className="rounded-md bg-white border-gray-900 border-2 shadow-md disabled:text-gray-200 disabled:border-gray-200 text-gray-900 font-bold px-4 py-2 mt-10"
              >
                Add Field
              </button>
            </Link>
          </Restrict>
        </div>
      </div>

      <Breadcrumbs
        segmentsRawText={[0]}
        replaceLabelSegments={[{ segment: 0, value: 'Metadata Fields' }]}
        icon={
          <Folder className="h-6 w-6 text-gray-600 dark:text-grayDark-600" />
        }
      />

      <ReactTable columns={columns} data={metadataFields} />
      <ModalDialog
        show={isModalOpen}
        title="Remove Item"
        description={`Are you sure you want to remove the field: '${selectedFieldName}'?`}
        ok="Yes"
        cancel="No"
        okDisabled={isLoading}
        onClick={() => deleteField(selectedFieldName)}
        onClose={closeModal}
        okClassName="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-black-900 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        cancelClassName="ml-2 inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-black-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      />
    </>
  )
}

export default withLayout(Index, ['metadata_field.read'])
