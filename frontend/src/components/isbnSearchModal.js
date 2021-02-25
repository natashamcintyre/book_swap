import React, { Component } from 'react'
import BookSearch from './bookSearch.js'
import BookForm from './bookForm.js'
import PropTypes from 'prop-types'

class IsbnSearchModal extends Component {
  getClassName = () => {
    let className = 'modal display-none'
    if (this.props.show === true) {
      className = 'modal display-block'
    }
    return className
  }

  render () {
    return (
      <div id="isbnSearchModal" className={this.getClassName()}>
        <div className="modal-content">
          <span id="closeIsbnSearch" className="close">&times;</span>
          <BookSearch id="bookSearch" submitISBN={ this.props.submitISBN } />
          <BookForm id="bookForm" submitISBN={ this.props.submitISBN } submitBook={ this.props.submitBook } bookTitle={ this.props.bookTitle } bookAuthor={ this.props.bookAuthor } hideModal={this.props.hideModal} />
        </div>
      </div>
    )
  }
}

IsbnSearchModal.propTypes = {
  submitBook: PropTypes.func,
  submitISBN: PropTypes.func,
  hideModal: PropTypes.func,
  bookTitle: PropTypes.string,
  bookISBN: PropTypes.string,
  bookAuthor: PropTypes.string,
  show: PropTypes.bool
}

export default IsbnSearchModal
