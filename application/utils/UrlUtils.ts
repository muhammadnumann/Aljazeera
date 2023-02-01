export const urlIsValid = (address: string) => {
  let url

  try {
    url = new URL(address)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch (_) {
    return false
  }
}
