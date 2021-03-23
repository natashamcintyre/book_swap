import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

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
    this.props.addUser('user-new', this.state)
    this.clearForm()
    this.props.history.push('/')
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
        <h1>Sign Up To Book Me Up</h1>
        <form href="/" id="new_user_form" onSubmit={ (e) => this.processSubmit(e) }>
          <input type="text" className='m-1' name="username" id="new_username" placeholder="Choose a Username" onChange={(e) => this.changeUsernameValue(e.target.value)} value={this.state.username} />
          <input type="email" className='m-1' name="email" id="new_email" placeholder="Enter your email" onChange={(e) => this.changeEmailValue(e.target.value)} value={this.state.email} />
          <input type="text" className='m-1' name="location" id="new_location" placeholder="Enter your location" onChange={(e) => this.changeLocationValue(e.target.value)} value={this.state.location} />
          <input type="password" className='m-1' name="password" id="new_password" placeholder="Type your password" onChange={(e) => this.changePasswordValue(e.target.value)} value={this.state.password} />
          <input type="password" className='m-1' name="passwordCheck" id="new_passwordCheck" placeholder="Confirm your password" onChange={(e) => this.changePasswordCheckValue(e.target.value)} value={this.state.passwordCheck} />
          <button type="submit" className='m-1' name="submit" id="new_user_submit">Sign Me Up</button>
        </form>
      </div>
    )
  }
}

UserSignup.propTypes = {
  addUser: PropTypes.func,
  history: PropTypes.any
}

export default withRouter(UserSignup)
