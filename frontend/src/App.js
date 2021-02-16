// import logo from './logo.svg';
// import './App.css';
import BookList from './components/bookList.js'
import BookForm from './components/bookForm.js'

function MyApp() {
  return (
    <div className="container">
      <BookForm />
      <BookList />
    </div>
  );
}

export default MyApp;
