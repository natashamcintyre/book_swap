import React from 'react'
import PropTypes from 'prop-types'

class BookSearchToo extends React.Component {
  constructor () {
    super()
    this.state = {
      searchString: ''
    }
  }

  changeSearchStringValue (change) {
    this.setState({
      searchString: change
    })
  }

  processSearch (e) {
    e.preventDefault()
    this.props.submitSearchString(this.state.searchString)
  }

  render () {
    return (
      <div className="searchform">
        <form id='book_search_too' className="form-inline search-form" onSubmit={ (e) => this.processSearch(e) }>
          <input id='book_search_too_input' className="form-control mr-sm-2" type="search" placeholder="Search author, title, ISBN number... " aria-label="Search" onChange={(e) => this.changeSearchStringValue(e.target.value)} value={this.state.searchString}/>
          <button id='book_search_too_button' className="btn btn-outline-secondary btn-sm">Find a book</button>
        </form>
      </div>
    )
  }
}

BookSearchToo.propTypes = {
  submitSearchString: PropTypes.func
}

export default BookSearchToo
