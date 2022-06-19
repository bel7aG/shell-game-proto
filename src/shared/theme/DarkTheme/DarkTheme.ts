import { ShellGameTheme } from 'styled-components'

import { THEMES } from '../themes.enum'

export const DarkTheme: ShellGameTheme = {
  name: THEMES.DARK,

  border: {
    wsc: `6px solid #121316`,
    color: '#282828',
    radius: '8px',
  },

  colors: (opacity: number = 1) => ({
    primary: `rgba(245, 0, 61, ${opacity})`, // pink
    secondary: `rgba(8, 8, 8, ${opacity})`,
    tertiary: `rgba(0, 0, 0, ${opacity})`,

    fixed: {
      success: `rgba(0, 166, 126, ${opacity})`,
      warning: `rgba(248, 133, 1, ${opacity})`,
      danger: `rgba(224, 50, 50, ${opacity})`,
    },
  }),

  layout: {
    colors: {
      body: '#121316',
      text: '#fff',
    },
  },

  transition: 'cubic-bezier(0.73, 0.12, 0.24, 0.99)',
}

export type DarkThemeType = typeof DarkTheme
