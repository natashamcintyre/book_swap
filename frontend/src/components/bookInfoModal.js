import React from 'react'
// import PropTypes from 'prop-types'

// class BookInfoModal extends React.Component {
//   render () {
//     return (
//             <div id="bookInfoModal" className="modal">
//                 <div className="modal-content">
//                 <span id="closeBookInfo" className="close">&times;</span>
//                     <ul>
//                         <li>Name of book</li>
//                         <li>Author</li>
//                         <li>Image of book</li>
//                         <li>Current owner details</li>
//                         <li>library stamop</li>
//                         <li>blurb</li>
//                         <li>Review</li>
//                         <li>a button to reserve</li>
//                         <li>map</li>
//                     </ul>
//                 </div>
//             </div>
//     )
//   }
// }

const BookInfoModal = ({ handleClose, show, data }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    if (data != '') {
        console.log(data)
        const book = JSON.parse(data.book)
        const user = data.users[data.users.length - 1]
        console.log(user)
        console.log(book)
        return (
            <div className={showHideClassName}>
              <section className="modal-content">
                {/* {children} */}
                <ul>
                    <li><img src={book.cover.large} /></li>
                    <li>Name of book: {book.title}</li>
                    <li>Author: {book.authors[0].name}</li>   
                    <li>Current owner name: {user.displayName}</li>
                    <li>Current location: {user.location}</li>
                    <li>Current owner email: {user.email}</li>
                    <li>library stamp</li>
                    <li>blurb</li>
                    <li>Review</li>
                    <li>a button to reserve</li>
                    <li>map</li>
                </ul> 
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
