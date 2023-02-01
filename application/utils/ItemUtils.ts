import { item as ItemApi } from '@vidispine/vdt-api'
import { filterShapeSource } from '@vidispine/vdt-js'

export const getDownloadLink = async (itemId: string) => {
  let source
  let filteredShape

  const queryParams = {
    content: ['shape', 'metadata', 'uri'],
    version: 'latest',
    'noauth-url': true,
    tag: 'original',
    methodType: 'AUTO',
  }
  const { data } = await ItemApi.getItem({
    itemId: itemId,
    queryParams,
  }).catch((error: string) => {
    console.error(error)
  })
  filteredShape = filterShapeSource(data)
  if (filteredShape.length > 0) {
    ;[source] = filteredShape
    const src = source.src
    const url = `/download${src.split('APInoauth').pop()}`
    const originalUrl = source.src
    const mime = source.type
    const filename = source.src.replace(/^.*[\\\/]/, '')
    const originalFilename = source.shape.originalFilename
    const size = source.shape.fileSizeBytes
    return [url, mime, size, filename, originalFilename, originalUrl]
  }

  return []
}
