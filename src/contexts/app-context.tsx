import { FC, ReactNode } from 'react'

import { ThemeProvider } from './theme-context'

interface AppProvidersProps {
  children: ReactNode
}

export const AppProvider: FC<AppProvidersProps> = ({ children, ...props }) => {
  console.log(props)
  return <ThemeProvider>{children}</ThemeProvider>
}
