import React from 'react'
import PropTypes from 'prop-types'
import BookRequest from './bookRequest.js'

class BookContainer extends React.Component {
  render () {
    const book = JSON.parse(this.props.data.book)
    return (
      <div className='book-container col-12 col-md-4 col-lg-2'>
          <div className='inner-book-container' key={this.props.data._id} id={this.props.data._id} >
            <div className="book-title font-weight-bold">
              <h5>{book.title}</h5>
            </div>
            <div className="book-author font-italic">
              <h6>{book.authors[0].name}</h6>
            </div>
            <div className="book-image">
              <img src={book.cover.medium}/>
            </div>
            <div className="book-current-user">
              <div>Name: {this.props.data.users[this.props.data.users.length - 1].displayName}</div>
              <div>Email: {this.props.data.users[this.props.data.users.length - 1].email}</div>
              <div>Location: {this.props.data.users[this.props.data.users.length - 1].location}</div>
            </div>
            <div className="book-request">
              <BookRequest requestBook={this.props.requestBook} bookID={this.props.data._id} />
            </div>
          </div>
        </div>
    )
  }
}

BookContainer.propTypes = {
  data: PropTypes.object,
  requestBook: PropTypes.func

}

export default BookContainer
