import React from 'react';
import BookContainer from './bookContainer.js'
// maybe delete the above line

class BookList extends React.Component {
  render() {
      if (this.props.books){
    return(
      <div className="book_list">
        <ul id="books_list" key='books_list'>
          {this.props.books.map(book=>{
            // return <li className='book' key={book.id}>{book.title} by {book.author}</li>
            < BookContainer className='book' book-id={book.id} book-title={book.title} book-author={book.author} book-isbn={book.isbn}/>
          })}
        </ul>
      </div>

    );
  } else {
    return(
    <div className="book_list">
      <ul id='books_list'>no books</ul>
    </div>
  )}
 }
}



export default BookList;
