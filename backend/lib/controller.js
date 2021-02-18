let bookApp;

if (process.env.npm_lifecycle_event == "test") {
  bookApp = new BookApp(`/\///json/\//testBooks.json`)
} else {
  bookApp = new BookApp(`/\///json/\//books.json`)
}

import BookApp from './model.js'

function getBookshelf() {
  return new Promise((resolve, reject) => {
    var result = bookApp.getBookshelf()
    if (result !== []) {
      resolve(result)
    } else {
      reject(result)
    }
  })
}

function addBook(data) {
  console.log(`in controller addBook, data is ${data}`)
  return new Promise((resolve, reject) => {
    console.log(`in promise`)
    var result = bookApp.addBook(data)
    if (result !== []) {
      resolve(result)
    } else {
      reject(result)
    }
  })
}

module.exports = {
  getBookshelf,
  addBook
}
