import baseStyled, {
  css as StyledCSS,
  ShellGameTheme,
  keyframes as frames,
  ThemedStyledInterface,
} from 'styled-components'

import { THEMES } from './themes.enum'

declare module 'styled-components' {
  export interface ShellGameTheme {
    name: THEMES

    border: {
      wsc: string // width style color
      color: string
      radius: string
    }

    colors: (opacity?: number) => {
      primary: string
      secondary: string
      tertiary: string

      fixed: {
        success: string
        warning: string
        danger: string
      }
    }

    layout: {
      colors: {
        body: string
        text: string
      }
    }

    transition: string
  }
}

export const styled = baseStyled as ThemedStyledInterface<ShellGameTheme>
export const css = StyledCSS
export const keyframes: ShellGameTheme | any = frames
