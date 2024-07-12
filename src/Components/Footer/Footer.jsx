import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer} id='footer'>
        <p>© 2024 Edusity. All rights reserved</p>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer
