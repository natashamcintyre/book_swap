import React from 'react'
import PropTypes from 'prop-types'

class Printer extends React.Component {
  render () {
    return (
      <div id='book-confirmation'>
          <p>The book you have selected is:</p>
          <p id='book-title-confirmation'>Title: {this.props.bookTitle}</p>
          <p id='book-author-confirmation'>Author: {this.props.bookAuthor}</p>
      </div>
    )
  }
}

Printer.propTypes = {
  bookTitle: PropTypes.string,
  bookAuthor: PropTypes.string
}

export default Printer
