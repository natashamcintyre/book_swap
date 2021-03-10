import React from 'react'
import PropTypes from 'prop-types'
import {
  withRouter
} from 'react-router-dom'

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
    this.props.signinUser(this.state)
    this.changeUsernameValue('')
    this.changePasswordValue('')
    this.props.history.push('/')
  }

  render () {
    return (
      <div className="user_signin">
        <form href="/" id="signInForm" onSubmit ={ (e) => this.processSubmit(e) }>
          <input type="text" className='mr-2' name="username" id="signin_username" placeholder="Enter Username" onChange={(e) => this.changeUsernameValue(e.target.value) } value={this.state.username} />
          <input type="password" className='mr-2' name="password" id="signin_password" placeholder="Type your password" onChange={(e) => this.changePasswordValue(e.target.value)} value={this.state.password} />
          <button type="submit" name="submit" id="signin_submit">Log In</button>
        </form>
      </div>
    )
  }
}

UserSignin.propTypes = {
  signinUser: PropTypes.func,
  history: PropTypes.any
}

export default withRouter(UserSignin)
