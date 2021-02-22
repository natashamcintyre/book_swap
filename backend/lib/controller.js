import BookModel from './model'

function getBookshelf () {
  return BookModel.find()
}

function addBook (data) {
  console.log('inside add book')
  const newBook = new BookModel({ book: data.book, users: data.user })
  console.log(newBook)
  const savedBook = newBook.save()
  return savedBook
}

module.exports = {
  getBookshelf,
  addBook
}
