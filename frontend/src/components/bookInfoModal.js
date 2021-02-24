const BookInfoModal = ({ handleClose, show, data }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    if (data !== '') {
        const book = JSON.parse(data.book)
        const allUsers = data.users.reverse()
        const user = allUsers[0]
        console.log(user)
        console.log(book)
        return (
            <div className={showHideClassName}>
              <section className="modal-content">
                <ul>
                    <li><img src={book.cover.large} /></li>
                    <li>Name of book: {book.title}</li>
                    <li>Author: {book.authors[0].name}</li>
                    <li>Current owner name: {user.displayName}</li>
                    <li>Current location: {user.location}</li>
                    <li>Current owner email: {user.email}</li>
                    <li>Excerpt: {book.excerpts[0].text}</li>
                    <li>Review</li>
                    <li>a button to reserve</li>
                    <li>map</li>
                </ul>
                <div className="book-lib-card">
                  <h3>Previously read by:</h3>
                  {allUsers.map(user =>
                    <div key={'read-by-' + user.displayName} className="">
                      <p>{user.displayName} in {user.location}</p>
                    </div>
                  )}
                </div>
                <button type="button" onClick={handleClose}>
                  Close
                </button>
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

  };

export default BookInfoModal
