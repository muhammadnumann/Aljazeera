import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { item as ItemApi } from '@vidispine/vdt-api'
import { ParsedUrlQuery } from 'querystring'
import Typography from 'components/Typography'
import { Api, ApiResponse } from 'utils/Api'
import { ItemType } from '@vidispine/types'
import Spinner from 'components/Spinner'
import ItemDetailView from 'components/ItemDetailView'

const ItemDetailPage = () => {
  const router = useRouter()
  const { itemId }: ParsedUrlQuery = router.query

  const [itemType, setItemType] = useState<ItemType>({})
  const [isLoading, setIsLoading] = useState(true)

  const getItem = useCallback(async () => {
    const queryParams = {
      field: [
        'title',
        'durationSeconds',
        'mimeType',
        'created',
        'user',
        'originalFilename',
        'item_broadcastCenter',
        'item_shortDescription',
        'item_channel',
        'item_videoId',
        'item_slug',
      ],
      content: ['metadata', 'shape', 'uri', 'thumbnail'],
      version: 'latest',
      'noauth-url': true,
      methodType: 'AUTO',
    }

    Api.fetch(ItemApi.getItem, { itemId, queryParams }).then(
      (response: ApiResponse) => {
        setItemType(response.data)
        setIsLoading(false)
      },
    )
  }, [itemId])

  useEffect(() => {
    getItem().catch((error: string) => {
      console.error(error)
    })
  }, [getItem])

  const onItemMetadataUpdate = () => {
    getItem()
  }

  if (!itemType)
    return (
      <>
        <Typography type="title">Item</Typography>
        <Spinner />
      </>
    )

  return (
    <ItemDetailView
      itemId={itemId}
      itemType={itemType}
      isLoading={isLoading}
      onItemMetadataUpdate={onItemMetadataUpdate}
    />
  )
}

export default ItemDetailPage
