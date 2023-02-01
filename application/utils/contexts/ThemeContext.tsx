import React, {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface ContextProps {
  theme: string
  setTheme: (rawTheme: string) => void
}

export const ThemeContext = createContext({} as ContextProps)

interface ThemeProviderProps {
  initialTheme?: string
  children?: ReactElement | ReactElement[]
}

export const ThemeProvider = ({
  initialTheme,
  children,
}: ThemeProviderProps) => {
  const [colorTheme, setColorTheme] = useLocalStorage('COLOR_THEME', 'light')

  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (typeof colorTheme === 'string') {
        return colorTheme
      }

      const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
      if (userMedia.matches) {
        return 'dark'
      }
    }

    return 'light'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  const setRawTheme = useCallback(
    (rawTheme: string) => {
      const root = window.document.body
      const isDark = rawTheme === 'dark'

      root.classList.remove(isDark ? 'light' : 'dark')
      root.classList.add(rawTheme)

      setColorTheme(rawTheme)
    },
    [setColorTheme],
  )

  if (initialTheme) {
    setRawTheme(initialTheme)
  }

  useEffect(() => {
    setRawTheme(theme)
  }, [theme, setRawTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
