// import logo from './logo.svg';
// import './App.css';

function MyApp() {
  return (
    <div className="App">
      <input type="text" name="title" id="title" placeholder="Title" />
      <input type="text" name="author" id="author" placeholder="Author" />
      <input type="text" name="ISBN" id="ISBN" placeholder="ISBN" />
      <input type="text" name="phone_number" id="phone_number" placeholder="Phone number" />
      <input type="text" name="postcode" id="postcode" placeholder="Postcode" />
      <button type="submit" name="submit" id="submit">Submit</button>
    </div>
  );
}

export default MyApp;
