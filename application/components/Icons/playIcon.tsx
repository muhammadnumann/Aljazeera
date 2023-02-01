import React from 'react'
import { IconProps } from './iconProps'

const PlayIcon = ({ ClassName }: IconProps) => {
  return (
    <svg
      viewBox="0 0 36 36"
      className={`fill-gray-700 dark:fill-gray-400 group-active:fill-gray-500 h-14 ${ClassName}`}
      aria-hidden="true"
      width="36"
      height="36"
    >
      <path d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z" />
    </svg>
  )
}
export default PlayIcon
