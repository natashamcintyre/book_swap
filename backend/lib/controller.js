import BookModel from './model'

function getBookshelf() {
  return BookModel.find()

}

function addBook(data) {
  let newBook = new BookModel({data: data})
  return newBook.save()
}

module.exports = {
  getBookshelf,
  addBook
}
