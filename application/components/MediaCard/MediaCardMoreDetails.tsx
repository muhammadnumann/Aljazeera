import {
  MoreVertical,
  DeleteOutline,
  DownloadFromCloud,
} from 'components/Icons'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import ModalDialog from 'components/ModalDialog'
import { item as ItemApi } from '@vidispine/vdt-api'
import { ItemType } from '@vidispine/types'
import ModalProgressDialog from 'components/ModalProgressDialog'
import { getDownloadLink } from 'utils/ItemUtils'

interface InputProps {
  content: string
  itemType: ItemType
  onRemoveItemClick: () => void
}

const CHUNK_SIZE = 26214400

const MediaCardMoreDetails = (props: InputProps) => {
  const [currentChunk, setCurrentChunk] = useState(0)
  const [totalChunks, setTotalChunks] = useState(0)
  const [showProgress, setShowProgress] = useState(false)
  const isCanceled = useRef(false)

  let currentChunkIndex = 0

  const downloadChunks = async (
    url: string,
    contentLength: number,
    index: number,
  ) => {
    const headers = new Headers()
    headers.append(
      'Range',
      `bytes=${index * CHUNK_SIZE}-${index * CHUNK_SIZE + CHUNK_SIZE - 1}`,
    )

    let response = await fetch(url, { headers })
    const roundedUpTotalChunks = Math.ceil(contentLength / CHUNK_SIZE)
    setCurrentChunk(++currentChunkIndex)
    setTotalChunks(roundedUpTotalChunks)

    return response.blob()
  }

  const multiThreadedDownload = async (item: ItemType) => {
    const [url, mime, size, filename, originalFilename] = await getDownloadLink(
      item.id!,
    )
    setShowProgress(true)

    let totalIndexes = Math.ceil(size / CHUNK_SIZE)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let promises: any = []

    for (let index = 0; index < totalIndexes; index++) {
      if (isCanceled.current === true) {
        break
      }

      promises.push(await downloadChunks(url, size, index))
    }

    if (isCanceled.current === true) {
      isCanceled.current = false
      setShowProgress(false)
      setCurrentChunk(0)
      setTotalChunks(0)

      return
    }

    const arrayOfPromises = await Promise.all(promises)

    setShowProgress(false)
    setCurrentChunk(0)
    setTotalChunks(0)

    const data = arrayOfPromises.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (previousItem, currentItem): any => {
        return new Blob([previousItem, currentItem], { type: mime })
      },
    )

    const blobUrl = URL.createObjectURL(data)
    const a = document.createElement('a')
    a.download = originalFilename || filename
    a.href = blobUrl
    a.click()
    URL.revokeObjectURL(blobUrl)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const onRemoveItem = async (value: string) => {
    const response = await ItemApi.removeItem({ itemId: value })
    setIsModalOpen(false)
    if (response.status === 200) {
      props.onRemoveItemClick()
    }
  }

  return (
    <>
      <div className="absolute top-16 w-64 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 py-1 text-sm font-medium text-gray-800 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <MoreVertical
                className="h-5 w-5 fill-gray-800 dark:fill-white"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 origin-top-right divide-y divide-gray-100 rounded-md  bg-gray-50 dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-gray-200 dark:bg-gray-600 text-black-600 dark:text-white hover:text-gray-900'
                          : 'text-black-900 dark:text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => multiThreadedDownload(props.itemType)}
                    >
                      <DownloadFromCloud
                        className="mr-2 h-5 w-5 fill-black-600 dark:fill-white hover:fill-gray-900"
                        aria-hidden="true"
                      />
                      Download Item
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-gray-200 dark:bg-gray-600 text-black-600 dark:text-white hover:text-gray-900'
                          : 'text-black-900 dark:text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={openModal}
                    >
                      <DeleteOutline
                        className="mr-2 h-5 w-5 fill-black-600 dark:fill-white hover:fill-gray-900"
                        aria-hidden="true"
                      />
                      Remove Item
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <ModalDialog
        show={isModalOpen}
        title="Remove Item"
        description={`Are you sure you want to remove the item: "${props.content}" ? `}
        ok="Yes"
        cancel="No"
        okDisabled={false}
        onClick={() => onRemoveItem(props.itemType.id ?? '')}
        onClose={closeModal}
        okClassName="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-black-900 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        cancelClassName="ml-2 inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-black-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      />

      <ModalProgressDialog
        currentProgress={currentChunk}
        total={totalChunks}
        show={showProgress}
        title={`Downloading ${props.itemType.id} ...`}
        onCancel={() => (isCanceled.current = true)}
      />
    </>
  )
}

export default MediaCardMoreDetails
