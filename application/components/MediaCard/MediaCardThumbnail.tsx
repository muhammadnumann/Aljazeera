import React, {
  MouseEvent,
  MouseEventHandler,
  useContext,
  useRef,
  useState,
} from 'react'
import AppContext from 'utils/contexts/AppContext'
import { ThumbnailType } from '../../types'

interface InputProps {
  thumbnail: string
  itemId?: string
  onClick?: MouseEventHandler
  spriteImage?: HTMLImageElement
  thumbnailArray?: Array<ThumbnailType>
}

const MediaCardThumbnail = (props: InputProps) => {
  const context = useContext(AppContext)
  const [scrubPosition, setScrubPosition] = useState(0)
  const [showScrub, setShowScrub] = useState(false)
  const [srcThumbnail, setSrcThumbnail] = useState(
    `${context.serverUrl}${props.thumbnail}`,
  )
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const divThumbnail = useRef<any>()

  const { itemId, spriteImage, thumbnailArray } = props

  const getOffsetLeft = (element: HTMLElement) => {
    try {
      return Math.round(element.getBoundingClientRect().left)
    } catch (error) {
      return 0
    }
  }

  const getMouseElementPosition = (e: MouseEvent<HTMLImageElement>) => {
    const mouseElementPosition = e.clientX - getOffsetLeft(e.currentTarget)
    const elementWidth = e.currentTarget!.offsetWidth
    if (mouseElementPosition < 0) {
      return 0
    }
    if (mouseElementPosition > elementWidth) {
      return elementWidth
    }
    return mouseElementPosition
  }

  const onMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    if (spriteImage && spriteImage.complete) {
      console.info('spriteImage.complete')
      const mouseElementPosition = getMouseElementPosition(e)
      /*
       *   Calculate the thumbnail based on the mouse position
       *   index = (mouse position / ( element width / number of thumbnails))
       */
      // @ts-ignore
      const index = Math.floor(
        mouseElementPosition /
          ((divThumbnail.current ? divThumbnail.current.offsetWidth : 0) /
            thumbnailArray!.length || 1),
      )
      if (!!thumbnailArray && index >= 0 && index < thumbnailArray.length) {
        setX(thumbnailArray[index].x)
        setY(thumbnailArray[index].y)
      }
      setScrubPosition(mouseElementPosition - 1)
    }
  }

  const handleShowScrub = (value: boolean) => () => {
    if (spriteImage && spriteImage.complete) {
      setSrcThumbnail(spriteImage.src)
      setShowScrub(value)
    }
  }

  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer"
      onMouseEnter={handleShowScrub(true)}
      onMouseLeave={handleShowScrub(false)}
      onMouseMove={onMouseMove}
      onClick={props.onClick}
    >
      <div className="flex flex-col items-center justify-center relative">
        <div
          ref={divThumbnail}
          className={
            'rounded-t-lg w-[256px] h-[140px] overflow-hidden relative'
          }
        >
          <img
            alt={`${itemId} thumbnail`}
            className={`rounded-t-lg max-w-none absolute ${
              spriteImage?.complete ? 'invisible' : 'visible'
            }`}
            src={`${context.serverUrl}${props.thumbnail}`}
          />
          <img
            alt={`${itemId} thumbnail`}
            className={`rounded-t-lg max-w-none absolute ${
              spriteImage?.complete ? 'visible' : 'invisible'
            }`}
            style={{
              top: `-${y}px`,
              left: `-${x}px`,
            }}
            src={`${srcThumbnail}`}
          />
        </div>
        {showScrub && (
          <div
            className="absolute h-full w-[2px] bg-gray-200"
            style={{
              left: scrubPosition,
            }}
          />
        )}
      </div>
    </div>
  )
}

export default MediaCardThumbnail
