import { item as itemApi } from '@vidispine/vdt-api'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useApi } from '@vidispine/vdt-react'
import AppContext from 'utils/contexts/AppContext'
import Spinner from 'components/Spinner'
import { ThemeContext } from 'utils/contexts/ThemeContext'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Waveform = (Id: any) => {
  const { theme } = useContext(ThemeContext)
  const [isLoadingWaveForm, setIsLoadingWaveForm] = useState<boolean>(true)
  const { token } = useContext(AppContext)
  const itemId = Id.Id

  const { request: getItemWaveformImageRequest } = useApi(
    itemApi.getItemWaveformImage,
  )

  const queryParams = useMemo(() => {
    return {
      channel: [0, 1],
      bgcolor: theme === 'dark' ? '%233f3f3f' : '%23e6e6e6',
      fgcolor: theme === 'dark' ? 'white' : 'black',
      width: '1200',
      height: '180',
    }
  }, [theme])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [imageSrc, setImageSrc] = useState<any>(null)

  const getWaveFormImage = useCallback(() => {
    getItemWaveformImageRequest({
      itemId,
      header: {
        authorization: `token ${token}`,
      },
      responseType: 'blob',
      queryParams,
    })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any) => {
        setIsLoadingWaveForm(false)
        setImageSrc(URL.createObjectURL(data.data))
      })
      .catch(() => {
        setIsLoadingWaveForm(true)
      })
  }, [getItemWaveformImageRequest, itemId, queryParams, token])

  useEffect(() => {
    getWaveFormImage()
  }, [getWaveFormImage])

  return (
    <>
      {imageSrc ? (
        <img src={imageSrc} alt="WaveFormImage" className="w-[800px]" />
      ) : (
        <div className="relative rounded-lg bg-gray-50 dark:bg-gray-700">
          <div className="flex justify-center items-center text-xl text-gray-900 dark:text-gray-50 absolute top-0 w-full h-full">
            {!isLoadingWaveForm ? (
              <span className="pt-20">
                The waveform is not generated yet!{' '}
                <a
                  href="#"
                  className="text-blue-800"
                  onClick={() => getWaveFormImage()}
                >
                  Try again
                </a>
              </span>
            ) : (
              <div className="pt-20">
                <Spinner />
                Please wait while we are generating the waveform
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Waveform
