import React from 'react'
import PropTypes from 'prop-types'

class BookContainer extends React.Component {
  render () {
    return (
      <div className='book-container col-12 col-md-4 col-lg-2'>
          <div className='book-data' key={this.props.book._id}>
            {/* <p>Book ID will need deleting! {this.props.book._id}</p> */}
            <div className="book-title font-weight-bold">
              <h5>{this.props.book.data.title}</h5>
            </div>
            <div className="book-author font-italic">
              <h6>{this.props.book.data.author}</h6>
            </div>
            <div className="book-isbn">
              <p>{this.props.book.data.isbn}</p>
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
