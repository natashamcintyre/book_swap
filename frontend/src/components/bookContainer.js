import React from 'react'
import PropTypes from 'prop-types'

class BookContainer extends React.Component {
  render () {
    return (
      <div className='book-container col-12 col-md-4 col-lg-2'>
          <div className='book-data' key={this.props.book._id}>
            {/* <p>Book ID will need deleting! {this.props.book._id}</p> */}
            <div className="book-title">
              {this.props.book.data.title}
            </div>
            <div className="book-author">
              {this.props.book.data.author}
            </div>
            <div className="book-isbn">
              {this.props.book.data.isbn}
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
