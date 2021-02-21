import React, { Component } from 'react'
import BookList from './components/bookList.js'
import BookForm from './components/bookForm.js'
import ErrorHandler from './components/errorHandler.js'
import Navigation from './components/navigation.js'
import Header from './components/header.js'
import BooksContainer from './components/booksContainer.js'
import { Container } from 'react-grid-system'

import axios from 'axios'
const PORT = 'http://localhost:3001'

class BookMeUp extends Component {
  constructor () {
    super()
    this.state = {
      books: []
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
      })
      .catch((err) => {
        this.setError(err)
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

  render () {
    return (
      <Container>
        <ErrorHandler error={ this.state.error }/>
        <Navigation />
        <Header />
        <BookForm id="bookForm" submitBook={ this.submitBook }/>
        <BookList books={ this.state.books }/>
        <BooksContainer />
      </Container>
    )
  }
}

export default BookMeUp
