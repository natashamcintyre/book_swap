"use strict";

class BookApp {
  constructor() {
    this.bookshelf = [],
    this.id_counter = 1
  }

  getBookshelf() {
    return this.bookshelf
  }

  addBook(title, author, isbn, postcode, phoneNumber) {
    let book = {
      id: this.id_counter,
      title: title,
      author: author,
      isbn: isbn,
      postcode: postcode,
      phoneNumber: phoneNumber
    }
    this.bookshelf.push(book)
    this.id_counter ++
    return book
  }
}

export default BookApp
