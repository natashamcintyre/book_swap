import BookModel from './model'

function getBookshelf (searchString) {
  console.log('hello from getBookShelf')
  console.log(searchString)

  if (searchString) {
    return BookModel.find( { $text: { $search: searchString} } )
  } else {
    return BookModel.find()
  }

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
