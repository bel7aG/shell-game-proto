import { useTheme } from 'contexts'
import { FC, ReactNode } from 'react'
import { THEMES } from 'shared'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { GlobalStyle, SLayout } from 'styles'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { theme, themeName, handleTheme } = useTheme()

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />

      <SLayout>
        <div>{children}</div>
        <button
          onClick={() => {
            handleTheme(themeName === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
          }}
        />
      </SLayout>
    </StyledThemeProvider>
  )
}

export default Layout
