import { MouseEventHandler } from 'react'

interface InputProps {
  onClick?: MouseEventHandler | undefined
  content: string
  slug: string
  truncateContentLength: number
  className: string
}

const MediaCardContent = (props: InputProps) => {
  return (
    <div onClick={props.onClick} className={props.className}>
      <span className="text-gray-800 dark:text-grayDark-800 mb-1 block">
        {props.slug}
      </span>
      <span className="text-gray-700 dark:text-grayDark-700">
        {props.content.substring(0, props.truncateContentLength)}
      </span>
    </div>
  )
}

MediaCardContent.defaultProps = {
  truncateContentLength: 30,
}

export default MediaCardContent
