class BookApp {
  constructor() {
    this.bookshelf = []
  }

  addBook(title) {
    this.bookshelf.push(title)
    return title
  }
}

export default BookApp
