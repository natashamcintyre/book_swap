import React from 'react'
import PropTypes from 'prop-types'
import BookContainer from './bookContainer.js'
import { Container, Row } from 'react-grid-system'

class BookList extends React.Component {
  render () {
    if (this.props.books) {
      return (
        <Container>
          <div className="book_list">
            <div id="books_list" key='books_list'>
              <Row>
                {this.props.books.map(book =>
                  < BookContainer key={book._id} className='book' book={book}/>
                )}
              </Row>
            </div>
          </div>
        </Container>
      )
    } else {
      return (
      <div className="book_list">
        <ul id='books_list'>no books</ul>
      </div>
      )
    }
  }
}

BookList.propTypes = {
  books: PropTypes.array
}

export default BookList
