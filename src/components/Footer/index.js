import React from 'react'

import Style from './style.module.scss'

const Footer = () => {
  const currentData = new Date()

  return (
    <footer className="container">
      <p>© The New Church {currentData.getFullYear()}</p>
    </footer>
  )
}

export default Footer
