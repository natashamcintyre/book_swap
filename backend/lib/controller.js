import BookModel from './model'

function getBookshelf () {
  return BookModel.find()
}

function addBook (data) {
  const newBook = new BookModel({ book: data.book, users: data.user })
  const savedBook = newBook.save()
  return savedBook
}

module.exports = {
  getBookshelf,
  addBook
}
