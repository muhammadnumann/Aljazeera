import type { NextPage } from 'next'
import withLayout from 'utils/withLayout'
import ItemDetailPage from 'components/ItemDetailPage'

const ItemByIdPage: NextPage = () => {
  return <ItemDetailPage />
}

export default withLayout(ItemByIdPage, [
  'item_id.read',
  'item_shape.read',
  'item_uri',
  'thumbnail.read',
])
