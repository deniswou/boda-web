import React from 'react'
import Logo from '../assets/images/logo.png'
function Footer () {
  return (
    <div className='footer2'>
      <div className='boda-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span>
                  Anna <small>&</small> Pedro
                </span>
              </a>
            </h2>
            <p className='copyright'>Diciembre 15 de 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
