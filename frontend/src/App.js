import React, { Component } from 'react'
import Navigation from './components/navigation.js'
import Header from './components/header.js'
import Home from './components/home.js'
import BooksContainer from './components/books_container.js'
import Users from './components/users.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class BookMeUp extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Header />
          <Users />
          <div class="routes">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Users} />
          </Switch>
          {/* <BooksContainer /> */}
        </div>
      </Router>
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
