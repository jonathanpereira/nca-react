import React from 'react'
import classes from 'clsx'

import Style from './style.module.scss'

const Footer = () => {
  const currentData = new Date()

  return (
    <footer className={classes('container', Style.footer)}>
      <p>© The New Church {currentData.getFullYear()}</p>
    </footer>
  )
}

export default Footer
