import { useUploady, BatchItem, useItemProgressListener } from '@rpldy/uploady'
import { Progress } from 'antd'
import { filesize } from 'filesize'
import { memo, useState } from 'react'

interface UploadPreviewProps {
  item: BatchItem
}

const UploadPreview = ({ item }: UploadPreviewProps) => {
  const { processPending } = useUploady()

  const [showProgressBar, setShowProgressBar] = useState(false)
  const [showButton, setShowButton] = useState(true)

  const startUpload = () => {
    setShowButton(false)
    setShowProgressBar(true)
    processPending()
  }

  const ItemProgress = memo(() => {
    const { completed } = useItemProgressListener(item.id) || { completed: 0 }
    return <Progress percent={Math.trunc(completed)} />
  })

  const fileSize = String(filesize(item.file.size, { base: 10 }))

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <div className="flex flex-row items-center justify-start mb-3">
        <span>
          <b>Filename:</b> {item.file.name}
        </span>
      </div>
      <div className="flex flex-row items-center justify-start mb-3">
        <span>
          <b>File Size:</b> {fileSize}
        </span>
      </div>
      {showProgressBar && <ItemProgress />}
      {showButton && (
        <button
          className={
            'float-right text-white bg-green-1500 w-40 py-2 px-3 rounded-lg'
          }
          onClick={startUpload}
        >
          Start Upload
        </button>
      )}
    </div>
  )
}

UploadPreview.displayName = 'UploadPreview'

export default UploadPreview
