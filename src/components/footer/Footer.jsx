import React from 'react'
import './Footer.css'
// import  img from '../../assets/AD logo.png'
function Footer() {
  return (
    <div className='footer'>
      <a href='#' className='footer__logo'>EGATOR</a>
      {/* <img className='logo' src={img}></img> */}
      <ul className='permalinks'>
        <li><a href='#' >Home</a></li>

      </ul>
      <div className='footer__copyright'>
        <small>&copy; copyright protected </small>
      </div>
    </div>
  )
}

export default Footer