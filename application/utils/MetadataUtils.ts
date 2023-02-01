import { ItemType } from '@vidispine/types'
import { ParsedItemType } from '../types/ParsedItemType'

export const getMetadataTitle = (
  fieldName: (() => string) | number | string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  func: (param: any) => void,
  parsedMetadata: ParsedItemType[],
  entityType: ItemType,
  entityId: string | undefined,
) => {
  if (func && typeof func === 'function') {
    return func({ ...parsedMetadata, entityType, entityId })
  }
  if (fieldName && typeof fieldName !== 'function') {
    return parsedMetadata[fieldName]
  }
  return undefined
}
