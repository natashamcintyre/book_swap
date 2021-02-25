import React from 'react'
import PropTypes from 'prop-types'
import UserSignin from './userSignin.js'

class HeaderUser extends React.Component {
  render () {
    return (
      <div className="header col-12">
        <div className="header-content col-12 col-md-6 offset-md-3">
          <img src="images/logonegative.png"></img>
          <h1>Login to Book Me Up!</h1>
          <UserSignin id="usersigninform" signinUser={ this.props.signinUser }/>
        </div>
      </div>
    )
  }
}

HeaderUser.propTypes = {
  signinUser: PropTypes.func
}

export default HeaderUser
