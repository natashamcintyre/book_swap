import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <header className="page-header header container-fluid">
          <div className="description">
            <h1>Welcome to Book Me Up!</h1>
            <p>Books will be place in here in the near future</p>
            <button className="btn btn-outline-secondary btn-lg">How to get a book!</button>
        </div>
      </header>
    )
  }
}

export default Header
