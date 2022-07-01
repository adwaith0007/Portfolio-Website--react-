import React from 'react'
import About from '../about/About'
import CTA from './CTA'
import './header.css'

import HeaderSocials from './HeaderSocials'
function Header() {
  return (
    // <header>
      <div className='header'>
      <div className="container header__container">
        
        <h5>Hello I'm</h5>
        <h1>Adwaith.K</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderSocials/>
        <CTA/>
        <About/>
      </div>
      </div>
    // </header>
  )
}

export default Header