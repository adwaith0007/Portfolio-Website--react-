import React from 'react'
import CV from '../../assets/Adwaith_Cv.pdf'

import './CTA.css'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' >Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        {/* <div className="me"> */}
            {/* <img src={ME} alt="me" /> */}
        {/* </div> */}
        <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
  )
}

export default CTA