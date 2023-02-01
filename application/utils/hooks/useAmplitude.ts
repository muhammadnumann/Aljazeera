import { track } from '@amplitude/analytics-browser'

export const useAmplitude = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instrument = (key: string, props?: any, event?: any) => {
    track(key, props)

    if (!!event && typeof event === 'function') {
      event()
    }
  }

  return [instrument]
}
