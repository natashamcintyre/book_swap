import React from 'react'
import BookRequest from './bookRequest'
import stockBookImage from '../image/navylogo.png'

const BookInfoModal = ({ handleClose, show, data, requestBook }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'
  if (data !== '') {
    const book = JSON.parse(data.book)
    const allUsers = data.users.reverse()
    const user = allUsers[allUsers.length - 1]
    let displayExcerpt = false

    if (book.excerpts) {
      displayExcerpt = true
    }

    let displayReview = false

    if (book.identifiers.amazon) {
      displayReview = true
    }

    let image

    if (book.cover) {
      image = book.cover.large
    } else {
      image = stockBookImage
    }

    return (
            <div className={showHideClassName}>
              <section className="modal-content">
              <button id="closeBookInfo" className="close" onClick={handleClose}><i className="fas fa-window-close"></i></button>
              {/* <span id="closeIsbnSearch" className="close"></span> */}
              <div className='row'>
                <div className='col-6 book-info-image'>
                    <p><img src={image} className='border' height='350px' /></p>
                </div>
                <div className='col-6 book-info'>
                    <h3>{book.title}</h3>
                    <h5 className='font-italic mb-4'>{book.authors[0].name}</h5>
                    <p>Current reader name: {user.displayName}</p>
                    <p className='location-link'>Current location: <a href={'https://www.google.com/maps?q=' + user.location} target="_blank" rel="noreferrer">{user.location}</a></p>
                    <p>Contact them at {user.email}</p>
                    {displayExcerpt && <p className='font-italic'><i className='fas fa-quote-left fa-lg'></i> {book.excerpts[0].text} <i className='fas fa-quote-right fa-lg'></i></p>}
                    {displayReview && <a href={'https://www.amazon.co.uk/dp/' + book.identifiers.amazon[0] + '#customerReviews'} target="_blank" rel="noreferrer">Read Reviews</a>}
                    <div className="book-request">
                      <BookRequest requestBook={requestBook} bookID={data._id} />
                    </div>
                </div>
                </div>
                <div className="book-lib-card">
                  <h5>Previously read by:</h5>
                  {allUsers.map(user =>
                    <div key={'read-by-' + user.displayName} className="">
                      <p>{user.displayName} in {user.location}</p>
                    </div>
                  )}
                </div>
              </section>
            </div>
    )
  } else {
    return (
            <div className={showHideClassName}>
              <section className="modal-content">
                    <p>Something has gone wrong</p>
                <button type="button" onClick={handleClose}>
                  Close
                </button>
              </section>
            </div>
    )
  }
}

export default BookInfoModal
