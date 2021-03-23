import React, { Component } from 'react'
import BookList from './components/bookList.js'
import ErrorHandler from './components/errorHandler.js'
import Navigation from './components/navigation.js'
import Header from './components/header.js'
import {
  Switch,
  Route,
  HashRouter,
  Redirect
} from 'react-router-dom'

import axios from 'axios'
const PORT = 'http://localhost:3001'
const OPENLIBRARY = 'https://openlibrary.org'

class BookMeUp extends Component {
  constructor () {
    super()
    this.state = {
      books: [],
      book: { title: '', authors: [{ name: '' }] },
      currentUser: { displayName: '' }
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

  submitBook = () => {
    axios.post(`${PORT}/add-book`, {
      book: JSON.stringify(this.state.book),
      user: this.state.currentUser
    })
      .then((result) => {
        this.getBooks()
        alert('Book has been added to the bookshelf. Your community thanks you.')
      })
      .catch((err) => {
        this.setError(err)
        alert('Book has not been added to bookshelf. Please double check the fields.')
      })
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
    axios.get(`${OPENLIBRARY}/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
      .then((result) => {
        this.setBook(result.data[`ISBN:${isbn}`])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  userAPI = (route, userData) => {
    axios.post(`${PORT}/${route}`, userData)
      .then((result) => {
        if (result.data.success) {
          this.setCurrentUser(result.data)
          this.setLocalStorage(result.data)
          return <Redirect exact to="/" />
        }
      })
      .catch((err) => {
        this.setError(err)
      })
  }

  logout = () => {
    axios.post(`${PORT}/logout`).then((result) => {
      console.log(result)
      this.setCurrentUser({ displayName: '' })
      localStorage.clear()
      return <Redirect to='/sign-up' />
    })
  }

  requestBook = (bookID) => {
    axios.post(`${PORT}/request-book`, {
      bookID: bookID,
      user: this.state.currentUser
    })
      .then((result) => {
        this.getBooks()
        alert('You have been added to the book. Arrange collection.')
      })
      .catch((err) => {
        this.setError(err)
        alert('You have not been added to the book. Please double check the fields.')
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
    var user = JSON.parse(localStorage.getItem('user'))
    if (user) {
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

  setCurrentUser (user) {
    this.setState({
      currentUser: user
    })
  }

  setLocalStorage (user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  render () {
    return (
      <HashRouter>
        <div className="homepage">
          <ErrorHandler error={ this.state.error }/>
          <Navigation submitSearchString={ this.submitSearchString } logout={ this.logout } currentUser={ this.state.currentUser }/>
          <Header addUser={ this.userAPI } signinUser={ this.userAPI } bookTitle={ this.state.book.title } bookAuthor={ this.state.book.authors[0].name } submitISBN={ this.submitISBN } submitBook={ this.submitBook } />
          <Switch>
            <Route exact path="/">
              <BookList books={ this.state.books } requestBook= { this.requestBook }/>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default BookMeUp
