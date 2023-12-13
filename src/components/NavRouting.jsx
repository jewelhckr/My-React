import React from 'react'

const NavRouting = () => {
  return (
    <>
        <nav className="nav justify-content-center bg-light fw-bold">
          <span className='nav nav-tabs p-2 navbar-expand-lg custom-navbar'>
            <a href="/" className='navbar-brand'>
              {/* <img src={} alt="Printivo Logo"/> */}
            </a>
            <a className='nav-item nav-link text-dark' href="/">Home</a>
            <a className='nav-item nav-link text-dark' href="/about">About</a>
            <a className='nav-item nav-link text-dark' href="/contacts">Contacts</a>
            <a className='nav-item nav-link text-dark' href="">Sign In</a>
            <a className='nav-item nav-link text-dark' href="">Create Account</a>
          </span>
        </nav>
    </>
  )
}

export default NavRouting