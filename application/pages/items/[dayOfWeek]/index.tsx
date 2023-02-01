import { NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { SearchResultType, ItemType } from '@vidispine/types'
import { useAmplitude } from 'utils/hooks/useAmplitude'
import { search as SearchApi } from '@vidispine/vdt-api'
import withLayout from 'utils/withLayout'
import ItemView from 'components/ItemView'
import { Api, ApiResponse } from 'utils/Api'

const ItemsByDayOfWeek: NextPage = () => {
  const router = useRouter()
  const { dayOfWeek }: ParsedUrlQuery = router.query

  const [itemList, setItemList] = useState<SearchResultType | undefined>({})

  useEffect(() => {
    return () => {
      setItemList({})
    }
  }, [dayOfWeek])

  const [instrument] = useAmplitude()

  const getItems = useCallback(async () => {
    Api.fetch(SearchApi.searchItemCollection, {
      itemSearchDocument: {
        field: [
          {
            name: 'day_of_week',
            value: [
              {
                value: dayOfWeek?.toString().toUpperCase(),
              },
            ],
          },
        ],
      },
      queryParams: {
        content: ['metadata', 'shape', 'uri'],
        tag: 'original',
        number: 20,
      },
    }).then((response: ApiResponse) => {
      setItemList(response.data)
    })
  }, [dayOfWeek])

  const onRemoveItemClick = () => {
    getItems()
  }

  useEffect(() => {
    getItems()
  }, [getItems])

  const items: ItemType[] =
    (itemList?.entry?.map((entry) => entry.item) as ItemType[]) ||
    ([] as ItemType[])

  instrument(`Item List ${dayOfWeek}`, { items: items?.length || 0 })

  const itemLink = () => {
    const link = `/aje/news-packages/${dayOfWeek}`

    return (itemId: string) => {
      return `${link}/${itemId}`
    }
  }

  return (
    <ItemView
      items={items}
      dayOfWeek={dayOfWeek as string}
      onRemoveItemClick={onRemoveItemClick}
      itemLink={itemLink()}
    />
  )
}

export default withLayout(ItemsByDayOfWeek, ['item_search', 'collection.read'])
