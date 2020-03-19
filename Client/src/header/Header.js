import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/profile/:username" class="badge badge-light">  Profile  </Link>
    <Link to="/update-info"  class="badge badge-light">  Update my Info  </Link>
    <Link to="/add-resume" class="badge badge-light">  Add New resume  </Link>
    <Link to="/show-resumes" class="badge badge-light">  Show My Resumes  </Link>
    <Link to="/sign-out" class="badge badge-light">  Sign Out  </Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up" class="badge badge-light">  Sign Up  </Link>
    <Link to="/sign-in" class="badge badge-light">  Sign In  </Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link  to="/" class="badge badge-light">  Home  </Link>
  </React.Fragment>
)

const Header = ({ user, profile }) => (
  <header className="main-header">
    <h1>Personal and Professional Page</h1>
    <nav>
      {user && <span>{`Welcome, ${user.firstName} ${user.lastName}`}</span>}
      {user ? authenticatedOptions : unauthenticatedOptions}
      {alwaysOptions}
    </nav>
  </header>
)

export default Header
