import React, { Children, useState } from 'react'
import { FaBars, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

import OutlinedButton from './OutlinedButton'

import '@fontsource/inter/400.css'
import '@fontsource/lobster/400.css'

type IHeader = React.FC<{ className?: string }> & { NavLink: INavLink }
type INavLink = React.FC<{
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
      <a href="/" className="text-4xl font-cursive">
        Vala
      </a>
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
          <a href="/" className="text-4xl font-cursive">
            Vala
          </a>
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

Header.NavLink = ({ children, className, external, href }) => (
  <a
    href={href}
    className={`flex space-x-1 items-center hover:underline ${className ?? ''}`}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    <p>{children}</p>
    {external ? <FaExternalLinkAlt /> : null}
  </a>
)

export default Header
