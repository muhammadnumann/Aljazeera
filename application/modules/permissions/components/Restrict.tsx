import React from 'react'
import { usePermissions } from '../hooks/usePermissions'

export type RestrictPropsType = {
  to: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

export const Restrict: React.FunctionComponent<RestrictPropsType> = ({
  to,
  children,
}) => {
  const permissions = to
  const [hasPermission] = usePermissions()

  let viewPermission = false

  if (permissions.includes(',')) {
    const permsArr = permissions.split(',')
    const extractedPerms = permsArr
      .filter((item) => {
        if (item) {
          return true
        }

        return false
      })
      .map((item) => {
        const trimmedPerm = item.trim()
        return hasPermission(trimmedPerm)
      })

    if (extractedPerms.every(Boolean)) {
      viewPermission = true
    }
  } else {
    if (hasPermission(permissions)) {
      viewPermission = true
    }
  }

  if (viewPermission) {
    return <>{children}</>
  }

  return null
}
