import React from 'react'
import PropTypes from 'prop-types'

class UserSignin extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  changeUsernameValue (username) {
    this.setState({
      username: username
    })
  }

  changePasswordValue (password) {
    this.setState({
      password: password
    })
  }

  processSubmit (e) {
    e.preventDefault()
    this.props.signinUser(this.state.username, this.state.password)
    this.changeUsernameValue('')
    this.changePasswordValue('')
  }

  render () {
    return (
      <div className="user_signin">
        <form id="user_signin_form" onSubmit ={ (e) => this.processSubmit(e) }>
          <input type="text" name="username" id="signin_username" placeholder="Enter Username" onChange={(e) => this.changeUsernameValue(e.target.value) } value={this.state.username} />
          <input type="password" name="password" id="signin_password" placeholder="Type your password" onChange={(e) => this.changePasswordValue(e.target.value)} value={this.state.password} />
          <button type="submit" name="submit" id="signin_submit">Log In</button>
        </form>
      </div>
    )
  }
}

UserSignin.propTypes = {
  signinUser: PropTypes.func
}

export default UserSignin
