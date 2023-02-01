import { createContext } from 'react'

export interface ContextProps {
  serverUrl: string | undefined
  username: string | undefined
  token: string | undefined
  userPermissions: string | string[]
  environment: string | undefined
}

const AppContext = createContext({} as ContextProps)

export default AppContext
