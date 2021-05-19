import Button, { IButton } from './Button'
import styles from './OutlinedButton.module.css'

const OutlinedButton: IButton = ({ children, className, href, onClick }) => (
  <Button
    className={`${styles.outlinedButton} ${className ?? ''}`}
    {...{ href, onClick }}
  >
    {children}
  </Button>
)

export default OutlinedButton
