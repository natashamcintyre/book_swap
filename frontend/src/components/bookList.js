import React from 'react'
import PropTypes from 'prop-types'

class BookList extends React.Component {
  render () {
    if (this.props.books) {
      return (
        <div className="book_list">
          <ul id="books_list" key='books_list'>
            { this.props.books.map(book => {
              return <li className='book' key={book.id}>{book.title} by {book.author}</li>
            })}
          </ul>
        </div>
      )
    } else {
      return (
        <div className="book_list">
          <ul id='book_list'>no books</ul>
        </div>
      )
    }
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
}

export default BookList
