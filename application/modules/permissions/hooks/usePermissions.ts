import { useContext } from 'react'
import AppContext from 'utils/contexts/AppContext'
import { Permissions } from 'modules/permissions'

export function usePermissions() {
  const appContext = useContext(AppContext)

  const hook = (permission: string) => {
    return Permissions.checkPermission(permission, appContext.userPermissions)
  }

  const hasPermission = hook

  return [hasPermission]
}
