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

    afterEach(() => {
      testApp.bookshelf = []
      testApp.id_counter = 1
    })

    it('adds a book to bookshelf with a title', function() {
      expect(testApp.getBookById(1).title).to.equal('Just So Stories')
    });

    it('adds a book to bookshelf with a author', function() {
      expect(testApp.getBookById(1).author).to.equal('Rudyard Kipling')
    });

    it('adds a book to bookshelf with a ISBN', function() {
      expect(testApp.getBookById(1).isbn).to.equal(9780192822765)
    });

    it('adds a book to bookshelf with a postcode', function() {
      expect(testApp.getBookById(1).postcode).to.equal('test_postcode')
    });

    it('adds a book to bookshelf with a phoneNumber', function() {
      expect(testApp.getBookById(1).phoneNumber).to.equal('test_phoneNumber')
    });

    it('adds a book to bookshelf with an id', function() {
      expect(testApp.getBookById(1).id).to.equal(1)
    });

    it('adds a book to bookshelf with an availability', function() {
      expect(testApp.getBookById(1).availability).to.equal(true)
    });
  });

  describe('#update_availability', function() {
    beforeEach( () => {
      testApp.addBook('Just So Stories', 'Rudyard Kipling', 9780192822765, 'test_postcode', 'test_phoneNumber')
    })

    afterEach(() => {
      testApp.bookshelf = []
      testApp.id_counter = 1
    })

    it('updates availability from true to false', function() {
      expect(testApp.updateAvailability(1)).to.equal(false)
    })

    it('updates availability from false to true', function() {
      testApp.updateAvailability(1)
      expect(testApp.updateAvailability(1)).to.equal(true)
    });
  });

  describe('#mock database', function() {
    it('app reads from given file path', function() {
      let testFileApp = new BookApp("/\///json/\//testBooks.json")
      expect(testFileApp.bookshelf.length).to.equal(1)
    })
  })
});
