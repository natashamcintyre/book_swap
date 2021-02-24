import React from 'react'
import PropTypes from 'prop-types'
import BookRequest from './bookRequest.js'

class BookContainer extends React.Component {
  render () {
    const book = JSON.parse(this.props.data.book)

    let image

    if (book.cover) {
      image = book.cover.medium
    } else {
      image = 'https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467.jpg'
    }

    return (
      <div className='book-container col-12'>
          <div className='inner-book-container' key={this.props.data._id} id={this.props.data._id} >
            <div className='title-and-author'>
              <div className='outer-book-title'>
                <h5 className='book-title font-weight-bold'>{book.title}</h5>
              </div>
              <div className='outer-book-author'>
                <h6 className="book-author font-italic">{book.authors[0].name}</h6>
              </div>
            </div>
            <div className='outer-book-image'>
              <div className="book-image">
                <img src={image}/>
              </div>
            </div>
            <div className="book-current-user">
              <div className='font-weight-bold'>Current Custodian</div>
              <div className="book-current-user-details">
              <div>Name: {this.props.data.users[this.props.data.users.length - 1].displayName}</div>
              <div>Email: {this.props.data.users[this.props.data.users.length - 1].email}</div>
              <div>Location: {this.props.data.users[this.props.data.users.length - 1].location}</div>
            </div>
            <div className="book-request">
              <BookRequest requestBook={this.props.requestBook} bookID={this.props.data._id} />
             </div>
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
