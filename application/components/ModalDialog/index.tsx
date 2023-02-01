import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface InputProps {
  show: boolean
  title: string
  description: string
  ok: string
  cancel?: string
  okDisabled: boolean
  okClassName: string
  cancelClassName?: string
  onClose: () => void
  onClick: () => void
  //onClose(event: any): void
}

const ModalDialog = (props: InputProps) => {
  return (
    <>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.onClose}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {props.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{props.description}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className={props.okClassName}
                      onClick={props.onClick}
                      disabled={props.okDisabled}
                    >
                      {props.ok}
                    </button>
                    {props.cancel && (
                      <button
                        type="button"
                        className={props.cancelClassName}
                        onClick={props.onClose}
                      >
                        {props.cancel}
                      </button>
                    )}
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

export default ModalDialog
