import React, { Component } from 'react'
import BookSearch from './bookSearch.js'
import BookForm from './bookForm.js'
import PropTypes from 'prop-types'
import BarcodeScanner from './barcode/barcodeScanner.js'

class IsbnSearchModal extends Component {
  render () {
    return (
      <div id="isbnSearchModal" className="modal">
        <div className="modal-content">
          <span id="closeIsbnSearch" className="close">&times;</span>
          <BarcodeScanner />
          <BookSearch id="bookSearch" submitISBN={ this.props.submitISBN } />
          <BookForm id="bookForm" submitISBN={ this.props.submitISBN } submitBook={ this.props.submitBook } bookISBN={ this.props.bookISBN } bookTitle={ this.props.bookTitle } bookAuthor={ this.props.bookAuthor } />
        </div>
      </div>
    )
  }
}

IsbnSearchModal.propTypes = {
  submitBook: PropTypes.func,
  submitISBN: PropTypes.func,
  bookTitle: PropTypes.string,
  bookISBN: PropTypes.string,
  bookAuthor: PropTypes.string
}

export default IsbnSearchModal
