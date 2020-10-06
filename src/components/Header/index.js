import React from 'react'

import Style from './style.module.scss'

const Header = () => {
  return (
    <nav className={Style.header}>
      <a href="#" className={Style.logo}>
        New Church Audio
      </a>
      <div>
        <ul className={Style.menu}>
          <li>
            <a href="#" className={Style.active}>
              Home
            </a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Speakers</a>
          </li>
          <li>
            <a href="#">Donate</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">
              <small>Desktop Version</small>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
