import React from 'react'
import BookRequest from './bookRequest'

const BookInfoModal = ({ handleClose, show, data, requestBook }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'
  if (data !== '') {
    const book = JSON.parse(data.book)
    const allUsers = data.users.reverse()
    const user = allUsers[allUsers.length - 1]
    return (
            <div className={showHideClassName}>
              <section className="modal-content">
              <button id="closeBookInfo" className="close" onClick={handleClose}><i className="fas fa-window-close"></i></button>
              {/* <span id="closeIsbnSearch" className="close"></span> */}
                <ul>
                    <li><img src={book.cover.large} /></li>
                    <li>Name of book: {book.title}</li>
                    <li>Author: {book.authors[0].name}</li>
                    <li>Current reader name: {user.displayName}</li>
                    <li>Current location: <a href={'https://www.google.com/maps?q=' + user.location} target="_blank" rel="noreferrer">{user.location}</a></li>
                    <li>Contact them at {user.email}</li>
                    <li>Excerpt: {book.excerpts[0].text}</li>
                    <li><a href={'https://www.amazon.co.uk/dp/' + book.identifiers.amazon[0] + '#customerReviews'} target="_blank" rel="noreferrer">Read Reviews</a></li>
                    <div className="book-request">
                      <BookRequest requestBook={requestBook} bookID={data._id} />
                    </div>
                </ul>
                <div className="book-lib-card">
                  <h3>Previously read by:</h3>
                  {allUsers.map(user =>
                    <div key={'read-by-' + user.displayName} className="">
                      <p>{user.displayName} in {user.location}</p>
                    </div>
                  )}
                </div>
                {/* <button type="button" onClick={handleClose}>
                  Close
                </button> */}
              </section>
            </div>
    )
  } else {
    return (
            <div className={showHideClassName}>
              <section className="modal-content">
                    <p>SOmething has gone wrong</p>
                <button type="button" onClick={handleClose}>
                  Close
                </button>
              </section>
            </div>
    )
  }
}

export default BookInfoModal
