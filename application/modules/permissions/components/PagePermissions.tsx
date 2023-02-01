import React from 'react'
import { usePermissions } from '../hooks/usePermissions'
import Typography from 'components/Typography'

export type RestrictPropsType = {
  allow: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

export const PagePermissions: React.FunctionComponent<RestrictPropsType> = ({
  allow,
  children,
}) => {
  const permissions = allow
  const [hasPermission] = usePermissions()
  let viewPermission = false

  const extractedPerms = permissions.map((item) => {
    const trimmedPerm = item.trim()

    return hasPermission(trimmedPerm)
  })

  if (extractedPerms.every(Boolean)) {
    viewPermission = true
  }

  if (viewPermission) {
    return <>{children}</>
  }

  return (
    <Typography type="title">
      You dont have permissions to access this page
    </Typography>
  )
}
