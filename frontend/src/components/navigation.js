import React from 'react'
import PropTypes from 'prop-types'
import {
  Link,
  HashRouter
} from 'react-router-dom'

import BookSearchToo from './bookSearchToo.js'

class Navigation extends React.Component {
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
          <BookSearchToo submitSearchString={ this.props.submitSearchString }/>
        </div>
        <div className="navbar-icons col-2">
          <Link to="/sign-up"><i className='fas fa-sign-in-alt'></i></Link>
          <a href="#"><i className='fas fa-sign-out-alt'></i></a>
          <a href="#"><i className='fas fa-book'></i></a>
          <a href="#"><i className='fas fa-heart'></i></a>
        </div>
      </nav>
      </HashRouter>
    )
  }
}

Navigation.propTypes = {
  submitSearchString: PropTypes.func
}

export default Navigation
