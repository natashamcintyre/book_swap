import React from 'react'
import PropTypes from 'prop-types'
import Printer from './printer.js'

class BookForm extends React.Component {
  constructor () {
    super()
    this.state = {
      isbn: '',
      title: '',
      author: '',
      postcode: 'SW1A 1AA',
      phoneNumber: '02030112222'
    }
  }

  changeISBNValue (change) {
    this.setState({
      isbn: change
    })
  }

  changeTitleValue (change) {
    this.setState({
      title: change
    })
  }

  changeAuthorValue (change) {
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

  processSubmit (e) {
    e.preventDefault()
    this.props.submitBook(this.bookTitle(), this.bookAuthor(), this.bookISBN(), this.state.postcode, this.state.phoneNumber)
    this.changeTitleValue('')
    this.changeAuthorValue('')
    this.changeISBNValue('')
    this.changePostcodeValue('')
    this.changePhoneNumberValue('')
  }

  render () {
    return (
      <div className="add_book col-12 col-md-5">
        <Printer bookTitle={ this.props.bookTitle } bookAuthor={ this.props.bookAuthor } />
        <form id="book_form" onSubmit={ (e) => this.processSubmit(e) }>
          <input type="text" name="title" id="title" onChange={(e) => this.changeTitleValue(e.target.value)} defaultValue={this.props.bookTitle} hidden />
          <input type="text" name="author" id="author" onChange={(e) => this.changeAuthorValue(e.target.value)} defaultValue={this.props.bookAuthor } hidden />
          <input type="text" name="ISBN" id="ISBN" onChange={(e) => this.changeISBNValue(e.target.value)} defaultValue={this.props.bookISBN} hidden />
          <input type="text" name="phone_number" id="phone_number" onChange={(e) => this.changePhoneNumberValue(e.target.value)} value={this.state.phoneNumber} hidden />
          <input type="text" name="postcode" id="postcode" onChange={(e) => this.changePostcodeValue(e.target.value)} value={this.state.postcode} hidden />
          <button className="col-12 btn btn-md" type="submit" name="submit" id="submit">Submit</button>
        </form>
      </div>
    )
  }
}

BookForm.propTypes = {
  submitBook: PropTypes.func,
  bookTitle: PropTypes.string,
  bookISBN: PropTypes.string,
  bookAuthor: PropTypes.string
}

export default BookForm
