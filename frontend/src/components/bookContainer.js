import React from 'react'
import PropTypes from 'prop-types'
import stockBookImage from '../image/navylogo.png'

class BookContainer extends React.Component {
  render () {
    const book = JSON.parse(this.props.data.book)

    let image

    if (book.cover) {
      image = book.cover.large
    } else {
      image = stockBookImage
    }

    return (
      <div className='book-container col-12'>
        <div className='inner-book-container' key={this.props.data._id} id={this.props.data._id} >
          <div className='title-and-author'>
            <h5 className='book-title font-weight-bold'>{book.title}</h5>
            <h6 className="book-author font-italic">{book.authors[0].name}</h6>
          </div>
          <div className='outer-book-image'>
            <div className='book-image col-12'>
              <img src={image}/>
            </div>
          </div>
          <div className="book-current-location">
            <div>Location: {this.props.data.users[this.props.data.users.length - 1].location}</div>
          </div>
          <div className='book-info-button'>
            <button type ="button" onClick={() => this.props.showModal(this.props.data)}>View details</button>
          </div>
        </div>
      </div>
    )
  }
}

BookContainer.propTypes = {
  data: PropTypes.object,
  requestBook: PropTypes.func,
  showModal: PropTypes.func

}

export default BookContainer
