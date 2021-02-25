import React from 'react'
import PropTypes from 'prop-types'
import IsbnSearchModal from './isbnSearchModal.js'

class Header extends React.Component {
  constructor () {
    super()
    this.state = { show: false }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  render () {
    return (
      <div className="header col-12">
        <div className="header-content col-12 col-md-6 offset-md-3">
          <img src="images/logonegative.png"></img>
          <h1>Welcome to Book Me Up!</h1>
          <button id="howToButton" className="btn btn-lg m-2">About Book Me Up!</button>
          <button id="isbnSearchButton" className="btn btn-lg m-2" onClick={this.showModal}>Add a new book!</button>
          <IsbnSearchModal submitISBN={ this.props.submitISBN } submitBook={ this.props.submitBook } bookTitle={ this.props.bookTitle } bookAuthor={ this.props.bookAuthor } show={this.state.show} hideModal={this.hideModal}/>
          <div id="howToModal" className="modal">
            <div className="modal-content">
              <span id="closeHowTo" className="close">&times;</span>
              <p>Due to the closure of many public libraries, many have lost the community space once afforded to them. Book Me Up is a chance for communities to create their own public libraries, uploading books that have already been read for others to enjoy. So upload a book, and enjoy the feeling of discovering a new read from someone in your own community.</p>
              <p> <a style={{ 'font-weight': 'bold' }} href="https://github.com/argy-bargy" target='_blank' rel='noreferrer'>Team Argy-Bargy</a> </p>
              <p> <a href="https://github.com/AmanTank187" target='_blank' rel='noreferrer'>Aman Tank</a> </p>
              <p> <a href="https://github.com/calavell" target='_blank' rel='noreferrer'>Cathal Lavelle</a> </p>
              <p> <a href="https://github.com/chriswhitehouse" target='_blank' rel='noreferrer'>Chris Whitehouse</a> </p>
              <p> <a href="https://github.com/kikidawson" target='_blank' rel='noreferrer'>Kiki Dawson</a> </p>
              <p> <a href="https://github.com/natashamcintyre" target='_blank' rel='noreferrer'>Natasha McIntyre</a> </p>
              <p> <a href="https://github.com/WillDixon93" target='_blank' rel='noreferrer'>Will Dixon</a> </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  submitBook: PropTypes.func,
  submitISBN: PropTypes.func,
  bookTitle: PropTypes.string,
  bookAuthor: PropTypes.string
}

export default Header
