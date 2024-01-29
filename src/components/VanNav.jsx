import React from 'react'
import { Link } from 'react-router-dom'

const VanNav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light custom-nav">
        <div className="container text-left">
          <a className="navbar-brand" href="#">
            {/* <img src={notionLogo} alt="Notion logo" /> */}
            Van Page
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item nav-link">
              <Link className='nav-link' to="/van">
                Dashboard
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link className='nav-link' to="/van/income">
                Income
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link className='nav-link' to="/van/review">
                Review
              </Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default VanNav