import React from 'react'
import PropTypes from 'prop-types'

class Printer extends React.Component {
  render () {
    return (
      <div>
          <p>The book you have selected is:</p>
          <p>Title: {this.props.bookTitle}</p>
          <p>Author: {this.props.bookAuthor}</p>
      </div>
    )
  }
}

Printer.propTypes = {
  bookTitle: PropTypes.string,
  bookAuthor: PropTypes.string
}

export default Printer
