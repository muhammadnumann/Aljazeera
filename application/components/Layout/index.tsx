import { ReactNode, useEffect, useState } from 'react'
import useWindowSize from 'utils/hooks/useWindowSize'
import Content from 'components/Content'
import Sidebar from 'components/Sidebar'
import Topbar from 'components/Topbar'

interface InputProps {
  /** Contents of layout */
  children: ReactNode
}

const Layout = ({ children }: InputProps) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true)
  const { width } = useWindowSize()

  useEffect(() => {
    setShowSidebar(!(width && width <= 740))
  }, [width])

  return (
    <div>
      <div>
        <Topbar onClickOnMenuItem={() => setShowSidebar(!showSidebar)} />
      </div>
      <div className="flex flex-row h-full min-h-screen pt-9">
        <div className="bg-gray-100 dark:bg-grayDark-100">
          <Sidebar show={showSidebar} />
        </div>
        <Content>{children}</Content>
      </div>
    </div>
  )
}

export default Layout
