import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import UploadContainer from './UploadContainer'
import { Close, DataUpload } from 'components/Icons'
import { useAbortAll } from '@rpldy/uploady'
import { asUploadButton } from '@rpldy/upload-button'

const UploadModal = () => {
  let [isOpen, setIsOpen] = useState(false)
  const abortAll = useAbortAll()

  const UploadContainerZone = asUploadButton(UploadContainer)

  function closeModal() {
    abortAll()
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
      <div className="flex">
        <button
          className="flex flex-row cursor-pointer p-3"
          type="button"
          onClick={openModal}
        >
          <div className={'pl-2 text-2xl text-gray-700 dark:text-grayDark-700'}>
            <DataUpload className={'h-6 w-6'} />
          </div>
          <span
            className={
              'pl-5 font-normal leading-[24px] text-[16px] text-gray-900 dark:text-grayDark-900'
            }
          >
            Upload Video
          </span>
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-grayDark-200 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-grayDark-900"
                  >
                    Upload Video
                  </Dialog.Title>
                  <div className="mt-2">
                    <div>
                      <UploadContainerZone />
                      <div className="mt-4 flex justify-end">
                        <button
                          type="button"
                          className="absolute right-0 top-0 mt-4 mr-4 text-gray-600 dark:text-grayDark-600 hover:text-gray-800"
                          onClick={closeModal}
                        >
                          <Close className={'h-6 w-6'} />
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default UploadModal
