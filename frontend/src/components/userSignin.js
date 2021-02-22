import React from 'react'
import axios from 'axios'

const PORT = 'http://localhost:3001'

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
     this.
   }

   render () {
     return (
      <div className="user_signin">
        <form id="user_login" onSubmit ={ (e)  => this.processSubmit(e) }> 
          <input type="text" name="username" id="username" placeholder="Enter Username" onChange={(e) => this.changeUsernameValue(e.target.value) } value={this.state.username} /> 
          <input type="password" name="password" id="new_password" placeholder="Type your password" onChange={(e) => this.changePasswordValue(e.target.value)} value={this.state.password} />
          <button type="submit" name="submit" id="submit">Log In</button>
        </form>
      </div>
     )
   }
}

export default UserSignin