import React, { Component } from 'react'
import BookList from './components/bookList.js'
import IsbnSearchModal from './components/isbnSearchModal.js'
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
import BooksContainer from './components/booksContainer.js'

import axios from 'axios'
const PORT = 'http://localhost:3001'
const OPENLIBRARY = 'https://openlibrary.org'

class BookMeUp extends Component {
  constructor () {
    super()
    this.state = {
      books: [],
      book: {},
      bookISBN: '',
      bookTitle: '',
      bookAuthor: '',
      currentUser: ''
    }
  }

  getBooks = () => {
    axios.get(`${PORT}/`)
      .then((result) => {
        console.log(result.data)
        this.setBooks(result.data)
      })
      .catch((err) => {
        this.setError(err)
      })
  }

  submitBook = () => {
    axios.post(`${PORT}/add-book`, {
      book: JSON.stringify(this.state.book),
      // need to turn this into an ObjectId for mongodb somehow?? maybe backend??
      user: this.state.currentUser.id
    })
      .then((result) => {
        this.getBooks()
        alert('Book has been added to the bookshelf. Your community thanks you.')
      })
      .catch((err) => {
        this.setError(err)
        alert('Book has not been added to bookshelf. Please double check the fields.')
      })

    this.setISBN('')
    this.setTitle('')
    this.setAuthor('')
  }

  submitSearchString = (searchString) => {
    axios.get(`${PORT}/search?searchString=${searchString}`, {

    })
      .then((result) => {
        this.setBooks(result.data)
      })
      .catch((err) => {
        this.setError(err)
      })
  }

  submitISBN = (isbn) => {
    axios.get(`${OPENLIBRARY}/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`, {

    })
      .then((result) => {
        this.setISBN(isbn)
        this.setBook(result.data[`ISBN:${isbn}`])
        this.setTitle(result.data[`ISBN:${isbn}`].title)
        this.setAuthor(result.data[`ISBN:${isbn}`].authors[0].name)
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
        if (result.status === 200) {
          this.setCurrentUser(result.data)
          this.setLocalStorage(result.data)
          return <Redirect exact to="/homepage" />
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
          this.setCurrentUser(result.data)
          this.setLocalStorage(result.data)
          return <Redirect exact from="/sign-up" to="/" />
        }
      })
      .catch((err) => {
        this.setError(err)
      })
  }

  logout = () => {
    axios.post(`${PORT}/logout`).then((result) => {
      this.setCurrentUser('')
      localStorage.clear()
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
    if (localStorage.displayName) {
      const user = {
        displayName: localStorage.displayName,
        id: localStorage.id,
        success: localStorage.success,
        email: localStorage.email,
        location: localStorage.location
      }
      this.setCurrentUser(user)
    } else {
      this.setCurrentUser('')
    }

    this.getBooks()
  }

  setBook (book) {
    this.setState({
      book: book
    })
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

  setCurrentUser (data) {
    this.setState({
      currentUser: data
    })
  }

  setLocalStorage (data) {
    localStorage.setItem('displayName', data.displayName)
    localStorage.setItem('id', data.id)
    localStorage.setItem('success', data.success)
    localStorage.setItem('email', data.email)
    localStorage.setItem('location', data.location)
  }

  render () {
    return (
      <HashRouter>
        <div className="homepage">
          <ErrorHandler error={ this.state.error }/>
          <Navigation submitSearchString={ this.submitSearchString } logout={ this.logout }/>
          <Header bookISBN={ this.state.bookISBN } bookTitle={ this.state.bookTitle } bookAuthor={ this.state.bookAuthor }/>
          <IsbnSearchModal submitISBN={ this.submitISBN } submitBook={ this.submitBook } bookTitle={ this.state.bookTitle } bookAuthor={ this.state.bookAuthor } />
          <Switch>
            <Route path="/sign-up">
              <UserSignup id="usersignupform" addUser={ this.addUser } />
              <UserSignin id="usersigninform" signinUser={ this.signinUser }/>
              <BooksContainer />
            </Route>
            <Route exact path="/">
              <BookList books={ this.state.books }/>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default BookMeUp
