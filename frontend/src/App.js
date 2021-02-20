import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BookList from './components/bookList.js'
import BookForm from './components/bookForm.js'
import ErrorHandler from './components/errorHandler.js'
import Navigation from './components/navigation.js'
import Header from './components/header.js'
import BooksContainer from './components/books_container.js'
import BookSearch from './components/bookSearch.js'

import axios from 'axios'
const PORT = 'http://localhost:3001'
const OPENLIBRARY = 'https://openlibrary.org'

class BookMeUp extends Component {
  constructor(){
    super()
    this.state = {
      books: []
    }
  }

  getBooks = () => {
    axios.get(`${PORT}/`)
    .then((result)=>{
      this.setBooks(result.data)
      })
    .catch((err)=>{
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
    .then((result)=>{
      this.getBooks()
    })
    .catch((err)=>{
      this.setError(err)
    })
  }

  submitISBN = (isbn) => {
    axios.get(`${OPENLIBRARY}/isbn/${isbn}.json`, {

    })
    .then((result) =>{
      this.titleParse(result)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  setError(error){
    this.setState({
      error: error
    })
  }

  setBooks(books){
    this.setState({
      books: books
    })
  }

  componentDidMount(){
    this.getBooks()
  }

  titleParse(result) {
    console.log(result.data.title)
    this.setState({
      bookTitle: result.data.title
    })
  }

  render() {
    console.log(this.state.bookTitle)
    return (
      <div className="container">
        <ErrorHandler error={ this.state.error }/>
        <Navigation />
        <Header />
        <BookSearch id="bookSearch" submitISBN={ this.submitISBN } bookTitle={ this.bookTitle }/>
        <div id="temp_title" >{this.state.bookTitle}</div>
        <BookForm id="bookForm" submitBook={ this.submitBook }/>
        <BookList books={ this.state.books }/>
        <BooksContainer />
      </div>
    );
  }
}

export default BookMeUp;
