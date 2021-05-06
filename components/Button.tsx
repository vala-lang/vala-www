import React, { FC } from 'react'

import '@fontsource/inter/500.css'

export type IButton = FC<{
  className?: string
  href?: string
  onClick?: { (): void }
}>

const Button: IButton = ({ children, className, href, onClick }) => {
  const CustomTag = (href ? 'a' : 'button') as keyof JSX.IntrinsicElements

  return (
    <CustomTag
      className={`font-medium ${className ?? ''}`}
      {...(onClick ? { onClick: () => onClick() } : {})}
      {...(href ? { href } : {})}
    >
      {children}
    </CustomTag>
  )
}

export default Button
