import React from 'react'
import PropTypes from 'prop-types'
import { Link, HashRouter } from 'react-router-dom'

class BookContainer extends React.Component {
  render () {
    const book = JSON.parse(this.props.data.book)
    return (
      <HashRouter>
        <div className='book-container col-12 col-md-4 col-lg-2'>
          <div className='inner-book-container' key={this.props.data._id} id={this.props.data._id} >
            <div className="book-title font-weight-bold">
              <h5>{book.title}</h5>
            </div>
            <div className="book-author font-italic">
              <h6>{book.authors[0].name}</h6>
            </div>
            <div className="book-image">
              <img src={book.cover.medium}/>
            </div>
            <div className="book-current-user">
              <div>Name: {this.props.data.users[0].displayName}</div>
              <div>Email: {this.props.data.users[0].email}</div>
              <div>Location: {this.props.data.users[0].location}</div>
            </div>
            <div className="book-lib-card" >
              <h3>Previously read by:</h3>
                {this.props.data.users.map(user =>
                  <div key={'read-by-' + user.displayName}>
                    <p >{user.displayName}</p>
                    <p >{user.location}</p>
                  </div>
                )}
            </div>
            <Link to={'/' + this.props.data._id}>View more details</Link>
          </div>
        </div>
      </HashRouter>
    )
  }
}

BookContainer.propTypes = {
  data: PropTypes.object

}

export default BookContainer
