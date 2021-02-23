import React, { Component } from 'react'
import BookList from './components/bookList.js'
import BookForm from './components/bookForm.js'
import BookSearch from './components/bookSearch.js'
import ErrorHandler from './components/errorHandler.js'
import Navigation from './components/navigation.js'
import Header from './components/header.js'
import Users from './components/users.js'
import {
  Switch,
  Route,
  HashRouter
} from 'react-router-dom'
import BooksContainer from './components/booksContainer.js'

import axios from 'axios'
const PORT = 'http://localhost:3001'
const OPENLIBRARY = 'https://openlibrary.org'

class BookMeUp extends Component {
  constructor () {
    super()
    this.state = {
      books: [],
      bookISBN: '',
      bookTitle: '',
      bookAuthor: ''
    }
  }

  getBooks = () => {
    axios.get(`${PORT}/`)
      .then((result) => {
        this.setBooks(result.data)
      })
      .catch((err) => {
        this.setError(err)
      })
  }

  submitBook = (title, author, isbn, postcode, phoneNumber) => {
    // ADDRESS NEEDS CHECKING WITH BACKEND API
    axios.post(`${PORT}/add-book`, {
      title: title,
      author: author,
      isbn: isbn,
      postcode: postcode,
      phoneNumber: phoneNumber
    })
      .then((result) => {
        this.getBooks()
        alert("Book has been added to the bookshelf. Your community thanks you.")
      })
      .catch((err) => {
        this.setError(err)
        alert("Book has not been added to bookshelf. Please double check the fields.")
      })

    this.setISBN('')
    this.setTitle('')
    this.setAuthor('')
  }

  submitISBN = (isbn) => {
    axios.get(`${OPENLIBRARY}/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`, {

    })
      .then((result) => {
        this.setISBN(isbn)
        this.setTitle(result.data[`ISBN:${isbn}`].title)
        this.setAuthor(result.data[`ISBN:${isbn}`].authors[0].name)
        let titleBook = result.data[`ISBN:${isbn}`].title
        let authorBook = result.data[`ISBN:${isbn}`].authors[0].name
        // this.setImage(result.data[`ISBN:${isbn}`].cover.large)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  setError (error) {
    this.setState({
      error: error
    })
  }

  setBooks (books) {
    this.setState({
      books: books
    })
  }

  componentDidMount () {
    this.getBooks()
  }

  setISBN (isbn) {
    this.setState({
      bookISBN: isbn
    })
  }

  setTitle (title) {
    this.setState({
      bookTitle: title
    })
  }

  setAuthor (author) {
    this.setState({
      bookAuthor: author
    })
  }

  render () {
    return (
      <HashRouter>
        <div className="homepage">
          <ErrorHandler error={ this.state.error }/>
          <Navigation />
          <Header bookISBN={ this.state.bookISBN } bookTitle={ this.state.bookTitle } bookAuthor={ this.state.bookAuthor }/>
          <Switch>
            <Route path="/sign-up">
              <Users />
              <BooksContainer />
            </Route>
            <Route exact path="/">
              <div id="isbnSearchModal" className="modal">
                <div className="modal-content">
                  <span id="closeIsbnSearch" className="close">&times;</span>
                  <BookSearch id="bookSearch" submitISBN={ this.submitISBN } />
                  <BookForm id="bookForm" submitISBN={ this.submitISBN } submitBook={ this.submitBook } bookISBN={ this.state.bookISBN } bookTitle={ this.state.bookTitle } bookAuthor={ this.state.bookAuthor } />
                </div>
              </div>
              <BookList books={ this.state.books }/>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default BookMeUp
