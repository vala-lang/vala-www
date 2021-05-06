import React from 'react'

import Button, { IButton } from './Button'

const ContainedButton: IButton = ({ children, className, href, onClick }) => (
  <Button
    className={`flex items-center space-x-2 bg-grape-500 filter hover:brightness-105 rounded p-2 text-white shadow hover:shadow-xl transition ${
      className ?? ''
    }`}
    {...{ href, onClick }}
  >
    {children}
  </Button>
)

export default ContainedButton
