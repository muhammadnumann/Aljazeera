import React, { useRef } from 'react'
import { HTMLElementsProps } from 'types/HTMLElementsProps'

const TextAreaField = (props: HTMLElementsProps) => {
  const inputRef =
    useRef<HTMLElement>() as React.MutableRefObject<HTMLTextAreaElement>
  const register = props.register?.(props.id ?? '', {
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      props.onChange && props.onChange(event.target.value),
  })
  return (
    <div className={`${props.className} ${props.wrapperClassName}`}>
      <textarea
        id={props.id}
        className="text-sm border-1 border-gray-300 appearance-none  dark:border-gray-600 focus:ring-0 focus:border-blue-600 peer w-full pl-2 rounded-lg z-0 focus:shadow focus:outline-none dark:text-grayDark-800 text-gray-800 bg-gray-50 dark:bg-gray-700"
        placeholder={props.placeholder}
        ref={inputRef}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          props.onChange && props.onChange(event.target.value)
        }
        defaultValue={props.defaultValue}
        {...register}
      />
      {props.title}
    </div>
  )
}

export default TextAreaField
