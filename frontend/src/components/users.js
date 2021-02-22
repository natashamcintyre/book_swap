import React from 'react'
import axios from 'axios'

const PORT = 'http://localhost:3001'

class Users extends React.Component {
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
    this.addUser(this.state.username, this.state.email, this.state.location, this.state.password, this.state.passwordCheck)
    // post user to back end.
    // if save is successful, navigate to homepage
    // else display error and stay on this page. Highlight error area???
  }

    addUser = (username, email, location, password, passwordCheck) => {
      axios.post(`${PORT}/user-new`, {
        username: username,
        email: email,
        location: location,
        password: password,
        passwordCheck: passwordCheck
      })
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          this.setError(err)
        })
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
              <input type="text" name="email" id="new_email" placeholder="Enter your email address" onChange={(e) => this.changeEmailValue(e.target.value)} value={this.state.email} />
              <input type="text" name="location" id="new_location" placeholder="Enter your postcode" onChange={(e) => this.changeLocationValue(e.target.value)} value={this.state.location} />
              <input type="text" name="password" id="new_password" placeholder="Type your password" onChange={(e) => this.changePasswordValue(e.target.value)} value={this.state.password} />
              <input type="text" name="passwordCheck" id="new_passwordCheck" placeholder="Type your password again" onChange={(e) => this.changePasswordCheckValue(e.target.value)} value={this.state.passwordCheck} />
              <button type="submit" name="submit" id="submit">Sign Me Up</button>
            </form>
          </div>
      )
    }
}

export default Users
