import { VideoPlayer, VideoSeekBar } from '@vidispine/vdt-videojs-react'
import { getShapeMediaType, filterShapeSource } from '@vidispine/vdt-js'
import { createRef } from 'react'
import PlayerControls from 'components/Player/Controls'
import { ItemType } from '@vidispine/types'
import Waveform from 'components/Player/Waveform'

const AUDIO = 'AUDIO'
const VIDEO = 'VIDEO'

interface InputProps {
  /** ItemType to be displayed */
  itemType: ItemType

  /** Loading indicator */
  isLoading: boolean

  /** Id of selected item */
  itemId: string | string[] | undefined
}

const ItemPlayer = ({ itemType, isLoading, itemId }: InputProps) => {
  const ref = createRef()
  const playerSeekBarRef = createRef()
  if (isLoading) {
    return (
      <>
        <div>
          <div className="w-full pt-[59%] bg-gray-300 dark:bg-gray-600"></div>
          <div className="w-full bg-gray-300 dark:bg-gray-600 mt-3 py-5"></div>
        </div>
      </>
    )
  }

  let source
  const filteredShape = filterShapeSource(itemType)
  if (filteredShape.length > 0) {
    ;[source] = filteredShape
  }

  let mediaType
  if (source && filteredShape.length > 0) {
    mediaType = getShapeMediaType(source.shape)
  }

  if (mediaType !== VIDEO && mediaType !== AUDIO) {
    return <></>
  }

  const playerArgs = {
    sources: [
      {
        src: source.src,
        type: source.type,
        label: source.shape.originalFilename,
      },
    ],
    posterUrl: itemType.thumbnails?.uri ? itemType.thumbnails?.uri[0] : null,
    controls: false,
  }

  return (
    <div className="w-full">
      <div className="media-player min-w-full w-auto h-auto">
        <VideoPlayer
          itemType={itemType}
          {...playerArgs}
          ref={ref}
          videoEl={{
            current: '[Circular]',
          }}
          videoPlayerProps={{
            controlsBelowPlayer: true,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onScreenshotSuccess: (resp: any) => console.log('resp', resp),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onScreenshotError: (err: any) => console.log('resp', err),
          }}
        />
      </div>
      <VideoSeekBar player={ref} ref={playerSeekBarRef} />
      <PlayerControls
        player={ref}
        playerSeekBarRef={playerSeekBarRef}
        itemType={itemType}
      />
      <Waveform Id={itemId} />
    </div>
  )
}

export default ItemPlayer
