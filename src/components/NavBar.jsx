import React from 'react';
import './NavBar.module.css';
import mySvg from './download.svg'

const NavBar = () => {
  return (
    <>
        <nav className="nav justify-content-center bg-light">
          <ul className='nav nav-tabs p-2 navbar-expand-lg custom-navbar'>
            <a href="/" className='navbar-brand '>
              <img src={mySvg} alt="Printivo Logo"/>
            </a>
            <li className='nav-item nav-link text-dark'>All Products</li>
            <li className='nav-item nav-link text-dark'>Become A Reseller</li>
            <li className='nav-item nav-link text-dark'>Merch Store</li>
            <li className='nav-item nav-link text-dark'>Market Place</li>
            <li className='nav-item nav-link text-dark'>Sign In</li>
            <li className='nav-item nav-link text-dark'>Create Account</li>
          </ul>
        </nav>
    </>
  )
}

export default NavBar