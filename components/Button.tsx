import { FC } from 'react'

import styles from './Button.module.scss'

export type IButton = FC<{
  className?: string
  href?: string
  onClick?: { (): void }
}>

const Button: IButton = ({ children, className, href, onClick }) => {
  const CustomTag = (href ? 'a' : 'button') as keyof JSX.IntrinsicElements

  return (
    <CustomTag
      className={`${styles.button} ${className ?? ''}`}
      {...(onClick ? { onClick: () => onClick() } : {})}
      {...(href ? { href } : {})}
    >
      {children}
    </CustomTag>
  )
}

export default Button
