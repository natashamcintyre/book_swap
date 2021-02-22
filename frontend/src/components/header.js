import React from 'react'
import BookSearch from './bookSearch.js'

class Header extends React.Component {
  render () {
    return (
      <div className="header col-12">
        <div className="header-content col-12 col-md-6 offset-md-3">
          <img src="images/logo.png"></img>
          <h1>Welcome to Book Me Up!</h1>
          <p>Books will be place in here in the near future</p>
          <button id="howToButton" className="btn btn-lg">How to get a book!</button>
          <div id="howToModal" className="modal">
            <div className="modal-content">
              <span id="closeHowTo" className="close">&times;</span>
              <p>This bit will tell you how to join in with the fun.</p>
            </div>
          </div>
          <button id="isbnSearchButton" className="btn btn-lg">Adda new book!</button>
          <div id="isbnSearchModal" className="modal">
            <div className="modal-content">
              <span id="closeIsbnSearch" className="close">&times;</span>
              <BookSearch id="bookSearch" submitISBN={ this.submitISBN } />
              <p>This is the form where you can search by isbn number</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
