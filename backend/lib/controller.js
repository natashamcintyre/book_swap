let bookApp;

if (process.env.npm_lifecycle_event == "test") {
  bookApp = new BookApp(`/\///json/\//testBooks.json`)
} else {
  bookApp = new BookApp(`/\///json/\//books.json`)
}

import BookApp from './model.js'

function getBookshelf(){
  return new Promise((resolve, reject) => {
    var result = bookApp.getBookshelf()
    if (result !== []) {
      resolve(result)
    } else {
      reject(result)
    }
  })
}

module.exports = {
  getBookshelf
}