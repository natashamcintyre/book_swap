import React from 'react';
import BookContainer from './bookContainer.js'
// maybe delete the above line

class BookList extends React.Component {
  render() {
    console.log(this.props.books)
      if (this.props.books){
        this.props.books.map(book => {
          console.log(book)
        })
    return(
      <div className="book_list">
        <ul id="books_list" key='books_list'>
          {this.props.books.map(book=>{
            return < BookContainer className='book' book={book} key={book._id}/>
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
