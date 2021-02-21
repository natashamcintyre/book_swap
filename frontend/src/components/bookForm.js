import React from 'react'
import axios from 'axios'

class BookForm extends React.Component {

  constructor(props){
    super()
    this.state = {
      author: '',
      isbn: '',
      postcode: '',
      phoneNumber: ''
    }

  }

  changeAuthorValue(change){
    this.setState({
      author: change
    })
  }

  changeIsbnValue(change){
    this.setState({
      isbn: change
    })
  }

  changePostcodeValue(change){
    this.setState({
      postcode: change
    })
  }

  changePhoneNumberValue(change){
    this.setState({
      phoneNumber: change
    })
  }

  processSubmit(e) {
    e.preventDefault();
    this.props.submitBook(this.props.bookTitle, this.state.author, this.state.isbn, this.state.postcode, this.state.phoneNumber);
    this.changeTitleValue('');
    this.changeAuthorValue('');
    this.changeIsbnValue('');
    this.changePostcodeValue('');
    this.changePhoneNumberValue('');
  }

  render() {
    return (
      <div className="add_book">
        <form id="book_form" onSubmit={ (e) => this.processSubmit(e) }>
          <input type="text" name="ISBN" id="ISBN" placeholder="ISBN"  onChange={(e) => this.changeIsbnValue(e.target.value)} value={this.state.isbn} />
          <input type="text" name="title" id="title" placeholder="Title" value={this.props.bookTitle} />
          <input type="text" name="author" id="author" placeholder="Author" onChange={(e) => this.changeAuthorValue(e.target.value)} value={this.state.author} />
          <input type="text" name="phone_number" id="phone_number" placeholder="Phone number" onChange={(e) => this.changePhoneNumberValue(e.target.value)} value={this.state.phoneNumber} />
          <input type="text" name="postcode" id="postcode" placeholder="Postcode" onChange={(e) => this.changePostcodeValue(e.target.value)} value={this.state.postcode} />
          <button type="submit" name="submit" id="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BookForm
