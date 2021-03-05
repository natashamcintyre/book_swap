# Book Me Up
A web application to allow users to offer books to share with the community.

![Home Screen](https://github.com/argy-bargy/book_swap/blob/main/screenshots/Screenshot%202021-03-01%20at%2015.28.59.png)

## Motivation
To demonstrate the ability to build a high quality single page web app, in a new framework as part of a team practising agile development that is focused on thorough test driven development process. Also, to enjoy ourselves.

## Features
Key Features:

* Add a book to lend with a barcode scanner
* Search for books by any keyword in the free search field.
* See details of each book
* See 'virtual library card' of prior readers
* Request to borrow a book from the community library

## Build status
[![Build Status](https://travis-ci.com/argy-bargy/book_swap.svg?branch=main)](https://travis-ci.com/argy-bargy/book_swap)

## Installation

**Install locally**\
You will need npm, which is installed with Node.js. Please visit the [Node.js website](https://nodejs.org/en/download/) to download.

To use locally, clone this repo, then:
```
$ cd book_swap/backend
$ npm install
$ cd ../frontend
$ npm install
```

**Install database**\
You will need homebrew, if you don't please install [Homebrew](https://brew.sh/).\
Run:\
```
$ brew tap mongodb/brew
$ brew install mongodb-community
```

Then:\
MacOS Catalina or above:
```
$ sudo mkdir -p /System/Volumes/Data/data/db
$ sudo chown -R `id -un` /System/Volumes/Data/data/db
```

Or:\
Pre Catalina:
```
$ sudo mkdir -p /data/db
$ sudo chown -R `id -un` /data/db
```

## How to use?
Make sure the database is running, then use separate terminals to start the backend server and the frontend server.

**Ensure database is running**\
To check database is running:
```$ brew services list```

To start the database:
```$ brew services run mongodb-community```

To stop MongoDB:
```$ brew services stop mongodb-community```

**Start backend server**\
Terminal 1:
```
$ cd backend
$ npm start
```

**Start frontend server**\
Terminal 2:
```
$ cd frontend
$ npm start
```

## Tech/framework used
**Built with**
MERN stack
- [React](https://reactjs.org)
- [Node.JS](https://nodejs.org)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)

**Tested with**
- [Mocha](https://mochajs.org)
- [Chai](https://www.chaijs.com)
- [Enzyme (React 17 adapter)](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17)
- [Cypress](https://www.cypress.io)

**Written with**
- [Atom](https://atom.io)
- [Visual Studio Code](https://code.visualstudio.com)

## Tests
Cypress for feature tests, Enzyme for React unit tests, and Mocha-Chai for Node.js tests.

Run the following for backend tests (test coverage is included)
```
$ cd backend
$ npm test
```

Run the following for frontend tests
```
$ cd frontend
$ npm test
```

Run the following to include coverage for frontend tests:
```
$ cd frontend
$ npm test -- --coverage --watchAll=false
```

Run the following to open the test runner for end to end testing:
```
$ cd backend
$ npm start
$ cd ../frontend
$ npm start
$ npx cypress open
```

### Linting
We are using ESlint for frontend and backend linting.

To run from each of the project directories:

`$ npx eslint .`

## Code Example
Frontend App.JS:
```js
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
          <Navigation submitSearchString={ this.submitSearchString } logout={ this.logout } currentUser={ localStorage.success }/>
          <Switch>
            <Route path="/sign-up">
              <HeaderUserNew addUser={ this.addUser } bookTitle={ this.state.bookTitle } bookAuthor={ this.state.bookAuthor } submitISBN={ this.submitISBN } submitBook={ this.submitBook } />
            </Route>
            <Route path="/sign-in">
              <HeaderUser signinUser={ this.signinUser } bookTitle={ this.state.bookTitle } bookAuthor={ this.state.bookAuthor } submitISBN={ this.submitISBN } submitBook={ this.submitBook } />
            </Route>
            <Route exact path="/">
              <Header bookTitle={ this.state.bookTitle } bookAuthor={ this.state.bookAuthor } submitISBN={ this.submitISBN } submitBook={ this.submitBook } />
              <BookList books={ this.state.books } requestBook= { this.requestBook }/>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default BookMeUp
```

Backend app.js:
```javascript
import express from 'express'
import cors from 'cors'
import bodyParse from 'body-parser'
import mongoose from 'mongoose'

import config from './config/config'
import passport from './config/passportSetup'

const session = require('express-session')
const MongoStore = require('connect-mongo').default

require('dotenv').config()
const routes = require('./lib/routes.js')
const app = express()

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useFindAndModify: false
})

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', config.db)
})

db.on('error', err => {
  console.error('connection error:', err)
})

app.use(bodyParse.json())
app.use(cors())

const sessionStore = MongoStore.create({ mongoUrl: config.db, collection: 'sessions' })

app.use(session({
  secret: 'very very secret',
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}))

app.use(passport.initialize())
app.use(passport.session())

// Routes must be after passport and session set up
app.use('/user-new', routes)
app.use('/user', routes)
app.use('/login', routes)
app.use('/', routes)
app.use('/search', routes)
app.use('/request-book', routes)

// this was for heroku deployment testing
app.get('/homepage', (req, res) => {
  res.send('This is our homepage')
})

const server = app.listen(config.port, function () {
  console.log('App listening on port ' + config.port)
})

export default server
```

## Code style
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

## API Reference
This project utilizes the OpenLibrary Books API: https://openlibrary.org/dev/docs/api/books, to request all related book information.

## Credits

Team argy-bargy:\
[Aman Tank](https://github.com/AmanTank187)\
[Cathal Lavelle](https://github.com/calavell)\
[Chris Whitehouse](https://github.com/chriswhitehouse)\
[Kiki Dawson](https://github.com/kikidawson)\
[Natasha McIntyre](https://github.com/natashamcintyre")\
[Will Dixon](https://github.com/WillDixon93)
