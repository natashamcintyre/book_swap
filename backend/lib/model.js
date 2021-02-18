'use strict'
import fs from 'fs'
import path from 'path'

function newID (array) {
  if (array.length > 0) {
    return array[array.length - 1].id + 1
  } else {
    return 1
  }
}

class BookApp {
  constructor (filepath) {
    // this.id_counter = 1
    this.filepath = filepath
    this.bookshelf = filepath ? this.readFromJson() : []
  }

  addBook (data) {
    console.log('in model addBook')
    if (data.title && data.author && data.isbn && data.postcode && data.phoneNumber) {
      const book = {
        id: newID(this.bookshelf),
        title: data.title,
        author: data.author,
        isbn: data.isbn,
        postcode: data.postcode,
        phoneNumber: data.phoneNumber,
        availability: true
      }
      this.bookshelf.push(book)
      this.writeToJson()
      return this.bookshelf
    } else {
      throw 'Invalid book entry'
    }
  }

  getBookshelf () {
    return this.bookshelf
  }

  getBookById (id) {
    return this.bookshelf.filter(book => book.id === id)[0]
  }

  updateAvailabilityById (id) {
    const index = this.bookshelf.findIndex(book => book.id === id)
    if (index >= 0) {
      this.bookshelf[index].availability = this.bookshelf[index].availability !== true
      this.writeToJson()
      return this.bookshelf
    } else {
      throw 'Book not found on bookshelf'
    }
  }

  deleteBookById (id) {
    const index = this.bookshelf.findIndex(book => book.id === id)
    if (index >= 0) {
      this.bookshelf = this.bookshelf.filter(book => book.id !== id)
      this.writeToJson()
      return this.bookshelf
    } else {
      throw 'Book not found on bookshelf'
    }
  }

  writeToJson () {
    if (this.filepath) {
      const jsonItem = JSON.stringify(this.bookshelf)

      fs.writeFileSync(__dirname + path.normalize(this.filepath), jsonItem, (err) => {
        if (err) throw err
      })
    }
  }

  readFromJson () {
    return JSON.parse(fs.readFileSync(
      __dirname + path.normalize(this.filepath), 'utf8', (err, data) => {
        if (err) throw err
      })
    )
  }
}

export default BookApp
