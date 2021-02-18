'use strict'

import mongoose from 'mongoose';

let BookSchema = mongoose.Schema({
  data: Object
})

BookSchema.post('validate', function(doc, next) {
  if (!doc.data.title || !doc.data.author || !doc.data.isbn || !doc.data.postcode || !doc.data.phoneNumber) {
    next('Invalid book entry')
  };
  next()
})

BookSchema.post('find', function(doc, next){
  if (doc.length === 0){
    next('No books in database')
  };
  next()
})

let BookModel = mongoose.model('books',BookSchema);

export default BookModel; 
