import React, { Children, FC, useState } from 'react'
import { FaBars, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

import OutlinedButton from './OutlinedButton'
import styles from './Header.module.css'

type IHeader = FC<{ className?: string }> & { NavLink: INavLink }
type INavLink = FC<{
  className?: string
  external?: boolean
  href?: string
}>

const Header: IHeader = ({ children, className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`${styles.header} ${className ?? ''}`}>
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
      <OutlinedButton
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.menuButton}
      >
        <p>MENU</p>
        <FaBars />
      </OutlinedButton>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`${styles.menuShadow} ${isMenuOpen ? styles.active : ''}`}
      />
      <div className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
        <div>
          <Link href="/">
            <a className={styles.logo}>Vala</a>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className={styles.closeButton}
          >
            <FaTimes />
          </button>
        </div>
        <nav>
          <ul>
            {Children.map(children, (child, index) => (
              <li className={styles.menuItem} key={index}>
                {child}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.NavLink = ({ children, className, external, href }) => {
  const classes = `${styles.navLink} ${className ?? ''}`

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
