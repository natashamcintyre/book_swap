import BookModel from './model'
import mongoose from 'mongoose'
// var ObjectId = require('mongodb').ObjectId
function getBookshelf (searchString) {
  if (searchString) {
    return BookModel.find({ $text: { $search: searchString } })
  } else {
    return BookModel.find()
  }
}

function addBook (data) {
  const newBook = new BookModel({ book: data.book, users: data.user })
  const savedBook = newBook.save()
  return savedBook
}

function requestBook (data) {
  const bookID = data.bookID 
  console.log(bookID)
  const user = data.user
  console.log(user)
  
  const book = BookModel.find({
    id: mongoose.ObjectId(BookID)
  })
  console.log(book)
  

}

module.exports = {
  getBookshelf,
  addBook,
  requestBook
}
