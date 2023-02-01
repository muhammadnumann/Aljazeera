import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import '@testing-library/jest-dom/extend-expect'
import 'jest-location-mock'
import { DUMMY_SERVER_URL } from './helpers/fixture.helper'

configure({ adapter: new Adapter() })

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: { serverUrl: DUMMY_SERVER_URL },
      asPath: '',
    }
  },
}))
