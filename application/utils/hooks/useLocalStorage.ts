import { useEffect, useState } from 'react'

const getStorageValue = (key: string, defaultValue: string) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = localStorage.getItem(key) as string
    const initial = JSON.parse(saved)
    return initial || defaultValue
  }
}

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
