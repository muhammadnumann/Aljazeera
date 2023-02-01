import React from 'react'

type IconButtonProps = {
  active?: boolean
  children?: JSX.Element
  onClick: () => void
}

const IconButton = ({ active, children, onClick }: IconButtonProps) => {
  return (
    <div
      className={`pt-2 pl-2 pr-2 m-1 rounded-full ${
        active ? ' bg-gray-700 dark:bg-grayDark-700' : ''
      }`}
    >
      <button
        onClick={onClick}
        className={`bg-grey-light hover:bg-grey font-bold rounded inline-flex items-center ${
          active
            ? ' fill-gray-100 text-gray-100 dark:fill-grayDark-100 dark:text-grayDark-100'
            : ''
        }`}
      >
        {children}
      </button>
    </div>
  )
}

export default IconButton
