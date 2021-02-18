import BookApp from './model.js'
let bookApp

if (process.env.npm_lifecycle_event === 'test') {
  bookApp = new BookApp('///json//testBooks.json')
} else {
  bookApp = new BookApp('///json//books.json')
}

function getBookshelf () {
  return new Promise((resolve, reject) => {
    const result = bookApp.getBookshelf()
    if (result !== []) {
      resolve(result)
    } else {
      reject(result)
    }
  })
}

function addBook (data) {
  return new Promise((resolve, reject) => {
    const result = bookApp.addBook(data)
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
