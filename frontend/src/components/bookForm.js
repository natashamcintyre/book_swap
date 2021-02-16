import React from 'react';

class BookForm extends React.Component {
  render() {
    return (
      <div className="add_book">
        <form id="book_form">
          <input type="text" name="title" id="title" placeholder="Title" />
          <input type="text" name="author" id="author" placeholder="Author" />
          <input type="text" name="ISBN" id="ISBN" placeholder="ISBN" />
          <input type="text" name="phone_number" id="phone_number" placeholder="Phone number" />
          <input type="text" name="postcode" id="postcode" placeholder="Postcode" />
          <button type="submit" name="submit" id="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BookForm
