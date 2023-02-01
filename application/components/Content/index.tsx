import { ReactNode } from 'react'

interface InputProps {
  /** Contents of component */
  children: ReactNode
}

const Content = ({ children }: InputProps) => {
  return (
    <div className="bg-gray-200 dark:bg-grayDark-200 p-5 w-full">
      {children}
    </div>
  )
}

export default Content
