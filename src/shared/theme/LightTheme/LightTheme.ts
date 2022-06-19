import { ShellGameTheme } from 'styled-components'

import { THEMES } from '../themes.enum'

export const LightTheme: ShellGameTheme = {
  name: THEMES.LIGHT,

  border: {
    wsc: `6px solid #fff`,
    color: '#c6c6c6',
    radius: '8px',
  },

  colors: (opacity: number = 1) => ({
    primary: `rgba(145, 115, 115, ${opacity})`, // pink
    secondary: `rgba(243, 243, 243, ${opacity})`,
    tertiary: `rgba(0, 0, 0, ${opacity})`,

    fixed: {
      success: `rgba(0, 166, 126, ${opacity})`,
      warning: `rgba(248, 133, 1, ${opacity})`,
      danger: `rgba(224, 50, 50, ${opacity})`,
    },
  }),

  layout: {
    colors: {
      body: '#eaeaea',
      text: '#000000',
    },
  },

  transition: 'cubic-bezier(0.73, 0.12, 0.24, 0.99)',
}

export type LightThemeType = typeof LightTheme
