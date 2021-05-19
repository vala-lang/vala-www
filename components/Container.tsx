import { FC } from 'react'

import styles from './Container.module.scss'

type IContainer = FC<{ className?: string }>

const Container: IContainer = ({ children, className }) => (
  <div className={`${styles.container} ${className ?? ''}`}>{children}</div>
)

export default Container
