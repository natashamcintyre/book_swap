import React from 'react';
import BookList from './bookList.js'

class BookContainer extends React.Component {
    render() {
        return (
           <div className='row'>
               <li>
                   <p>{this.props.book-id}</p>
                   <p>{this.props.book-title}</p>
                   <p>{this.props.book-author}</p>
                   <p>{this.props.book-isbn}</p>
               </li>
           </div>
        )
    }
}

export default BookContainer;
