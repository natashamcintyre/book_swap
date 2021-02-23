import React from 'react'
import PropTypes from 'prop-types'
import {
  Link,
  HashRouter
} from 'react-router-dom'

import BookSearchToo from './bookSearchToo.js'

class Navigation extends React.Component {
  logout = (e) => {
    e.preventDefault()
    this.props.logout()
  }

  render () {
    return (
      <HashRouter>
        <nav className="navbar navbar-expand-md sticky-top">
          <div className='navbar-logo'>
            <Link to="/" className="navbar-brand">
              <img src="images/bookmeup.png" width="130"></img>
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className='fas fa-bars'></i>
          </button>

          <div className='collapse navbar-collapse' id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className='nav-item'>
                <Link to="/sign-up" id="new_user"><i className='fas fa-sign-in-alt'></i></Link>
              </li>
              <li className='nav-item'>
                <a id="logout_link" onClick={this.logout}><i className='fas fa-sign-out-alt'></i></a>
              </li>
              <li className='nav-item'>
                <a href="#"><i className='fas fa-book'></i></a>
              </li>
              <li className='nav-item'>
                <a href="#"><i className='fas fa-heart'></i></a>
              </li>
            </ul>
            <div className='navbar-search form-inline'>
              <BookSearchToo submitSearchString={ this.props.submitSearchString }/>
            </div>
          </div>
        </nav>
      </HashRouter>
    )
  }
}

Navigation.propTypes = {
  logout: PropTypes.func,
  submitSearchString: PropTypes.func
}

export default Navigation
