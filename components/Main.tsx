import React, { FC } from 'react'

import '@fontsource/inter/200.css'
import '@fontsource/inter/400.css'

type IMain = FC<{ className?: string }> & {
  Title: ITitle
  Description: IDescription
  ActionArea: IActionArea
}
type ITitle = FC<{ className?: string }>
type IDescription = FC<{ className?: string }>
type IActionArea = FC<{ className?: string }>

const Main: IMain = ({ children, className }) => {
  return (
    <main className={`flex flex-col space-y-6 md:space-y-8 ${className ?? ''}`}>
      {children}
    </main>
  )
}

Main.Title = ({ children, className }) => (
  <h1 className={`text-4xl md:text-6xl font-extralight ${className ?? ''}`}>
    {children}
  </h1>
)

Main.Description = ({ children, className }) => (
  <p {...{ className }}>{children}</p>
)

Main.ActionArea = ({ children, className }) => (
  <div className={`flex space-x-2 ${className ?? ''}`}>{children}</div>
)

export default Main
