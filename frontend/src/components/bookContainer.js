import React from 'react';

class BookContainer extends React.Component {
    render() {
        console.log("hello from book container")
        console.log(this.props.book._id)
        return (
            <div id= 'react' key={this.props.book._id}>
            <div className='row'>
                <div className= "col-lg-2 col-md-4 col-sm-12">
                    <li>
                        <p>{this.props.book.data.title}</p>
                        <p>{this.props.book.data.author}</p>
                        <p>{this.props.book.data.isbn}</p>
                    </li>
                </div>
            </div>
           </div>
        )
    }
}

export default BookContainer;
