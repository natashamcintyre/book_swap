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
      postcode: '',
      phoneNumber: ''
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
        {/* <Printer title={ this.state.title } author={ this.state.author } /> */}
        <div>
            <p>The book you have selected is:</p>
            <p>Title: {this.props.bookTitle}</p>
            <p>Author: {this.props.bookAuthor}</p>
        </div>
        <form id="book_form" onSubmit={ (e) => this.processSubmit(e) }>
          <div className='row'>
            <label className="text-right col-sm-6 col-form-label">Title: </label>
            <div className="col-sm-6">
              <input type="text" className='col-12' name="title" id="title" placeholder="Title" onChange={(e) => this.changeTitleValue(e.target.value)} defaultValue={this.props.bookTitle} />
            </div>
          </div>
          <div className='row'>
            <label className="text-right col-sm-6 col-form-label">Author: </label>
            <div className="col-sm-6">
              <input type="text" className='col-12' name="author" id="author" placeholder="Author" onChange={(e) => this.changeAuthorValue(e.target.value)} defaultValue={this.props.bookAuthor } />
            </div>
          </div>
          <div className='row'>
            <label className="text-right col-sm-6 col-form-label">ISBN: </label>
            <div className="col-sm-6">
              <input type="text" className='col-12' name="ISBN" id="ISBN" placeholder="ISBN" onChange={(e) => this.changeISBNValue(e.target.value)} defaultValue={this.props.bookISBN} />
            </div>
          </div>
          <div className='row'>
            <label className="text-right col-sm-6 col-form-label">Phone Number: </label>
            <div className="col-sm-6">
              <input type="text" className='col-12' name="phone_number" id="phone_number" onChange={(e) => this.changePhoneNumberValue(e.target.value)} value={this.state.phoneNumber} />
            </div>
          </div>
          <div className='row'>
            <label className="text-right col-sm-6 col-form-label">Postcode: </label>
            <div className="col-sm-6">
              <input type="text" className='col-12' name="postcode" id="postcode" onChange={(e) => this.changePostcodeValue(e.target.value)} value={this.state.postcode} />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-6 offset-6">
              <button className="col-12 btn btn-md" type="submit" name="submit" id="submit">Submit</button>
            </div>
          </div>
        </form>
        {/* <p>The book you have selected is:</p>
        <p>Title: {this.state.title}</p>
        <p>Author: {this.state.author}</p> */}
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
