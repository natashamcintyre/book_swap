// import logo from './logo.svg';
// import './App.css';

function MyApp() {
  return (
    <div className="container">
      <div className="add_book">
        <input type="text" name="title" id="title" placeholder="Title" />
        <input type="text" name="author" id="author" placeholder="Author" />
        <input type="text" name="ISBN" id="ISBN" placeholder="ISBN" />
        <input type="text" name="phone_number" id="phone_number" placeholder="Phone number" />
        <input type="text" name="postcode" id="postcode" placeholder="Postcode" />
        <button type="submit" name="submit" id="submit">Submit</button>
      </div>
      <div className="book_list">
        <ul id="books_list">
          Books
        </ul>
      </div>
    </div>
  );
}

export default MyApp;
