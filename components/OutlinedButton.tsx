import React from 'react'

import Button, { IButton } from './Button'

const OutlinedButton: IButton = ({ children, className, href, onClick }) => (
  <Button
    className={`flex items-center space-x-2 bg-white filter hover:brightness-95 border-2 border-grape-500 border-opacity-20 rounded p-2 text-grape-500 transition ${
      className ?? ''
    }`}
    {...{ href, onClick }}
  >
    {children}
  </Button>
)

export default OutlinedButton
