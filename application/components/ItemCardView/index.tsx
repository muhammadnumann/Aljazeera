import { ItemType } from '@vidispine/types'
import MediaCard from '../MediaCard'
import { Guid } from '../../utils/guid'
import MediaCardPlaceholder from '../MediaCardPlaceholder'

interface ItemCardViewInputProps {
  items: ItemType[]
  onClick: (id: string) => void
  onRemoveItemClick: () => void
}

const ItemCardView = ({
  items,
  onClick,
  onRemoveItemClick,
}: ItemCardViewInputProps) => {
  if (items.length === 0) {
    const loadingItens = []
    for (let i = 0; i < 10; i++) {
      loadingItens.push(<MediaCardPlaceholder key={Guid.newGuid()} />)
    }
    return (
      <div
        className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10
            xl:justify-items-start lg:justify-items-start md:justify-items-start sm:justify-items-center justify-items-center"
      >
        {loadingItens}
      </div>
    )
  }

  return (
    <div
      className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10
            xl:justify-items-start lg:justify-items-start md:justify-items-start sm:justify-items-center justify-items-center"
    >
      {items.map((itemType: ItemType) => {
        return (
          <MediaCard
            key={Guid.newGuid()}
            itemType={itemType}
            onClick={(item: ItemType) => onClick(item.id!)}
            onRemoveItemClick={onRemoveItemClick}
          />
        )
      })}
    </div>
  )
}

export default ItemCardView
