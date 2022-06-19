import { createContext, FC, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { ShellGameTheme } from 'styled-components'

import { useLocalStorage } from 'hooks'
import { DarkTheme, LightTheme, THEMES, THEME_STORAGE_KEY } from 'shared'

interface ThemeProviderProps {
  children: ReactNode
}

interface ThemeContextType {
  theme: ShellGameTheme
  handleTheme: (name: string) => void
  themeName: string
}

const INITIAL_STATE: ThemeContextType = {
  theme: LightTheme,
  handleTheme: (name: string) => undefined,
  themeName: THEMES.LIGHT,
}

export const ThemeContext = createContext<ThemeContextType>(INITIAL_STATE)

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage(THEME_STORAGE_KEY, '')

  const [theme, setTheme] = useState<ShellGameTheme>(LightTheme)
  const [themeName, setThemeName] = useState<string>(THEMES.LIGHT)

  useEffect(() => {
    switch (currentTheme) {
      case THEMES.LIGHT:
        setTheme(LightTheme)
        setThemeName(THEMES.LIGHT)
        break

      case THEMES.DARK:
        setTheme(DarkTheme)
        setThemeName(THEMES.DARK)
        break

      default:
        break
    }
  }, [currentTheme, setTheme, setThemeName])

  const handleTheme = useCallback(
    (name: string) => {
      setCurrentTheme(name)
    },
    [setCurrentTheme]
  )

  return <ThemeContext.Provider value={{ themeName, theme, handleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
