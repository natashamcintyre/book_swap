'use strict'
import fs from 'fs'
import path from 'path'

class BookApp {
  constructor (filepath) {
    this.id_counter = 1
    this.filepath = filepath
    this.bookshelf = filepath ? this.readFromJson() : []
  }

  addBook (title, author, isbn, postcode, phoneNumber) {
    if (title && author && isbn && postcode && phoneNumber) {
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
    let index = this.bookshelf.findIndex(book => book.id === id)
    if (index >= 0) {
      this.bookshelf[index].availability = this.bookshelf[index].availability !== true
      this.writeToJson()
      return this.bookshelf
    } else {
      throw 'Book not found on bookshelf'
    }
  }

  deleteBookById (id) {
    let index = this.bookshelf.findIndex(book => book.id === id)
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
