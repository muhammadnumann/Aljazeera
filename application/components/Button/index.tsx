interface InputProps {
  /** Type of button */
  type?: 'submit' | 'reset' | 'button'

  /** Wrapper class name */
  className?: string

  /** Disable the button during processing to avoid double clicks */
  processing?: boolean

  /** Contents of button */
  children: JSX.Element | JSX.Element[] | string | string[]

  /** Event triggered when user clicks */
  onClick?: () => void
}

const Button = (props: InputProps) => {
  return (
    <div className="py-2">
      <button
        data-testid={props.children}
        onClick={() => props.onClick && props.onClick()}
        type={props.type}
        className={
          `inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs 
                text-white tracking-widest transition ease-in-out duration-150 
                ${props.processing && 'opacity-25'} ` + props.className
        }
        disabled={props.processing}
      >
        {props.children}
      </button>
    </div>
  )
}

export default Button
Button.defaultProps = {
  type: 'submit',
  processing: false,
}
