'use strict'

class BookApp {
  constructor () {
    this.bookshelf = []
    this.id_counter = 1
  }

  getBookshelf () {
    return this.bookshelf
  }

  addBook (title, author, isbn, postcode, phoneNumber) {
    const book = {
      id: this.id_counter,
      title: title,
      author: author,
      isbn: isbn,
      postcode: postcode,
      phoneNumber: phoneNumber,
      availability: true
    }
    this.bookshelf.push(book)
    this.id_counter++
    return book
  }

  updateAvailability (id) {
    const index = this.bookshelf.findIndex(book => book.id === id)
    this.bookshelf[index].availability = this.bookshelf[index].availability !== true
    return this.bookshelf[index].availability
  }
}

export default BookApp
