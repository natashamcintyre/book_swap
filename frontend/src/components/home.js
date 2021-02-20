import React from 'react'
import ErrorHandler from './errorHandler.js'
import BookForm from './bookForm.js'
import BookList from './bookList.js'

import axios from 'axios'
const PORT = 'http://localhost:3001'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount(){
    this.getBooks()
  }

  setBooks(books){
    this.setState({
      books: books
    })
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

  setError(error) {
    this.setState({
      error: error
    })
  }

  render() {
    return(
      <div>
        <ErrorHandler error={ this.state.error }/>
        <BookForm id="bookForm" submitBook={ this.submitBook }/>
        <BookList books={ this.state.books }/>
      </div>
  )}
 }

export default Home;
