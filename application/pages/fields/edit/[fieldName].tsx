import { NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { metadatafield as api } from '@vidispine/vdt-api'
import { MetadataFieldDocument } from '@vidispine/types'
import withLayout from 'utils/withLayout'
import { FieldsForm } from 'components/FieldsForm'
import { Api, FieldApiResponse, ApiError } from 'utils/Api'

const FieldByNamePage: NextPage = () => {
  const router = useRouter()
  const { fieldName }: ParsedUrlQuery = router.query
  const [field, setField] = useState<MetadataFieldDocument | undefined>()

  useEffect(() => {
    Api.fetch(api.getMetadataField, {
      fieldName,
    })
      .then((response: FieldApiResponse) => {
        setField(response.data)
      })
      .catch((error: ApiError) => {
        console.error(error)
      })
  }, [fieldName])

  return <>{field ? <FieldsForm field={field} /> : null}</>
}

export default withLayout(FieldByNamePage, ['metadata_field.write'])
