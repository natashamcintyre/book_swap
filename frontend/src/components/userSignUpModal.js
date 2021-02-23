import React, { Component } from 'react'
import UserSignin from './userSignin.js'
import UserSignup from './userSignup.js'
import PropTypes from 'prop-types'

class UserSignUpModal extends Component {
  render () {
    return (
      <div id="userSignUpModal" className="modal">
        <div className="modal-content">
          <span id="closeUserSignup" className="close">&times;</span>
          <UserSignup id="usersignupform" addUser={ this.props.addUser } />
          <UserSignin id="usersigninform" signinUser={ this.props.signinUser } />
        </div>
      </div>
    )
  }
}

UserSignUpModal.propTypes = {
  addUser: PropTypes.func,
  signinUser: PropTypes.func
}

export default UserSignUpModal
