import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className="header col-12">
        <div className="header-content col-12 col-md-6 offset-md-3">
          <img src="images/logonegative.png"></img>
          <h1>Welcome to Book Me Up!</h1>
          <button id="howToButton" className="btn btn-lg m-2">How to get a book!</button>
          <button id="isbnSearchButton" className="btn btn-lg m-2">Add a new book!</button>
          <div id="howToModal" className="modal">
            <div className="modal-content">
              <span id="closeHowTo" className="close">&times;</span>
              <p>Due to the closure of many public libraries, many have lost the community space once afforded to them. Book Me Up is a chance for communities to create their own public libraries, uploading books that have already been read for others to enjoy. So upload a book, and enjoy the feeling of discovering a new read from someone in your own community.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
