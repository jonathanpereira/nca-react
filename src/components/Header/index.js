import React from 'react'

import Style from './style.module.scss'

const Header = () => {
  return (
    <nav className={Style.header}>
      <a href="/" className={Style.logo}>
        New Church Audio
      </a>
      <div>
        <ul className={Style.menu}>
          <li>
            <a href="/" className={Style.active}>
              Home
            </a>
          </li>
          <li>
            <a href="/asdf">Events</a>
          </li>
          <li>
            <a href="/asdf">About</a>
          </li>
          <li>
            <a href="/asdf">Speakers</a>
          </li>
          <li>
            <a href="/asdf">Donate</a>
          </li>
          <li>
            <a href="/asdf">Contact</a>
          </li>
          <li>
            <a href="/asdf">
              <small>Desktop Version</small>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
