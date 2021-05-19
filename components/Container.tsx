import { FC } from 'react'
import classNames from 'classnames'

import styles from './Container.module.scss'

type IContainer = FC<{ className?: string }>

const Container: IContainer = ({ children, className }) => (
  <div className={classNames(styles.container, className)}>{children}</div>
)

export default Container
