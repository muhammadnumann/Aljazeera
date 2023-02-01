import { utils } from '@vidispine/vdt-api'

/**
 *
 * `GET /API/item/${itemId}/thumbnail/spritesheet`
 *
 * @function item.getItemWaveformImageUri
 * @param {Object} obj
 * @param {string} obj.itemId
 * @returns {Promise<Object>}
 */
function getItemThumbnailSpriteSheet({
  itemId = utils.isRequired(),
  headers: propsHeaders = {},
  ...props
}) {
  const path = `/API/item/${itemId}/thumbnail/spritesheet?noauth-url=true`
  const headers = { accept: 'application/xml', ...propsHeaders }
  return utils.vFetch({
    path,
    method: 'GET',
    headers,
    ...props,
  })
}

export { getItemThumbnailSpriteSheet }
