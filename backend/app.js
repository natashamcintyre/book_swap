"use strict";

class BookApp {
  constructor() {
    this.bookshelf = []
  }

  getBookshelf() {
    return this.bookshelf
  }

  addBook(title) {
    this.bookshelf.push(title)
    return title
  }
}

export default BookApp
