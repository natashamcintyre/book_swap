import React from 'react';
import BookList from './bookList.js'

class BookContainer extends React.Component {
    render() {
        return (
            <div id= 'react'>
            <div className='row'>
                <div className= "col-lg-2 col-md-4 col-sm-12">
                    <li>
                        <p>{this.props.book-id}</p>
                        <p>{this.props.book-title}</p>
                        <p>{this.props.book-author}</p>
                        <p>{this.props.book-isbn}</p>
                    </li>
                </div>
            </div>
           </div>
        )
    }
}

export default BookContainer;
