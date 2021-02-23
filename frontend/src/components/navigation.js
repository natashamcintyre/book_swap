import React from 'react'
import PropTypes from 'prop-types'
import {
  Link,
  HashRouter
} from 'react-router-dom'

class Navigation extends React.Component {
  logout = (e) => {
    e.preventDefault()
    this.props.logout()
  }

  render () {
    return (
      <HashRouter>
      <nav className="navbar sticky-top">
        <div className='navbar-logo col-2'>
          <Link to="/" className="navbar-brand">
            <img src="images/bookmeup.png" width="150"></img>
          </Link>
        </div>
        <div className='navbar-search col-8'>
          <div className="searchform">
            <form className="form-inline search-form">
              <input className="form-control col-8 mr-sm-2" type="search" placeholder="Search author, title, ISBN number... " aria-label="Search"/>
              <button className="btn btn-outline-secondary btn-sm col-3">Find a book</button>
            </form>
          </div>
        </div>
        <div className="navbar-icons col-2">
          <Link to="/sign-up" id="new_user"><i className='fas fa-sign-in-alt'></i></Link>
          <a id="logout_link" onClick={this.logout}><i className='fas fa-sign-out-alt'></i></a>
          <a href="#"><i className='fas fa-book'></i></a>
          <a href="#"><i className='fas fa-heart'></i></a>
        </div>
      </nav>
      </HashRouter>
    )
  }
}

Navigation.propTypes = {
  logout: PropTypes.func
}

export default Navigation
