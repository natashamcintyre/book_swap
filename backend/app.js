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
    this.writeToJson()
    return this.bookshelf
  }

  getBookshelf () {
    return this.bookshelf
  }

  getBookById (id) {
    return this.bookshelf.filter(book => book.id === id)[0]
  }

  updateAvailabilityById (id) {
    const index = this.bookshelf.findIndex(book => book.id === id)
    this.bookshelf[index].availability = this.bookshelf[index].availability !== true
    this.writeToJson()
    return this.bookshelf
  }

  deleteBookById (id) {
    this.bookshelf = this.bookshelf.filter(book => book.id != id)
    this.writeToJson()
    return this.bookshelf
  }

  writeToJson() {
    if (this.filepath) {
      const jsonItem = JSON.stringify(this.bookshelf)

      fs.writeFileSync(__dirname+path.normalize(this.filepath), jsonItem, (err) => {
        if (err) throw err;
      })
    }
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
