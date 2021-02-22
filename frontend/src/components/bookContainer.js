import React from 'react'
import PropTypes from 'prop-types'

class BookContainer extends React.Component {

  render () {
    let book = JSON.parse(this.props.book.data.book)
    return (
      <div className='book-container col-12 col-md-4 col-lg-2'>
          <div className='book-data' key={this.props.book._id}>
            <div className="book-title font-weight-bold">
              <h5>{book.title}</h5>
            </div>
            <div className="book-author font-italic">
              <h6>{book.author}</h6>
            </div>
            <div className="book-isbn">
              <p>{book.isbn}</p>
            </div>
          </div>
      </div>
    )
  }
}

BookContainer.propTypes = {
  book: PropTypes.object
}

export default BookContainer
