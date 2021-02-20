import React from 'react'
import PropTypes from 'prop-types'

class BookContainer extends React.Component {
  render () {
    return (
            <div id= 'react'>
            <div className='row'>
                <div className= "col-lg-2 col-md-4 col-sm-12">
                    <li key={this.props.book._id}>
                        <p>Book ID will need deleting! {this.props.book._id}</p>
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

BookContainer.propTypes = {
  book: PropTypes.oject
}

export default BookContainer
