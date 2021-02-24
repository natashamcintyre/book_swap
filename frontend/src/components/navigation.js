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
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className='navbar-logo mr-5'>
            <Link to="/" className="navbar-brand">
              <img src="images/bookmeup.png" width="130"></img>
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className='fas fa-bars'></i>
          </button>

          <div className='collapse navbar-collapse' id="navbarSupportedContent">
            <div className='navbar-search form-inline offset-3 mr-auto'>
              <BookSearchToo submitSearchString={ this.props.submitSearchString }/>
            </div>
            <ul className="navbar-nav offset-2 mr-auto">
              <li className='nav-item mr-2'>
                <Link to="/sign-up" id="new_user"><i className='fas fa-sign-in-alt fa-2x'></i></Link>
              </li>
              <li className='nav-item mr-2'>
                <a id="logout_link" onClick={this.logout}><i className='fas fa-sign-out-alt fa-2x'></i></a>
              </li>
              <li className='nav-item mr-2'>
                <a href="#"><i className='fas fa-book fa-2x'></i></a>
              </li>
              <li className='nav-item mr-2'>
                <a href="#"><i className='fas fa-heart fa-2x'></i></a>
              </li>
            </ul>
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
