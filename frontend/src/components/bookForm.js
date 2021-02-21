import React from 'react'
import axios from 'axios'

class BookForm extends React.Component {

  constructor(props){
    super()
    this.state = {
      postcode: '',
      phoneNumber: ''
    }

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
    this.props.submitBook(this.props.bookTitle, this.props.bookAuthor, this.props.bookISBN, this.state.postcode, this.state.phoneNumber);
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
          <input type="text" name="ISBN" id="ISBN" placeholder="ISBN" value={this.props.bookISBN} />
          <input type="text" name="title" id="title" placeholder="Title" value={this.props.bookTitle} />
          <input type="text" name="author" id="author" placeholder="Author" value={this.props.bookAuthor } />
          <input type="text" name="phone_number" id="phone_number" placeholder="Phone number" onChange={(e) => this.changePhoneNumberValue(e.target.value)} value={this.state.phoneNumber} />
          <input type="text" name="postcode" id="postcode" placeholder="Postcode" onChange={(e) => this.changePostcodeValue(e.target.value)} value={this.state.postcode} />
          <button type="submit" name="submit" id="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BookForm
