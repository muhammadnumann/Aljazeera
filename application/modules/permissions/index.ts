import { user } from '@vidispine/vdt-api'
import { GroupDocument } from '@vidispine/types'
import Cookies from 'universal-cookie'
import vidispinePermissions from './permissions.json'
import { usePermissions as permissionsHook } from './hooks/usePermissions'
import { Restrict as RestrictComponent } from './components/Restrict'
import { PagePermissions as PagePermissionsComponent } from './components/PagePermissions'

// Constants
export const PERMISSIONS_COOKIE_KEY = 'vidispinePermissions'

// Hooks
export const usePermissions = permissionsHook

// Components
export const Restrict = RestrictComponent
export const PagePermissions = PagePermissionsComponent

// Types
export type RolesUrlParams = {
  token: string
  baseURL: string
}

// Classes
export class Permissions {
  protected static permissionsCache = {}

  static async getUserPermissions(userName: string, urlParams: RolesUrlParams) {
    try {
      if (userName) {
        const response = await user.getUserGroupRole({
          userName: userName,
          baseURL: urlParams.baseURL,
          headers: { token: urlParams.token },
        })
        return response
      }
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  static serializeUserPermissions(groups: Array<GroupDocument>) {
    if (groups.length) {
      const roles = groups
        .filter((item: GroupDocument) => {
          if (item.role) {
            return true
          }
          return false
        })
        .map((item: GroupDocument) => {
          return item.groupName
        })

      if (roles && roles.length) {
        const cookies = new Cookies()
        cookies.set(PERMISSIONS_COOKIE_KEY, JSON.stringify(roles), {
          path: '/',
        })
      }
    }
  }

  protected static parsePermission(permission: string): string {
    if (permission in Permissions.permissionsCache) {
      return Permissions.permissionsCache[permission]
    } else {
      if (permission.includes('.')) {
        const splitPerm = permission.split('.')
        const roleType = splitPerm[0]
        const permissionType = splitPerm[1]

        if (permissionType == 'read' || permissionType == 'write') {
          const parsedPermission = `_${roleType}_${permissionType}`
          Permissions.permissionsCache[permission] = parsedPermission
          return parsedPermission
        }
      } else {
        const parsedPermission = `_${permission}`
        Permissions.permissionsCache[permission] = parsedPermission
        return parsedPermission
      }
    }
    return ''
  }

  protected static checkUserCookiePermission(
    parsedPermission: string,
    ctxCookie: string | string[],
  ): boolean {
    if (ctxCookie && ctxCookie.includes(parsedPermission)) {
      return true
    }

    return false
  }

  static processUserPermissionCookies(cookies: string = '') {
    const cookieObj = new Cookies(cookies)
    const permissionCookie = cookieObj.get(PERMISSIONS_COOKIE_KEY)

    return permissionCookie
  }

  static checkPermission(
    permission: string,
    ctxCookie: string | string[],
  ): boolean {
    const parsedPerm = Permissions.parsePermission(permission)
    const vdPerms: string[] = vidispinePermissions.permissions

    if (parsedPerm && vdPerms.includes(parsedPerm)) {
      return Permissions.checkUserCookiePermission(parsedPerm, ctxCookie)
    }

    return false
  }
}

export default Permissions
