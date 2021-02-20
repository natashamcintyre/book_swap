import React, { Component } from 'react'
// import BookList from './components/bookList.js'
// import BookForm from './components/bookForm.js'
// import ErrorHandler from './components/errorHandler.js'
import Navigation from './components/navigation.js'
import Header from './components/header.js'
import Home from './components/home.js'
import BooksContainer from './components/books_container.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


// import axios from 'axios';
// const PORT = 'http://localhost:3001';

class BookMeUp extends Component {
  constructor(){
    super()
  }

  
  render() {
    return (
      <div className="container">
        <Navigation />
        <Header />
        <Home />
        {/* <BooksContainer /> */}
      </div>
    );
  }
}

export default BookMeUp;

{/* <Router>
<ErrorHandler />
<Navigation />
<Switch >
	<Route path=’/’>
		<Home />
	</Route>
<Route path=’/signup’>
		<Home />
	</Route>
</Switch>
</Router> */}
