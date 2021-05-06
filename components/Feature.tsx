import React, { FC } from 'react'
import { IconType } from 'react-icons/lib'

import '@fontsource/inter/400.css'

type IFeature = FC<{ className?: string; icon?: IconType }>

const Feature: IFeature = ({ children, className, icon }) => {
  const Icon = icon

  return (
    <article
      className={`flex flex-col space-y-4 items-center ${className ?? ''}`}
    >
      <Icon size="32" className="text-grape-500" />
      <p>{children}</p>
    </article>
  )
}

export default Feature
