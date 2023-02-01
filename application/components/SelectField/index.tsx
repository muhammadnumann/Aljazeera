import React, { useRef } from 'react'
import { HTMLElementsProps } from 'types/HTMLElementsProps'

interface HTMLSelectProps extends HTMLElementsProps {
  options: { value: string; label: string }[]
}

const SelectField = (props: HTMLSelectProps) => {
  const inputRef =
    useRef<HTMLElement>() as React.MutableRefObject<HTMLSelectElement>

  const register = props.register?.(props.id ?? '', {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) =>
      props.onChange && props.onChange(event.target.value),
  })

  return (
    <div className={`${props.className} ${props.wrapperClassName}`}>
      <div className="inline-block relative w-full">
        <select
          id={props.id}
          ref={inputRef}
          defaultValue={props.defaultValue}
          {...register}
          className={`shadow appearance-none border rounded-lg w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
          ${
            props.error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-200'
          }
          `}
        >
          <option value="">{`Select ${props.id}`}</option>
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {!!props.error && props.errorText && (
        <p className="text-xs pl-2 text-red mb-4">{props.errorText}</p>
      )}
    </div>
  )
}

export default SelectField
