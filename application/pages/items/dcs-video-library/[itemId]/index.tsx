import type { NextPage } from 'next'
import withLayout from 'utils/withLayout'
import ItemDetailPage from 'components/ItemDetailPage'

const DCSUploadItemByIdPage: NextPage = () => {
  // Include any DCS Uploads related code here
  return <ItemDetailPage />
}

export default withLayout(DCSUploadItemByIdPage, [
  'item_id.read',
  'item_shape.read',
  'item_uri',
  'thumbnail.read',
])
