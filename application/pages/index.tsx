import type { NextPage } from 'next'
import withLayout from 'utils/withLayout'
import Typography from 'components/Typography'

const HomePage: NextPage = () => {
  return <Typography type="title">Home</Typography>
}

export default withLayout(HomePage)
