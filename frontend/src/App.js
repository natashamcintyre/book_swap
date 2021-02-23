import React, { Component } from 'react'
import BookList from './components/bookList.js'
import BookForm from './components/bookForm.js'
import ErrorHandler from './components/errorHandler.js'
import Navigation from './components/navigation.js'
import Header from './components/header.js'
import UserSignup from './components/userSignup.js'
import UserSignin from './components/userSignin.js'

import {
  Switch,
  Route,
  HashRouter,
  Redirect
} from 'react-router-dom'
import BookSearch from './components/bookSearch.js'
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
    axios.post(`${PORT}/add-book`, {
      title: title,
      author: author,
      isbn: isbn,
      postcode: postcode,
      phoneNumber: phoneNumber
    })
      .then((result) => {
        this.getBooks()
      })
      .catch((err) => {
        this.setError(err)
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
        this.setImage(result.data[`ISBN:${isbn}`].cover.large)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  addUser = (username, email, location, password, passwordCheck) => {
    axios.post(`${PORT}/user-new`, {
      username: username,
      email: email,
      location: location,
      password: password,
      passwordCheck: passwordCheck
    })
      .then((result) => {
        if (result.data.success) {
          return <Redirect to='/' />
        }
      })
      .catch((err) => {
        this.setError(err)
      })
  }

  signinUser = (username, password) => {
    axios.post(`${PORT}/login`, {
      username: username,
      password: password
    })
      .then((result) => {
        if (result.data.success) {
          return <Redirect to='/' />
        }
      })
      .catch((err) => {
        this.setError(err)
      })
  }

  logout = () => {
    axios.post(`${PORT}/logout`).then((result) => {
      console.log(result.msg)
      // And display on page?
      return <Redirect to='/sign-up' />
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
          <Navigation logout={ this.logout } />
          <Header />
          <Switch>
            <Route path="/sign-up">
              <UserSignup id="usersignupform" addUser={ this.addUser } />
              <UserSignin id="usersigninform" signinUser={ this.signinUser }/>
              <BooksContainer />
            </Route>
            <Route exact path="/">
              <BookSearch id="bookSearch" submitISBN={ this.submitISBN } />
              <BookForm id="bookForm" submitBook={ this.submitBook } bookISBN={ this.state.bookISBN } bookTitle={ this.state.bookTitle } bookAuthor={ this.state.bookAuthor } />
              <BookList books={ this.state.books }/>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default BookMeUp
