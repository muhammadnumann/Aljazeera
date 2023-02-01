import React, { useRef } from 'react'
import { HTMLElementsProps } from 'types/HTMLElementsProps'

const getSize = (size: string | undefined) => {
  if (size === 'large') return 'h-14'
  else if (size === 'medium') return 'h-12'

  return 'h-9'
}

const TextField = (props: HTMLElementsProps) => {
  const inputRef =
    useRef<HTMLElement>() as React.MutableRefObject<HTMLInputElement>

  const register = props.register?.(props.id ?? '', {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      props.onChange && props.onChange(event.target.value),
  })

  return (
    <div className={`${props.className} ${props.wrapperClassName}`}>
      <div>
        <div>
          <div className="relative">
            <div className="absolute top-4 left-3">
              <i className="fa fa-search text-gray-400 z-20 hover:text-gray-400"></i>
            </div>

            <input
              data-testid={props.testId}
              className={`block px-2.5 pb-2.5 pt-3 text-sm border-1 border-gray-300 appearance-none  dark:border-gray-600 focus:ring-0 focus:border-blue-600 peer w-full pl-2 rounded-lg z-0 focus:shadow focus:outline-none dark:text-grayDark-800 text-gray-800 bg-gray-50 dark:bg-gray-700
                ${
                  props.error
                    ? 'border-red-500 focus:border-red-500 focu`s:ring-red-500'
                    : 'border-gray-200'
                }
              ${getSize(props.size)}
              ${props.InputClassName}
            `}
              placeholder={props.placeholder}
              id={props.id}
              ref={inputRef}
              type={props.type || 'text'}
              defaultValue={props.defaultValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                props.onChange && props.onChange(event.target.value)
              }
              {...register}
            />
            <label
              htmlFor={props.id}
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-blue-600 dark:peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              {props.title}
            </label>
            {props.onButtonClicked && (
              <div
                className={`absolute right-2 ${
                  props.size === 'large' ? 'top-4' : 'top-0'
                }`}
              >
                <button
                  onClick={() =>
                    props.onButtonClicked &&
                    props.onButtonClicked(
                      inputRef.current && inputRef.current.value,
                    )
                  }
                  className={`${
                    props.size === 'large' ? 'h-10 w-10' : 'h-7 w-7'
                  } text-2xl text-black rounded-full hover:bg-gray-200`}
                >
                  {props.buttonLabel}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {!!props.error && props.errorText && (
        <p className="text-xs pl-2 text-red mb-4">{props.errorText}</p>
      )}
    </div>
  )
}

export default TextField
