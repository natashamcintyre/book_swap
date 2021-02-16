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

  describe('delete method', function() {
    beforeEach( () => {
      testApp.addBook('Just So Stories', 'Rudyard Kipling', 9780192822765, 'test_postcode', 'test_phoneNumber')
    })

    afterEach(() => {
      testApp.bookshelf = []
      testApp.id_counter = 1
    })

    it("delete method deletes a message", function() {
      testApp.delete(1);
      expect(testApp.bookshelf.length).to.equal(0);
    });

    it("id's are always unique", function() {
      testApp.addBook('testTitle2', 'testAuthor2', 123, 'testPostcode2', 'testPhoneNumber2')
      testApp.delete(2)
      testApp.addBook('testTitle3', 'testAuthor3', 1234, 'testPostcode3', 'testPhoneNumber3')
      expect(testApp.bookshelf[1].id).to.equal(3)
    });

    it("app deletes correctly", function() {
      testApp.addBook('testTitle2', 'testAuthor2', 123, 'testPostcode2', 'testPhoneNumber2')
      testApp.addBook('testTitle3', 'testAuthor3', 1234, 'testPostcode3', 'testPhoneNumber3')
      testApp.delete(1)
      testApp.delete(3)
      expect(testApp.getBookById(2).id).to.equal(2)
    });

    it("app updates correctly", function() {
      testApp.addBook('testTitle2', 'testAuthor2', 123, 'testPostcode2', 'testPhoneNumber2')
      testApp.delete(1)
      testApp.updateAvailability(2)
      expect(testApp.getBookById(2).availability).to.equal(false)
    });
  })

  describe('#mock database', function() {
    it('reads/writes to given file path', function() {
      let testFileApp = new BookApp("/\///json/\//testBooks.json")
      expect(testFileApp.bookshelf.length).to.equal(0)

      testFileApp.addBook('Just So Stories', 'Rudyard Kipling', 9780192822765, 'test_postcode', 'test_phoneNumber')
      expect(testFileApp.bookshelf.length).to.equal(1)

      let testFileApp2 = new BookApp("/\///json/\//testBooks.json")
      expect(testFileApp2.bookshelf.length).to.equal(1)

      testFileApp2.delete(1)
      let testFileApp3 = new BookApp("/\///json/\//testBooks.json")
      expect(testFileApp3.bookshelf.length).to.equal(0)
    })
  })
});
