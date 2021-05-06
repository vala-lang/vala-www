import React, { FC } from 'react'

import '@fontsource/inter/400.css'

type IContainer = FC<{ className?: string }>

const Container: IContainer = ({ children, className }) => (
  <div className={`container mx-auto p-8 pt-4 ${className ?? ''}`}>
    {children}
  </div>
)

export default Container
