interface TimeProps {
  hours: number
  minutes: number
  seconds: number
  frame: number
}

export const padZeroesLeft = (value: number, numberOfZeroes?: number) => {
  if (!value) return '00'

  return value.toString().padStart(numberOfZeroes || 2, '0')
}

const pad = (num: string, size: number) => {
  num = num.toString()
  while (num.length < size) num = '0' + num
  return num
}

export const formatMilliseconds = (currentTime: TimeProps) => {
  if (!currentTime) return '00:00:00:00'

  let time = `${padZeroesLeft(currentTime?.hours)}:${padZeroesLeft(
    currentTime?.minutes,
  )}:${padZeroesLeft(currentTime?.seconds)}.`

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let milliseconds = ((1000 / 30) * currentTime?.frame).toFixed() as any

  time += pad((Math.floor(milliseconds / 40) * 40).toString(), 3)
  return time
}
