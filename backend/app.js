'use strict'
import fs from 'fs'
import path from 'path'

class BookApp {
  constructor (filepath) {
    // this.bookshelf = []
    this.id_counter = 1
    this.filepath = filepath
    this.bookshelf = filepath ? this.readFromJson() : []
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

  getBookshelf () {
    return this.bookshelf
  }

  getBookById (id) {
    return this.bookshelf.filter(book => book.id === id)[0]
  }

  updateAvailability (id) {
    const index = this.bookshelf.findIndex(book => book.id === id)
    this.bookshelf[index].availability = this.bookshelf[index].availability !== true
    return this.bookshelf[index].availability
  }

  readFromJson(){
    return JSON.parse(fs.readFileSync(
      __dirname+path.normalize(this.filepath),"utf8",(err,data)=>{
      if (err) throw err
      })
    )
   }
}

export default BookApp
