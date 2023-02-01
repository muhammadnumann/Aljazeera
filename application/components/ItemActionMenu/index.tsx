import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  AddToDMV,
  DownloadItem,
  MoreVertical,
  TrimVideo,
} from 'components/Icons'
import { parseMetadataType } from '@vidispine/vdt-js'
import ModalProgressDialog from 'components/ModalProgressDialog'
import Api from 'utils/Api'
import {
  conform as api,
  file as FileApi,
  job as JobApi,
  storagegroup as storeGroupApi,
} from '@vidispine/vdt-api'
import { ItemType } from '@vidispine/types'
import AppContext from 'utils/contexts/AppContext'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { getDownloadLink } from '../../utils/ItemUtils'
import { formatMilliseconds } from '../../utils/StringUtils'
import axios from 'axios'

interface InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  playerRef: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  playerSeekBarRef: any
}

class Interval {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  start: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  end: any
}

class MetadataProps {
  name?: string
  label?: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any | null
  type?: React.HTMLInputTypeAttribute | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | null
}

const ItemActionMenu = ({ playerRef, playerSeekBarRef }: InputProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [buttonLabel, setButtonLabel] = useState('Cancel')
  const [intervalId, setIntervalId] = useState({} as NodeJS.Timer)
  const [showProgress, setShowProgress] = useState<boolean>(false)
  const [currentProgress, setCurrentProgress] = useState<number>(0)
  const [itemType, setItemType] = useState<ItemType>({})
  const [progressTitle, setProgressTitle] =
    useState<string>('Sending to DMV ...')
  const [progressMessage, setProgressMessage] = useState<string>(
    'Please wait while the file is being sent to DMV',
  )
  const isCanceled = useRef(false)

  const ItemID = playerRef.current?.props?.itemType?.id
  const start = playerSeekBarRef.current?.seekBar?.in | 0
  const end = playerSeekBarRef.current?.seekBar?.out | 0
  const context = useContext(AppContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const fps = 25
  const numerator = 1

  useEffect(() => {
    setItemType(playerRef.current?.props?.itemType)
  }, [playerRef])

  const failed = () => {
    setProgressMessage('Failed to send file to DMV!')
    setProgressTitle('Failed')
  }

  const downloadImage = useCallback(async () => {
    setButtonLabel('Cancel')
    setProgressTitle('Downloading ...')
    setCurrentProgress(0)
    setShowProgress(true)
    setProgressMessage(
      "Files you've downloaded are automatically saved in the Downloads folder. This folder is usually located on the C drive (for example, C:\\Users\\[your name]\\Downloads).",
    )
    const [, , , filename, originalFilename, originalUrl] =
      await getDownloadLink(ItemID)
    const currentTime = formatMilliseconds(playerRef?.current?.player?.smpte)

    const format = 'jpg'
    const [fileName] = (originalFilename || filename).split('.')
    const outputFileName = `${fileName}.${format}`

    const data = {
      time: currentTime,
      fileName: outputFileName,
      videoUrl: originalUrl,
      format: format,
    }

    axios
      .post('/functions/mam-extractimagefromvideo', data)
      .then(function (response) {
        if (!isCanceled.current) {
          const { file } = response.data

          setCurrentProgress(1)
          setShowProgress(false)

          const link = document.createElement('a')
          link.href = file
          link.setAttribute('download', fileName)
          document.body.appendChild(link)
          link.click()
        }
      })
      .catch(function () {
        setCurrentProgress(0)
        setShowProgress(false)
      })
  }, [ItemID, playerRef])

  const handleJobProcessing = useCallback(
    async (jobId: string, action: string) => {
      const id = setInterval(async () => {
        const response = await Api.fetch(JobApi.getJob, {
          jobId,
          queryParams: {
            field: 'destinationFileId',
            metadata: 'true',
          },
        })
        if (response.data.status === 'FINISHED') {
          clearInterval(id)
          setCurrentProgress(1)
          setProgressMessage('Finished')
          if (action === 'sendToDmv') {
            const fileId = response.data.data[0].value
            await Api.fetch(FileApi.updateFileState, {
              fileId,
              state: 'NONE',
            })
            setProgressTitle('File sent to DMV')
          } else {
            setProgressTitle('Trim process executed')
          }
        } else if (response.data.status === 'FAILED_TOTAL') {
          clearInterval(id)
          failed()
        } else {
          const finished = response.data.log.task.filter(
            (task: { status: string }) => task.status === 'FINISHED',
          )
          setCurrentProgress(finished.length / response.data.totalSteps)
        }
      }, 1000)
      setIntervalId(id)
      return () => {
        clearInterval(intervalId)
      }
    },
    [intervalId],
  )

  const onCloseDialog = () => {
    clearInterval(intervalId)
    isCanceled.current = true
    setShowProgress(false)
  }

  const sendToDMV = useCallback(async () => {
    setButtonLabel('Close')
    setProgressTitle('Sending to DMV ...')
    setCurrentProgress(0)
    setProgressMessage('Please wait while the file is being sent to DMV')
    setShowProgress(true)
    const storageResponse = await Api.fetch(storeGroupApi.getStorageGroup, {
      groupName: `dmv_${context.environment}`,
    })

    if (storageResponse.status === 200) {
      const dmvStorageId = storageResponse.data.storage[0].id
      const parsedMetadata = parseMetadataType(itemType.metadata, {
        flat: true,
      })
      const originalShape = itemType.shape?.filter(
        (item) => item.tag?.at(0) === 'original',
      )
      const queryParams = {
        filename: `${parsedMetadata.item_slug}-AJETV.mp4`,
        move: false,
      }
      const response = await Api.fetch(FileApi.createFileMove, {
        fileId: originalShape?.at(0)?.videoComponent?.at(0)?.file?.at(0)?.id,
        targetStorageId: dmvStorageId,
        queryParams,
      })

      if (response.status === 200) {
        const jobId = response.data.jobId
        await handleJobProcessing(jobId, 'sendToDmv')
      } else {
        failed()
      }
    } else {
      failed()
    }
  }, [itemType, handleJobProcessing, context.environment])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function sendTrimRequest(form: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    conformRequestDocument: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queryParams: any
  }) {
    const { conformRequestDocument, queryParams } = form

    const request = await api
      .createConform({
        conformRequestDocument,
        queryParams,
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: { json: () => any }) => response.json())
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((jobDocument: any) => ({ jobDocument }))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: { message: any; response: { data: any } }) => {
        let errorMessage = error.message
        if (error.response) {
          errorMessage = JSON.stringify(error.response.data, (_k, v) =>
            v === null ? undefined : v,
          )
        }

        // Throw an exception to stop the execution of the promise chain.
        throw new Error(errorMessage)
      })
    return request
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const interval: Interval = {
      start: {
        samples: Math.ceil(start * fps),
        timeBase: {
          numerator: numerator,
          denominator: fps,
        },
      },
      end: {
        samples: Math.ceil(end * fps),
        timeBase: {
          numerator: numerator,
          denominator: fps,
        },
      },
    }

    const conform = {
      timeline: {
        segment: [
          {
            source: {
              id: ItemID,
              interval: interval,
            },
          },
        ],
      },
    }

    const metadata = {
      timespan: [
        {
          start: '-INF',
          end: '+INF',
          field: [
            {
              name: 'item_slug',
              value: [
                {
                  value: data?.slug,
                },
              ],
            },
          ],
        },
      ],
    }

    const conformRequestDocument = {
      metadata: metadata,
      conform: conform,
    }

    const queryParams = { tag: ['original'] }

    // wait for the job to finish
    const trimRequest = await sendTrimRequest({
      conformRequestDocument,
      queryParams,
    })
    setIsOpen(false)
    setButtonLabel('Close')
    setProgressTitle('Trimming ...')
    setCurrentProgress(0)
    setProgressMessage('Please wait while the file is being trimmed')
    setShowProgress(true)
    await handleJobProcessing(trimRequest.jobDocument.jobId, 'trim')
  }

  const InputMetadata = (props: MetadataProps) => {
    return (
      <div>
        <div className="flex flex-row w-full justify-center mt-4">
          <label
            htmlFor={`${props.label}-feild`}
            className="text-xs text-gray-500 dark:text-grayDark-500 pt-4 mr-2"
          >
            {props.label}
          </label>
          <input
            type="text"
            id={`${props.label}-feild`}
            className="form-input w-[293px] h-[32px] pb-0 pl-0 text-sm font-semibold text-gray-700 bg-white dark:bg-grayDark-100 border-0 border-b-[1px] border-b-gray-400 dark:border-b-grayDark-400 dark:text-grayDark-800 focus:outline-none focus:ring-0 focus:border-b-gray-400"
            placeholder=""
            autoFocus
            {...register(props.name ?? '')}
          />
        </div>
        {errors.title && (
          <div className="mb-3 text-normal text-red-500">
            {props.errors[props.name ?? ''].message}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <MoreVertical className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute right-0 w-56 z-10 origin-top-right divide-y divide-gray-100 dark:divide-grayDark-50 rounded-md bg-gray-50 dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="px-1 py-1 ">
              <Menu.Item>
                <div className="divide-y">
                  <div className="cursor-pointer pb-1">
                    <a
                      type="button"
                      onClick={() => setIsOpen(true)}
                      className="text-black-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-200 dark:hover:bg-grayDark-400 hover:text-black dark:hover:text-white"
                    >
                      <div className="flex dark:text-white">
                        <span>
                          <TrimVideo className="w-5 h-5 text-black-600 dark:text-white" />
                        </span>
                        <label className="pl-2 cursor-pointer">
                          Trim Video
                        </label>
                      </div>
                    </a>
                  </div>
                  <div className="cursor-pointer pt-1 pb-1">
                    <a
                      type="button"
                      onClick={() => downloadImage()}
                      className="text-black-900 dark:text-white group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-200 dark:hover:bg-grayDark-400 hover:text-black dark:hover:text-white"
                    >
                      <div className="flex">
                        <span>
                          <DownloadItem className="w-5 h-5 text-black-600 dark:text-white" />
                        </span>
                        <label className="pl-2 cursor-pointer">
                          Download Image
                        </label>
                      </div>
                    </a>
                  </div>
                  <div className="cursor-pointer pt-1 ">
                    <a
                      type="button"
                      onClick={sendToDMV}
                      className="text-black-900 dark:text-white group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-200 dark:hover:bg-grayDark-400 hover:text-black dark:hover:text-white"
                    >
                      <div className="flex">
                        <span>
                          <AddToDMV className="w-5 h-5 text-black-600 dark:text-white" />
                        </span>
                        <label className="pl-2 cursor-pointer">
                          Send to DMV
                        </label>
                      </div>
                    </a>
                  </div>
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <ModalProgressDialog
        currentProgress={currentProgress}
        total={1}
        show={showProgress}
        title={progressTitle}
        message={progressMessage}
        onCancel={() => onCloseDialog()}
        buttonLabel={buttonLabel}
      />

      <Dialog
        open={isOpen}
        onClose={() => {}}
        as="div"
        className={
          'fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-opacity-30'
        }
      >
        <div className="flex flex-col bg-white text-black dark:bg-grayDark-100 dark:text-white shadow-lg w-[512px] h-[248px] py-8 px-4 text-center rounded-lg">
          <Dialog.Overlay />

          <Dialog.Title className="text-gray-700 dark:text-grayDark-700 text-lg font-semibold">
            Trim Video
          </Dialog.Title>
          <Dialog.Description className="text-sm mt-5 text-gray-600 dark:text-grayDark-600 ">
            This action will create a new Item
          </Dialog.Description>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputMetadata
              label="Slug"
              value="New slug"
              name="slug"
              type="text"
            />

            <div className="grid grid-cols-2 place-content-stretch w-full mt-5">
              <button
                type="submit"
                className="inline-flex font-semibold justify-center h-8 border-2 border-red-900 dark:border-redDark-900 shadow-sm m-3 bg-white dark:bg-grayDark-100 text-lg text-red-900 dark:text-redDark-900 hover:bg-gray-50 outline-none rounded-full focus:outline-none"
              >
                Trim
              </button>
              <button
                className="inline-flex font-semibold justify-center h-8 border-2 border-gray-800 dark:border-grayDark-800 shadow-sm m-3 bg-white dark:bg-grayDark-100 text-lg text-gray-800 dark:text-grayDark-800 hover:bg-gray-50 outline-none rounded-full focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  )
}

export default ItemActionMenu
