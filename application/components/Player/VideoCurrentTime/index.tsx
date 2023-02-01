import { useEffect, useState } from 'react'
import { padZeroesLeft } from 'utils/StringUtils'

interface VideoCurrentTimeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  player: any
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

const VideoCurrentTime = ({ player }: VideoCurrentTimeProps) => {
  const [currentTime, setCurrentTime] = useState<TimeProps>()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(player?.current?.player?.smpte)
    }, 1)

    return () => clearInterval(interval)
  }, [player, player?.current?.player?.smpte])

  return (
    <div className="text-gray-800 dark:text-grayDark-800">
      {formattedTime(currentTime)}
    </div>
  )
}

export default VideoCurrentTime
