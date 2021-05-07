import React, { Children, FC, useState } from 'react'
import { FaBars, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'
import Link from 'next/link'

import OutlinedButton from './OutlinedButton'

import '@fontsource/inter/400.css'
import '@fontsource/lobster/400.css'

type IHeader = FC<{ className?: string }> & { NavLink: INavLink }
type INavLink = FC<{
  className?: string
  external?: boolean
  href?: string
}>

const Header: IHeader = ({ children, className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={`flex justify-between items-center text-grape-500 ${
        className ?? ''
      }`}
    >
      <Link href="/">
        <a className="text-4xl font-cursive">Vala</a>
      </Link>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          {Children.map(children, (child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      </nav>
      <OutlinedButton
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden"
      >
        <p>MENU</p>
        <FaBars />
      </OutlinedButton>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed bg-black bg-opacity-30 inset-0 transition-opacity ${
          isMenuOpen ? '' : 'pointer-events-none opacity-0'
        }`}
      />
      <div
        className={`fixed bg-white inset-0 max-w-xs transform transition ${
          isMenuOpen ? 'shadow-2xl' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <Link href="/">
            <a className="text-4xl font-cursive">Vala</a>
          </Link>
          <button onClick={() => setIsMenuOpen(false)} className="p-2">
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
  const classes = `flex space-x-1 items-center hover:underline ${
    className ?? ''
  }`

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
