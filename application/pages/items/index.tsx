import type { NextPage } from 'next'
import { item as ItemApi } from '@vidispine/vdt-api'
import { useCallback, useEffect, useState } from 'react'
import withLayout from 'utils/withLayout'
import Spinner from 'components/Spinner'
import Typography from 'components/Typography'
import { ItemListType } from '@vidispine/types'
import { useAmplitude } from 'utils/hooks/useAmplitude'
import ItemView from 'components/ItemView'
import { Api, ApiResponse } from 'utils/Api'

const ItemsPage: NextPage = () => {
  const number = 10

  const [itemListType, setItemListType] = useState<ItemListType | undefined>({})

  const [instrument] = useAmplitude()

  const getItems = useCallback(async () => {
    Api.fetch(ItemApi.searchItem, {
      queryParams: {
        content: ['metadata', 'shape', 'uri'],
        methodType: 'AUTO',
        tag: 'original',
        number,
      },
    }).then((response: ApiResponse) => {
      setItemListType(response.data)
    })
  }, [number])

  useEffect(() => {
    getItems()
  }, [getItems])

  if (itemListType?.item?.length == 0) {
    return (
      <>
        <Typography type="title">Items</Typography>
        <Spinner />
      </>
    )
  }

  const { item: items = [] } = itemListType || {}

  instrument('Item List', { items: items?.length || 0 })

  const onRemoveItemClick = () => {
    getItems()
  }

  return <ItemView items={items} onRemoveItemClick={onRemoveItemClick} />
}

export default withLayout(ItemsPage, ['item_search', 'collection.read'])
