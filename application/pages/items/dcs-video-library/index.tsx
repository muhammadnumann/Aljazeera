import type { NextPage } from 'next'
import { collection as CollectionApi } from '@vidispine/vdt-api'
import { useCallback, useEffect, useState } from 'react'
import withLayout from 'utils/withLayout'
import Typography from 'components/Typography'
import { ItemListType } from '@vidispine/types'
import { useAmplitude } from 'utils/hooks/useAmplitude'
import ItemView from 'components/ItemView'
import { Api, ApiResponse, CollectionListResponse } from 'utils/Api'

const DCSVideoLibraryPage: NextPage = () => {
  const number = 10

  const [itemListType, setItemListType] = useState<ItemListType | undefined>({})

  const [instrument] = useAmplitude()

  const getItems = useCallback(async () => {
    Api.fetch(CollectionApi.listCollection).then(
      (collectionResponse: CollectionListResponse) => {
        const collections = collectionResponse.data.collection

        let dcsUploadsId

        if (collections) {
          collections.every((collection) => {
            if (collection.name && collection.name == 'dcs-uploads') {
              dcsUploadsId = collection.id
              return false
            }

            return true
          })

          if (dcsUploadsId) {
            Api.fetch(CollectionApi.getCollectionItem, {
              collectionId: dcsUploadsId,
              queryParams: {
                content: ['metadata', 'shape', 'uri'],
                methodType: 'AUTO',
                tag: 'original',
                number,
              },
            }).then((response: ApiResponse) => {
              setItemListType(response.data)
            })
          }
        }
      },
    )
  }, [number])

  useEffect(() => {
    getItems()
  }, [getItems])

  if (itemListType?.item?.length == 0) {
    return (
      <>
        <Typography type="title">DCS Video Library</Typography>
        <b>No Videos Uploaded</b>
      </>
    )
  }

  const { item: items = [] } = itemListType || {}

  instrument('DCS Uploads', { items: items?.length || 0 })

  const onRemoveItemClick = () => {
    getItems()
  }

  const itemLink = () => {
    const link = `/dcs-video-library`

    return (itemId: string) => {
      return `${link}/${itemId}`
    }
  }

  return (
    <ItemView
      items={items}
      onRemoveItemClick={onRemoveItemClick}
      title="DCS Video Library"
      itemLink={itemLink()}
    />
  )
}

export default withLayout(DCSVideoLibraryPage, [
  'item_search',
  'collection.read',
])
