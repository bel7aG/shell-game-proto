import { createGlobalStyle, ShellGameTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme: ShellGameTheme }>`
  * {
    transition: background-color 0.35s, color 0.35s, padding 0.26s;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5% !important;
  }

  body, html {
    overflow-x: hidden;
  }

  body {
    background-color: ${({ theme }) => theme?.layout?.colors?.body};
    height: 100vh !important;
    font-size: 1.6rem;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6, p, span, strong, small, button {
    color: ${({ theme }) => theme?.layout?.colors?.text};
  }

  button {
    background-color: transparent;
    outline: none;
    border: 0;
    cursor: pointer;
  }
`
