import React, { useRef } from 'react'
import { HTMLElementsProps } from 'types/HTMLElementsProps'

const CheckboxField = (props: HTMLElementsProps) => {
  const inputRef =
    useRef<HTMLElement>() as React.MutableRefObject<HTMLInputElement>

  const register = props.register?.(props.id ?? '', {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      props.onChange && props.onChange(event.target.value),
  })

  return (
    <div className={`${props.className} ${props.wrapperClassName}`}>
      <div className="inline-block relative w-64">
        <input
          id={props.id}
          type="checkbox"
          ref={inputRef}
          defaultValue={props.defaultValue}
          {...register}
          className="appearance-none checked:bg-blue-500"
        ></input>
      </div>
    </div>
  )
}

export default CheckboxField
