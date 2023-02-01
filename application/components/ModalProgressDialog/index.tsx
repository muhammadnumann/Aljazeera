import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

const defaultMessage = `Files you've downloaded are automatically saved in the Downloads folder. This folder is usually located on the C drive (for example, C:\\Users\\[your name]\\Downloads).`
const buttonLabel = 'Cancel'

interface InputProps {
  show: boolean
  title: string
  message?: string
  buttonLabel?: string
  currentProgress: number
  total: number
  onCancel: () => void
}

const ModalProgressDialog = (props: InputProps) => {
  const [percentage, setPercentage] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    if (props.total === 0) {
      setPercentage(0)
    } else {
      setPercentage((100 * props.currentProgress) / props.total)
    }
  }, [props.currentProgress, props.total])

  useEffect(() => {
    setVisible(props.show)
  }, [props.show])

  return (
    <>
      <Transition appear show={visible} as={Fragment}>
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
            <div className="fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto bg-black/30">
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-gray-100 dark:bg-grayDark-100 p-6 text-left align-middle transition-all shadow-sm shadow-gray-100/30">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-normal leading-6 text-gray-600 dark:text-grayDark-600"
                  >
                    <div className="flex justify-between ">
                      <div>{props.title}</div>
                      <div>{Math.floor(percentage)}%</div>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-5">
                      <div
                        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                        style={{ width: `${percentage}%` }}
                      >
                        &nbsp;
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-grayDark-600 text-center font-normal pt-5">
                      {props.message || defaultMessage}
                    </p>
                  </div>

                  <button
                    className="w-full inline-flex justify-center border border-gray-300 shadow-sm px-4 py-2 mt-5 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 outline-none rounded-full focus:outline-none "
                    onClick={() => {
                      props.onCancel()
                      setVisible(false)
                    }}
                  >
                    {props.buttonLabel || buttonLabel}
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModalProgressDialog
