import { expect } from "chai";
import BookApp from './app.js'

describe("app", function() {
  let testApp;
  testApp = new BookApp

  it('has a bookshelf', function() {
    expect(testApp.bookshelf).to.be.an('array')
  })

  describe("#addBook", function() {
    it('adds a book to bookshelf', function() {
      testApp.addBook('Just So Stories')
      expect(testApp.bookshelf[0]).to.equal('Just So Stories')
    })
  })

})
