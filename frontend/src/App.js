// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import BookList from './components/bookList.js';
import BookForm from './components/bookForm.js';

import axios from 'axios';
const PORT = 'http://localhost:3001';

class BookMeUp extends Component {
  constructor(){
    super()
    this.state = {
      books: []
    }
  }

  getBooks=()=>{
    axios.get(`${PORT}/`)
    .then((result)=>{
      this.setState({
        books: result.data
      })
    })
  }

  submitBook = (title, author) => {
    // ADDRESS NEEDS CHECKING WITH BACKEND API
    axios.post(`${PORT}/add-book`, {
      title: title,
      author: author
    })
  }

  componentDidMount(){
    this.getBooks()
  }

  render() {
    return (
      <div className="container">
        <BookForm ref="bookFormRef" submitBook={ this.submitBook }/>
        <BookList />
      </div>
    );
  }
}

export default BookMeUp;
