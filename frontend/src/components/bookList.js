import React from 'react';

class BookList extends React.Component {
  render() {
      if (this.props.books){
    return(
      <div className="book_list">
        <ul id="books_list">
          {this.props.books.map(book=>{ 
            return <li className='book' key={book.id}>{book.title} by {book.author}</li>
          })}
        </ul>
      </div>
      
    );
  } else {
    return 
    <div className="book_list">
      <ul id='book_list'>no books</ul> 
    </div>
  }
 }
}


export default BookList;
