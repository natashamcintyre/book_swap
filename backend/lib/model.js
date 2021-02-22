'use strict'

import mongoose from 'mongoose'

const BookSchema = mongoose.Schema({
  data: Object
})

BookSchema.post('validate', function (doc, next) {
  console.log('inside BookSchema Post')
  if (!doc.data.book || !doc.data.postcode || !doc.data.phoneNumber) {
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
