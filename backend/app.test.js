"use strict";

import { expect } from "chai";
import BookApp from './app.js'

describe("app", function() {
  let testApp;
  testApp = new BookApp

  it('has a bookshelf', function() {
    expect(testApp.bookshelf).to.be.an('array')
  });

  describe("#addBook", function() {
    beforeEach( () => {
      testApp.addBook('Just So Stories', 'Rudyard Kipling', 9780192822765, 'test_postcode', 'test_phoneNumber')
    })

    it('adds a book to bookshelf with a title', function() {
      expect(testApp.getBookshelf()[0].title).to.equal('Just So Stories')
    });

    it('adds a book to bookshelf with a author', function() {
      expect(testApp.getBookshelf()[0].author).to.equal('Rudyard Kipling')
    });

    it('adds a book to bookshelf with a ISBN', function() {
      expect(testApp.getBookshelf()[0].isbn).to.equal(9780192822765)
    });

    it('adds a book to bookshelf with a postcode', function() {
      expect(testApp.getBookshelf()[0].postcode).to.equal('test_postcode')
    });

    it('adds a book to bookshelf with a phoneNumber', function() {
      expect(testApp.getBookshelf()[0].phoneNumber).to.equal('test_phoneNumber')
    });

    it('adds a book to bookshelf with an id', function() {
      expect(testApp.getBookshelf()[0].id).to.equal(1)
    });
  });
});
