import { ReactNode } from 'react'

interface InputProps {
  /** Contents to be displayed*/
  children: ReactNode

  /** The type/size of the text */
  type?: 'title'
}

const Typography = (props: InputProps) => {
  return (
    <>
      {props.type === 'title' && (
        <h1 className="font-medium text-[20px] mt-8 leading-[32px] text-gray-900 dark:text-grayDark-800">
          {props.children}
        </h1>
      )}
    </>
  )
}

export default Typography
