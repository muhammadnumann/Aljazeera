import ChunkedUploady from '@rpldy/chunked-uploady'
import React from 'react'
import UploadModal from './UploadModal'

const Uploader = () => {
  return (
    <ChunkedUploady
      noPortal={true}
      chunkSize={5120000}
      autoUpload={false}
      chunked={true}
      grouped={false}
      sendWithFormData={false}
      method="POST"
      destination={{
        headers: {
          'Content-Type': 'application/octet-stream',
        },
      }}
    >
      <UploadModal />
    </ChunkedUploady>
  )
}

export default Uploader
