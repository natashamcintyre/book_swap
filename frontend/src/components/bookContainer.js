import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-grid-system'

class BookContainer extends React.Component {
  render () {
    return (
      <Col lg={2} md={4} sm={12}>
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
      </Col>
    )
  }
}

BookContainer.propTypes = {
  book: PropTypes.object
}

export default BookContainer
