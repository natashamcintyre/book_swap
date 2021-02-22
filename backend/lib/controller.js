import BookModel from './model'

function getBookshelf () {
  return BookModel.find()
}

function addBook (data) {
  const newBook = new BookModel({ data: data })
  const savedBook = newBook.save()
  return savedBook
}

module.exports = {
  getBookshelf,
  addBook
}
