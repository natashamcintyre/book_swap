import React from 'react'
import PropTypes from 'prop-types'
import BarcodeScanner from './barcode/barcodeScanner.js'
import {
  HashRouter
} from 'react-router-dom'

class BookSearch extends React.Component {
  constructor () {
    super()
    this.state = {
      isbn: ''
    }
  }

  changeIsbnValue (change) {
    this.setState({
      isbn: change
    })
  }

  processSearch (e) {
    e.preventDefault()
    this.props.submitISBN(this.state.isbn)
    this.changeIsbnValue('')
  }

  render () {
    return (
      <HashRouter>
      <div className="add_book">
        <BarcodeScanner changeIsbnValue={ this.changeIsbnValue.bind(this) } />
        <form id="book_search" onSubmit={ (e) => this.processSearch(e) }>
          <input type="text" name="ISBN" id="ISBNSearch" placeholder="ISBN" onChange={(e) => this.changeIsbnValue(e.target.value)} value={this.state.isbn} />
          <button type="submit" name="search" id="search">Find My Book!</button>
        </form>
      </div>
      </HashRouter>
    )
  }
}

BookSearch.propTypes = {
  submitISBN: PropTypes.func
}

export default BookSearch
