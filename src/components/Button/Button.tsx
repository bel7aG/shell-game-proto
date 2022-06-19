import { FC, ReactNode } from 'react'
import { SButton } from './SButton'

interface ButtonProps {
  title?: string
  children?: ReactNode
  danger?: boolean
}

const Button: FC<ButtonProps & JSX.IntrinsicElements['button']> = ({ children, ...props }) => {
  const { title, danger = false } = props

  return (
    <SButton danger={danger} {...props}>
      <span>{title || children}</span>
    </SButton>
  )
}

export default Button
