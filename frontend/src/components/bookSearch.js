import React from 'react'
import axios from 'axios'

class BookSearch extends React.Component {
  constructor() {

  super()
  this.state = {
    isbn: ''
    }
  }

  changeIsbnValue(change) {
    this.setState({
      isbn:change
    })
  }

  processSearch(e) {
    console.log('inside search processSearch for BookSearch')
    e.preventDefault()
    this.props.submitISBN(this.state.isbn)
    this.changeIsbnValue('')
  }

  render() {
    console.log('inside bookSearch render')
    return (
      <div className="add_book">
        <form id="book_search" onSubmit={ (e) => this.processSearch(e) }>
          <input type="text" name="ISBN" id="ISBNSearch" placeholder="ISBN" onChange={(e) => this.changeIsbnValue(e.target.value)} value={this.state.isbn} />
          <button type="submit" name="search" id="search">Find My Book!</button>
        </form>
      </div>
  )}
}

export default BookSearch
