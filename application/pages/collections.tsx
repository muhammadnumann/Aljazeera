import type { NextPage } from 'next'
import withLayout from 'utils/withLayout'
import Typography from 'components/Typography'

const CollectionsPage: NextPage = () => {
  return (
    <>
      <Typography type="title">Collections</Typography>
    </>
  )
}

export default withLayout(CollectionsPage)
