import React from 'react'
import PropTypes from 'prop-types'

class UserSignup extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      email: '',
      location: '',
      password: '',
      passwordCheck: ''
    }
  }

  changeUsernameValue (username) {
    this.setState({
      username: username
    })
  }

  changeEmailValue (email) {
    this.setState({
      email: email
    })
  }

  changeLocationValue (location) {
    this.setState({
      location: location
    })
  }

  changePasswordValue (password) {
    this.setState({
      password: password
    })
  }

  changePasswordCheckValue (password) {
    this.setState({
      passwordCheck: password
    })
  }

  processSubmit (e) {
    e.preventDefault()
    this.props.addUser(this.state.username, this.state.email, this.state.location, this.state.password, this.state.passwordCheck)
    this.clearForm()
  }

  clearForm () {
    this.changeEmailValue('')
    this.changePasswordValue('')
    this.changeUsernameValue('')
    this.changeLocationValue('')
    this.changePasswordCheckValue('')
  }

  setError (error) {
    this.setState({
      error: error
    })
  }

  render () {
    return (
      <div className="new_user">
        <form id="new_user_form" onSubmit={ (e) => this.processSubmit(e) }>
          <input type="text" name="username" id="new_username" placeholder="Choose a Username" onChange={(e) => this.changeUsernameValue(e.target.value)} value={this.state.username} />
          <input type="email" name="email" id="new_email" placeholder="Enter your email address" onChange={(e) => this.changeEmailValue(e.target.value)} value={this.state.email} />
          <input type="text" name="location" id="new_location" placeholder="Enter your postcode" onChange={(e) => this.changeLocationValue(e.target.value)} value={this.state.location} />
          <input type="password" name="password" id="new_password" placeholder="Type your password" onChange={(e) => this.changePasswordValue(e.target.value)} value={this.state.password} />
          <input type="password" name="passwordCheck" id="new_passwordCheck" placeholder="Type your password again" onChange={(e) => this.changePasswordCheckValue(e.target.value)} value={this.state.passwordCheck} />
          <button type="submit" name="submit" id="new_user_submit">Sign Me Up</button>
        </form>
      </div>
    )
  }
}

UserSignup.propTypes = {
  addUser: PropTypes.func
}

export default UserSignup
