import React from 'react'
import PropTypes from 'prop-types'
import Printer from './printer.js'

class BookForm extends React.Component {
  processSubmit (e) {
    e.preventDefault()
    this.props.submitBook()
  }

  render () {
    return (
      <div className="add_book col-12 col-md-5">
        <Printer bookTitle={ this.props.bookTitle } bookAuthor={ this.props.bookAuthor } />
        <form id="book_form" onSubmit={ (e) => this.processSubmit(e) }>
          <button className="col-12 btn btn-md" type="submit" name="submit" id="submit">Submit</button>
        </form>
      </div>
    )
  }
}

BookForm.propTypes = {
  submitBook: PropTypes.func,
  bookTitle: PropTypes.string,
  bookAuthor: PropTypes.string
}

export default BookForm
