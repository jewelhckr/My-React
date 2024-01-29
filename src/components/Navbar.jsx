import React from 'react'
import notionLogo from '../assets/favicon32.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light custom-nav">
        <div className="container text-left">
          <a className="navbar-brand" href="#">
            <img src={notionLogo} alt="Notion logo" />
            Notion
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item nav-link">
              <Link className='nav-link' to="/">
                Home
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link className='nav-link' to="/sign">
                SignUp
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link className='nav-link' to="/button">
                Buttons
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link className='nav-link' to="/cards">
                Cards
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link className='nav-link' to="/contacts">
                Contacts
              </Link>
            </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar