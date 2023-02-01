import { useEffect, useState } from 'react'

interface InputProps {
  width: number | undefined
  height: number | undefined
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<InputProps>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)

      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  return windowSize
}

export default useWindowSize
