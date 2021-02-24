import BookModel from './model'
import mongoose from 'mongoose'

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

async function requestBook (data) {
  const id = new mongoose.Types.ObjectId(data.bookID)
  const book = await BookModel.findOne({ _id: id })

  book.users.push(data.user)
  const updatedBook = book.save()

  return updatedBook
}

module.exports = {
  getBookshelf,
  addBook,
  requestBook
}
