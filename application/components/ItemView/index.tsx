import { useState } from 'react'
import { useRouter } from 'next/router'
import Typography from '../Typography'
import MediaDisplaySelector from '../MediaDisplaySelector'
import ItemCardView from '../ItemCardView'
import ItemListView from '../ItemListView'
import { useAmplitude } from '../../utils/hooks/useAmplitude'
import { ItemType } from '@vidispine/types'
import Breadcrumbs from 'components/Breadcrumbs'
import { Folder } from 'components/Icons'

interface ItemViewInputProps {
  items: ItemType[]
  dayOfWeek?: string
  onRemoveItemClick: () => void
  title?: string
  itemLink?: (itemId: string) => string
}

const ItemView = ({
  items,
  dayOfWeek,
  onRemoveItemClick,
  title = 'Items',
  itemLink,
}: ItemViewInputProps) => {
  const [displayCards, setDisplayCards] = useState<boolean>(true)
  const router = useRouter()

  const onListItemClick = (id: string) => {
    if (itemLink) {
      router.push(itemLink(id))
    } else {
      router.push(`/aje/news-packages/${dayOfWeek}/${id}`)
    }
  }

  const [instrument] = useAmplitude()

  let dayOfWeekName = ''

  if (dayOfWeek) {
    dayOfWeekName = dayOfWeek?.charAt(0).toUpperCase() + dayOfWeek?.slice(1)
  }

  const Title = () => {
    if (dayOfWeek) {
      return <Typography type="title">Items - {dayOfWeekName}</Typography>
    }

    return <Typography type="title">{title}</Typography>
  }

  return (
    <>
      <Title />

      <Breadcrumbs
        segmentsUppercase={[0]}
        segmentsRawText={[0]}
        icon={
          <Folder className="h-6 w-6 text-gray-600 dark:text-grayDark-600" />
        }
      />

      <MediaDisplaySelector
        displayCards={displayCards}
        setDisplayCards={setDisplayCards}
      />

      {displayCards && (
        <ItemCardView
          items={items}
          onClick={(id: string) =>
            instrument('Item Click', { itemId: id }, () => onListItemClick(id))
          }
          onRemoveItemClick={onRemoveItemClick}
        />
      )}

      {!displayCards && (
        <ItemListView items={items} onListItemClick={onListItemClick} />
      )}
    </>
  )
}

export default ItemView
