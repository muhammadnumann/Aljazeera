import BackWordIcon from 'components/Icons/BackWordIcon'
import ForwardIcon from 'components/Icons/forwardIcon'
import FullScreenIcon from 'components/Icons/FullScreenIcon'
import JumpToMarkInIcon from 'components/Icons/JumpToMarkInIcon'
import JumpToMarkOutIcon from 'components/Icons/JumpToMarkOutIcon'
import MarkInIcon from 'components/Icons/MarkInIcon'
import MarkOutIcon from 'components/Icons/MarkOutIcon'
import PlayIcon from 'components/Icons/playIcon'
import PauseIcon from 'components/Icons/puaseIcon'
import { useEffect, useState } from 'react'
import UnMuteIcon from 'components/Icons/UnMuteIcon'
import MuteIcon from 'components/Icons/MuteIcon'
import { useAmplitude } from 'utils/hooks/useAmplitude'
import VideoCurrentTime from '../VideoCurrentTime'
import { ItemType } from '@vidispine/types'
import { parseShapeType } from '@vidispine/vdt-js'
import { padZeroesLeft } from 'utils/StringUtils'
import ItemActionMenu from '../../ItemActionMenu'

interface InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  player: any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  playerSeekBarRef: any

  itemType: ItemType
}

interface TimeProps {
  hours: number
  minutes: number
  seconds: number
  frame: number
}

const formattedTime = (currentTime?: TimeProps) => {
  if (!currentTime) return '00:00:00:00'

  return `${padZeroesLeft(currentTime?.hours)}:${padZeroesLeft(
    currentTime?.minutes,
  )}:${padZeroesLeft(currentTime?.seconds)}:${padZeroesLeft(
    currentTime?.frame,
  )}`
}

const getShape = (shape: Array<object>) => {
  return shape.length && shape.length > 0 ? shape[0] : null
}

const PlayerControls = ({ player, playerSeekBarRef, itemType }: InputProps) => {
  const [instrument] = useAmplitude()
  const [playing, setPlaying] = useState(false)
  const [mute, setMute] = useState(false)

  const [seekIn, setSeekIn] = useState<TimeProps>()
  const [seekOut, setSeekOut] = useState<TimeProps>()     

  const shapeType = itemType.shape ? getShape(itemType.shape) : null
  const shapeData = shapeType ? parseShapeType(shapeType) : null

  useEffect(() => {
    player?.current?.player?.videojs?.on('play', () => {
      setPlaying(true)
    })

    player?.current?.player?.videojs?.on('pause', () => {
      setPlaying(false)
    })

    player?.current?.player?.videojs?.on('stop', () => {
      setPlaying(false)
    })
  }, [player, playerSeekBarRef])
  return (
    <>
      <div className="flex items-center justify-between w-full dark:text-white text-black">
        <VideoCurrentTime player={player} />

        {/* MarkIN button */}
        <button
          type="button"
          className="group relative flex flex-shrink-0 items-center justify-center rounded-full  focus:outline-none 6-7 w-6 ml-4"
          onClick={() => {
            instrument('Mark In Video')
            player.current.player.pause()
            playerSeekBarRef.current.seekBar.in =
              player.current.player.videojs.currentTime()
            setSeekIn(player?.current?.player?.smpte)
          }}
        >
          <div className="absolute -inset-3"></div>
          <MarkInIcon />
        </button>
        {formattedTime(seekIn)}

        <div className="flex items-center justify-evenly w-7/12">
          {/* Jump to MarkIN button */}
          <button
            type="button"
            className="group relative flex flex-shrink-0 items-center justify-center rounded-full  focus:outline-none 6-7 w-6 "
            onClick={() => {
              instrument('Jump To Mark In Video')
              player.current.player.pause()
              player.current.player.seekTo(playerSeekBarRef.current.seekBar.in)
            }}
          >
            <div className="absolute -inset-3"></div>
            <JumpToMarkInIcon />
          </button>

          {/* FrameByFrame backward button */}
          <button
            type="button"
            className="group relative flex flex-shrink-0 items-center justify-center rounded-full  focus:outline-none 6-7 w-6 "
            onClick={() => {
              instrument('Frame By Frame Backward Video')
              player.current.player.pause()
              player.current.player.frameBackward()
            }}
          >
            <div className="absolute -inset-3"></div>
            <BackWordIcon />
          </button>

          {/* PLAY/PAUSE button */}
          <button
            type="button"
            className="control play-pause group relative flex flex-shrink-0 items-center justify-center rounded-full outline-none w-10"
            onClick={() => {
              instrument(`${playing ? 'Pause' : 'Play'} Video`)
              player.current.player.togglePlayback()
              setPlaying(!playing)
            }}
          >
            <div className=""></div>
            <span className="sr-only">{!playing ? 'Pause' : 'Play'}</span>
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>

          {/* FrameByFrame forward button */}
          <button
            type="button"
            className="group relative flex flex-shrink-0 items-center justify-center rounded-full  focus:outline-none"
            onClick={() => {
              instrument('Frame By Frame Forward Video')
              player.current.player.pause()
              player.current.player.frameForward()
            }}
          >
            <div className="absolute -inset-3"></div>
            <ForwardIcon />
          </button>

          {/* Jump to MarkOUT button */}
          <button
            type="button"
            className="group relative flex flex-shrink-0 items-center justify-center rounded-full  focus:outline-none 6-7 w-6 "
            onClick={() => {
              instrument('Jump to Mark Out Video')
              player.current.player.pause()
              player.current.player.seekTo(playerSeekBarRef.current.seekBar.out)
            }}
          >
            <div className="absolute -inset-3"></div>
            <JumpToMarkOutIcon />
          </button>
        </div>
        {formattedTime(seekOut)}
        {/* MarkOUTbutton */}
        <button
          type="button"
          className="group relative flex flex-shrink-0 items-center justify-center rounded-full  focus:outline-none 6-7 w-6 "
          onClick={() => {
            instrument('Mark Out Video')
            player.current.player.pause()
            playerSeekBarRef.current.seekBar.out =
              player.current.player.videojs.currentTime()
            setSeekOut(player?.current?.player?.smpte)
          }}
        >
          <div className="absolute -inset-3"></div>
          <MarkOutIcon />
        </button>
        <div className="flex items-center gap-5 text-gray-800 dark:text-grayDark-800">
          <div className="flex items-center gap-3 group relative">
            <div className="absolute hidden items-center group-hover:flex -left-5 -top-16 w-24 h-8 bg-gray-500 dark:bg-grayDark-75 px-2 mb-1 rounded-3xl rotate-90 z-10">
              <input
                id="Volume-range"
                type="range"
                className="w-full h-1 bg-gray-50 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-50"
                min={0}
                step={1}
                max={100}
              />
            </div>

            {/* Volume */}
            <button
              type="button"
              onClick={() => {
                instrument('Toggle Mute')
                player.current.player.toggleMute()
                setMute(player.current.player.videoEl.muted)
              }}
            >
              {/* Toggle Mute */}
              {mute ? <UnMuteIcon /> : <MuteIcon />}
            </button>
          </div>

          {/* Total Duration */}
          {shapeData?.smpte}

          {/* Full Screen Button */}
          <button
            type="button"
            onClick={() => {
              instrument('Toggle Video To Full Screen')
              player.current.player.toggleFullscreen()
            }}
          >
            <FullScreenIcon />
          </button>

          {/* More Button */}
          <ItemActionMenu
            playerRef={player}
            playerSeekBarRef={playerSeekBarRef}
          />
        </div>
      </div>
    </>
  )
}

export default PlayerControls
