import React from 'react'
import PropTypes from 'prop-types'
import BookContainer from './bookContainer.js'
import BookInfoModal from './bookInfoModal.js'

class BookList extends React.Component {
  constructor () {
    super()
    this.state = {
      show: false,
      currentBook: ''
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal = (currentBook) => {
    this.setState({ show: true, currentBook: currentBook })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  render () {
    console.log(this.props.books)
    if (this.props.books) {
      return (
        <div className='container col-12'>
          <div className="book_list" id="books_list" key='books_list'>
              <div className='row'>
                {this.props.books.map(data =>
                  <div key={'bookId-' + data._id} className='book-container col-12 col-md-4 col-lg-2'>
                    < BookContainer key={data._id} className='book' data={data} requestBook={this.props.requestBook} showModal={this.showModal}/>
                  </div>
                )}
              </div>
              <BookInfoModal data={this.state.currentBook} show={this.state.show} handleClose={this.hideModal} requestBook={this.props.requestBook}/>
          </div>
        </div>
      )
    } else {
      return (
      <div className="book_list">
        <div className='books_list'>no books</div>
      </div>
      )
    }
  }
}

BookList.propTypes = {
  books: PropTypes.array,
  requestBook: PropTypes.func
}

export default BookList

// onClick={this.showModal}
