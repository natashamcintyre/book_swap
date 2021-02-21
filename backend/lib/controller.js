import BookModel from './model'

function getBookshelf() {
  return BookModel.find()
}

function addBook(data) {
  let newBook = new BookModel({data: data})
  let savedBook = newBook.save()
  return savedBook
}

module.exports = {
  getBookshelf,
  addBook
}
