
// import BookApp from './model.js'
import BookModel from './model'

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
  let newBook = new BookModel({data: data})
  return newBook.save()
  // return new Promise((resolve, reject) => {
  //   console.log(`in promise`)
  //   var result = bookApp.addBook(data)
  //   if (result !== []) {
  //     resolve(result)
  //   } else {
  //     reject(result)
  //   }
  // })
}

module.exports = {
  getBookshelf,
  addBook
}
