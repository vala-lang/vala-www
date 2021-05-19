import { FC } from 'react'
import { IconType } from 'react-icons/lib'
import classNames from 'classnames'

import styles from './Feature.module.scss'

type IFeature = FC<{ className?: string; icon?: IconType }>

const Feature: IFeature = ({ children, className, icon }) => {
  const Icon = icon

  return (
    <article className={classNames(styles.feature, className)}>
      <Icon size="32" className={styles.icon} />
      <p>{children}</p>
    </article>
  )
}

export default Feature
