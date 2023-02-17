import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img className='imglogo' src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=actus">
            <h6>ACTUS</h6>
          </Link>
          <Link className='link' to="/?cat=dev">
            <h6>DEV</h6>
          </Link>
          <Link className='link' to="/?cat=tech">
            <h6>TECH</h6>
          </Link>
          <Link className='link' to="/?cat=astuces">
            <h6>ASTUCES</h6>
          </Link>
          <span>kyle</span>
          <span>Déconnexion</span>
          <span className='admin'>
            <Link className='link' to="/admin">Admin</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar