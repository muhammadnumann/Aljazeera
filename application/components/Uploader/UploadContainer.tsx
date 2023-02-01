import React, { forwardRef, useCallback, useState } from 'react'
import { ButtonProps } from '@rpldy/upload-button'
import {
  BatchItem,
  useBatchAddListener,
  useRequestPreSend,
} from '@rpldy/uploady'
import { useChunkStartListener } from '@rpldy/chunked-uploady'
import UploadDropZone from '@rpldy/upload-drop-zone'
import UploadPreview from './UploadPreview'
import { v4 as uuidv4 } from 'uuid'
import { VIDISPINE_TOKEN_COOKIE } from 'utils/CookieUtils'
import { useCookies } from 'react-cookie'

const UploadContainer = forwardRef((props: ButtonProps) => {
  const [token] = useCookies([VIDISPINE_TOKEN_COOKIE])

  const { onClick, ...buttonProps } = props

  const [item, setItem] = useState({} as BatchItem)
  const [showDropZone, setshowDropZone] = useState(true)

  const onZoneClick = useCallback(
    (e: React.MouseEvent) => {
      if (onClick) {
        onClick(e)
      }
    },
    [onClick],
  )

  useRequestPreSend(({ items }) => {
    const transferId = uuidv4()
    return {
      options: {
        destination: {
          url: `/api/import/raw?transferId=${transferId}&filename=${items[0].file.name}&tag=original`,
          headers: {
            Size: items[0].file.size,
            Authorization: `Token ${token['VIDISPINE-TOKEN']}`,
          },
        },
      },
    }
  })

  useBatchAddListener((batch) => {
    console.info('batch', batch)
    setItem(batch.items[0])
    setshowDropZone(false)
  })

  useChunkStartListener(({ chunk, sendOptions }) => {
    return {
      sendOptions: {
        method: sendOptions.method,
        paramName: sendOptions.paramName,
        headers: {
          Index: chunk.start,
        },
      },
    }
  })

  return (
    <>
      {showDropZone && (
        <UploadDropZone
          {...buttonProps}
          className={
            'w-[400px] h-[200px] bg-gray-200 flex items-center justify-center rounded'
          }
          onDragOverClassName="bg-gray-600"
          extraProps={{ onClick: onZoneClick }}
        >
          <span>Drop File or click here...</span>
        </UploadDropZone>
      )}
      {!showDropZone && <UploadPreview item={item} />}
    </>
  )
})

UploadContainer.displayName = 'UploadContainer'

export default UploadContainer
