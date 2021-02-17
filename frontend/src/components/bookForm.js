import React from 'react';

class BookForm extends React.Component {

  constructor(){
    super()
    this.state = {
      currentTitle: '',
      currentAuthor: '',
      currentIsbn: '',
      currentPostcode: '',
      currentPhoneNumber: ''
    }
  }

  changeTitleValue(change){
    this.setState({
      currentTitle: change
    })
  }

  changeAuthorValue(change){
    this.setState({
      currentAuthor: change
    })
  }

  changeIsbnValue(change){
    this.setState({
      currentIsbn: change
    })
  }

  changePostcodeValue(change){
    this.setState({
      currentPostcode: change
    })
  }

  changePhoneNumberValue(change){
    this.setState({
      currentPhoneNumber: change
    })
  }

  processSubmit(e) {
    e.preventDefault();
    this.props.submitBook(this.state.currentTitle, this.state.currentAuthor, this.state.currentIsbn, this.state.currentPostcode, this.state.currentPhoneNumber);
    this.changeTitleValue('');
    this.changeAuthorValue('');
    this.changeIsbnValue('');
    this.changePostcodeValue('');
    this.changePhoneNumberValue('');
  }

  render() {
    return (
      <div className="add_book">
        <form ref='formRef' id="book_form" onSubmit={ (e) => this.processSubmit(e) }>
          <input type="text" name="title" id="title" placeholder="Title" onChange={(e) => this.changeTitleValue(e.target.value)} value={this.state.currentTitle} />
          <input type="text" name="author" id="author" placeholder="Author" onChange={(e) => this.changeAuthorValue(e.target.value)} value={this.state.currentAuthor} />
          <input type="text" name="ISBN" id="ISBN" placeholder="ISBN" onChange={(e) => this.changeIsbnValue(e.target.value)} value={this.state.currentIsbn} />
          <input type="text" name="phone_number" id="phone_number" placeholder="Phone number" onChange={(e) => this.changePhoneNumberValue(e.target.value)} value={this.state.currentPhoneNumber} />
          <input type="text" name="postcode" id="postcode" placeholder="Postcode" onChange={(e) => this.changePostcodeValue(e.target.value)} value={this.state.currentPostcode} />
          <button type="submit" name="submit" id="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BookForm
