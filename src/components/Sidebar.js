import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
function Sidebar () {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  return (
    <>
      <a href='/' onClick={openMenu} className={`js-boda-nav-toggle boda-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='boda-aside'>
        <div className='boda-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <span>
              Anna <small>&</small> Pedro
            </span>
            <h6>15.12.2023</h6>
          </a>
        </div>
        <nav className='boda-main-menu'>
          <ul>
            <li>
              <a href='#home'>Inicio</a>
            </li>
            <li>
              <a href='#info'>Información</a>
            </li>
            <li>
              <a href='#gallery'>Galería</a>
            </li>
            <li>
              <a href='#asist'>Asistencia</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Anna & Pedro
            <br />
            15 de Diciembre - 2023
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
