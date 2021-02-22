import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

class BookForm extends React.Component {
  constructor () {
    super()
    this.state = {
      isbn: '',
      title: '',
      author: '',
      postcode: '',
      phoneNumber: ''
    }

  }

  changeISBNValue(change){
    this.setState({
      isbn: change
    })
  }

  changeTitleValue(change){
    this.setState({
      title: change
    })
  }

  changeAuthorValue(change){
    this.setState({
      author: change
    })
  }

  changePostcodeValue (change) {
    this.setState({
      postcode: change
    })
  }

  changePhoneNumberValue (change) {
    this.setState({
      phoneNumber: change
    })
  }

  bookTitle () {
    if (this.state.title === '') {
      return this.props.bookTitle
    } else {
      return this.state.title
    }
  }

  bookISBN () {
    if (this.state.isbn === '') {
      return this.props.bookISBN
    } else {
      return this.state.isbn
    }
  }

  bookAuthor () {
    if (this.state.author === '') {
      return this.props.bookAuthor
    } else {
      return this.state.author
    }
  }

  processSubmit(e) {
    e.preventDefault();
    this.props.submitBook(this.bookTitle(), this.bookAuthor(), this.bookISBN(), this.state.postcode, this.state.phoneNumber);
    this.changeTitleValue('');
    this.changeAuthorValue('');
    this.changeISBNValue('');
    this.changePostcodeValue('');
    this.changePhoneNumberValue('');

  }

  render () {
    return (
      <div className="add_book">
        <form id="book_form" onSubmit={ (e) => this.processSubmit(e) }>
          <input type="text" name="ISBN" id="ISBN" placeholder="ISBN" onChange={(e) => this.changeISBNValue(e.target.value)} defaultValue={this.props.bookISBN} />
          <input type="text" name="title" id="title" placeholder="Title" onChange={(e) => this.changeTitleValue(e.target.value)} defaultValue={this.props.bookTitle} />
          <input type="text" name="author" id="author" placeholder="Author" onChange={(e) => this.changeAuthorValue(e.target.value)} defaultValue={this.props.bookAuthor } />
          <input type="text" name="phone_number" id="phone_number" placeholder="Phone number" onChange={(e) => this.changePhoneNumberValue(e.target.value)} value={this.state.phoneNumber} />
          <input type="text" name="postcode" id="postcode" placeholder="Postcode" onChange={(e) => this.changePostcodeValue(e.target.value)} value={this.state.postcode} />
          <button type="submit" name="submit" id="submit">Submit</button>
        </form>
        <img key={ this.props.bookImageURL } src={ this.props.bookImageURL } />
      </div>
    )
  }
}

BookForm.propTypes = {
  submitBook: PropTypes.func
}

export default BookForm
