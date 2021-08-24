import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
        <Link class="navbar-brand" to="/">
          Welcome 
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
    
            <Link class="nav-item nav-link active" to="/login">
              Login <span class="sr-only"></span>
            </Link>
            <Link class="nav-item nav-link" to="/signup">
              SignUp
            </Link>
            <Link class="nav-item nav-link" to="/aboutus">
              About
            </Link>
           
  
          </div>
        </div>
      </nav>

    )
}

export default Header
