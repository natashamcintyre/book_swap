import React from 'react'

class Header extends React.Component {
  submitISBN = (isbn) => {
    axios.get(`${OPENLIBRARY}/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`, {

    })
      .then((result) => {
        this.setISBN(isbn)
        this.setTitle(result.data[`ISBN:${isbn}`].title)
        this.setAuthor(result.data[`ISBN:${isbn}`].authors[0].name)
        this.setImage(result.data[`ISBN:${isbn}`].cover.large)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    return (
      <div className="header col-12">
        <div className="header-content col-12 col-md-6 offset-md-3">
          <img src="images/logo.png"></img>
          <h1>Welcome to Book Me Up!</h1>
          <p>Books will be place in here in the near future</p>
          <button id="howToButton" className="btn btn-lg mb-4">How to get a book!</button>
          <button id="isbnSearchButton" className="btn btn-lg">Add a new book!</button>
          <div id="howToModal" className="modal">
            <div className="modal-content">
              <span id="closeHowTo" className="close">&times;</span>
              <p>This bit will tell you how to join in with the fun.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Header
