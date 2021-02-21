import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className="header col-12">
        <div className="header-content col-12 col-md-6 offset-md-3">
          <img src="images/logo.png"></img>
          <h1>Welcome to Book Me Up!</h1>
          <p>Books will be place in here in the near future</p>
          <button className="btn btn-lg">How to get a book!</button>
        </div>
      </div>
    )
  }
}

export default Header
