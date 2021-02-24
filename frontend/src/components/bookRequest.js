import React from 'react'
import PropTypes from 'prop-types'

class BookRequest extends React.Component {
  processSubmit (e) {
    e.preventDefault()
    this.props.requestBook()
  }

  render () {
    return (
      <div className="add_book col-12 col-md-5">
        <form id="book_form" onSubmit={ (e) => this.processSubmit(e) }>
          <button className="col-12 btn btn-md" type="submit" name="book-request-button" id="book-request-button">Request</button>
        </form>
      </div>
    )
  }
}

BookRequest.propTypes = {
  requestBook: PropTypes.func

}

export default BookRequest
