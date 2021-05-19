import Button, { IButton } from './Button'
import styles from './ContainedButton.module.css'

const ContainedButton: IButton = ({ children, className, href, onClick }) => (
  <Button
    className={`${styles.containedButton} ${className ?? ''}`}
    {...{ href, onClick }}
  >
    {children}
  </Button>
)

export default ContainedButton
