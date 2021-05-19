import classNames from 'classnames'

import Button, { IButton } from './Button'
import styles from './OutlinedButton.module.scss'

const OutlinedButton: IButton = ({ children, className, href, onClick }) => (
  <Button
    className={classNames(styles.outlinedButton, className)}
    {...{ href, onClick }}
  >
    {children}
  </Button>
)

export default OutlinedButton
