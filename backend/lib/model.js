'use strict'

import mongoose from 'mongoose'

const BookSchema = mongoose.Schema({
  book: Object,
  users: Array
})

BookSchema.post('validate', function (doc, next) {
  if (!doc.book || !doc.users) {
    next('Invalid book entry')
  }
  next()
})

BookSchema.post('find', function (doc, next) {
  if (doc.length === 0) {
    next('No books in database')
  }
  next()
})

const BookModel = mongoose.model('books', BookSchema)

export default BookModel
