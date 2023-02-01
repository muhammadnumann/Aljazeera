import { UseFormRegister } from 'react-hook-form'

export interface HTMLElementsProps {
  /** Id of HTML element */
  id?: string

  /** Type of the input field */
  type?: 'text' | 'password'

  /** Wrapper class around the input field */
  wrapperClassName?: string

  /** Placeholder inside the input field */
  placeholder?: string

  /** Indicates if the input has an error */
  error?: boolean

  /** Message to be displayed when the input field has an error */
  errorText?: string

  /** Indicates if the input is mandatory */
  required?: boolean

  /** Contents of the input field */
  children?: React.ReactNode

  /** Text to be displayed inside the button of the input field */
  buttonLabel?: string

  /** Event triggered when user writes down on the field */
  onChange?: (event: string) => void

  /** Event triggered when user clicks on button inside of the input field */
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  onButtonClicked?(param?: any): any

  /** Css classes of the container */
  className?: string

  /** Default value of input */
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  defaultValue?: any

  /** Size of the input */
  size?: 'small' | 'medium' | 'large'

  //For Input To get data
  testId?: string
  //Input CSs
  InputClassName?: string
  // Label String
  title?: string

  /** Ref of the input */
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  register?: UseFormRegister<any>
}
