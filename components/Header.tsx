import { Children, FC, useState } from 'react'
import Link from 'next/link'
import { FaBars, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import classNames from 'classnames'

import OutlinedButton from './OutlinedButton'
import styles from './Header.module.scss'

type IHeader = FC<{ className?: string }> & { NavLink: INavLink }
type INavLink = FC<{
  className?: string
  external?: boolean
  href?: string
}>

const Header: IHeader = ({ children, className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={classNames(styles.header, className)}>
      <Link href="/">
        <a className={styles.logo}>Vala</a>
      </Link>
      <nav className={styles.navBar}>
        <ul>
          {Children.map(children, (child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

Header.NavLink = ({ children, className, external, href }) => {
  const classes = classNames(styles.navLink, className)

  const MyLink: FC = external
    ? ({ children }) => (
        <a
          className={classes}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    : ({ children }) => (
        <Link href={href}>
          <a className={classes}>{children}</a>
        </Link>
      )

  return (
    <MyLink>
      <p>{children}</p>
      {external ? <FaExternalLinkAlt /> : null}
    </MyLink>
  )
}

export default Header
