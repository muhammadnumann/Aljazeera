import type { NextPage } from 'next'
import withLayout from 'utils/withLayout'
import Typography from 'components/Typography'
import Breadcrumbs from 'components/Breadcrumbs'
import { Folder } from 'components/Icons'

const HomePage: NextPage = () => {
  return (
    <>
      <Typography type="title">Home</Typography>

      <Breadcrumbs
        segmentsRawText={[0]}
        icon={
          <Folder className="h-6 w-6 text-gray-600 dark:text-grayDark-600" />
        }
      />
    </>
  )
}

export default withLayout(HomePage, ['administrator'])
