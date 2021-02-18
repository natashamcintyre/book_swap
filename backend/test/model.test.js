'use strict'

import { expect } from 'chai'
import BookApp from '../lib/model.js'

describe('app', function () {
  const testApp = new BookApp()
  const testBook = {
    title: 'Just So Stories',
    author: 'Rudyard Kipling',
    isbn: 9780192822765,
    postcode: 'test_postcode',
    phoneNumber: 'test_phoneNumber'
  }

  it('has a bookshelf', () => {
    expect(testApp.bookshelf).to.be.an('array')
  })

  describe('#addBook', () => {
    beforeEach(() => {
      testApp.addBook(testBook)
    })

    afterEach(() => {
      testApp.bookshelf = []
      testApp.id_counter = 1
    })

    it('adds a book to bookshelf with a title', () => {
      expect(testApp.getBookById(1).title).to.equal('Just So Stories')
    })

    it('adds a book to bookshelf with a author', () => {
      expect(testApp.getBookById(1).author).to.equal('Rudyard Kipling')
    })

    it('adds a book to bookshelf with a ISBN', () => {
      expect(testApp.getBookById(1).isbn).to.equal(9780192822765)
    })

    it('adds a book to bookshelf with a postcode', () => {
      expect(testApp.getBookById(1).postcode).to.equal('test_postcode')
    })

    it('adds a book to bookshelf with a phoneNumber', () => {
      expect(testApp.getBookById(1).phoneNumber).to.equal('test_phoneNumber')
    })

    it('adds a book to bookshelf with an id', () => {
      expect(testApp.getBookById(1).id).to.equal(1)
    })

    it('adds a book to bookshelf with an availability', () => {
      expect(testApp.getBookById(1).availability).to.equal(true)
    })

    it('rejects incomplete books', () => {
      const testApp2 = new BookApp()
      expect(() => { testApp2.addBook({ title: '', author: 'Rudyard Kipling', isbn: 9780192822765, postcode: 'test_postcode', phoneNumber: 'test_phoneNumber' }) }).to.throw('Invalid book entry')
      expect(() => { testApp2.addBook({ title: 'Just So Stories', author: '', isbn: 9780192822765, postcode: 'test_postcode', phoneNumber: 'test_phoneNumber' }) }).to.throw('Invalid book entry')
      expect(() => { testApp2.addBook({ title: 'Just So Stories', author: 'Rudyard Kipling', isbn: null, postcode: 'test_postcode', phoneNumber: 'test_phoneNumber' }) }).to.throw('Invalid book entry')
      expect(() => { testApp2.addBook({ title: 'Just So Stories', author: 'Rudyard Kipling', isbn: 9780192822765, postcode: '', phoneNumber: 'test_phoneNumber' }) }).to.throw('Invalid book entry')
      expect(() => { testApp2.addBook({ title: 'Just So Stories', author: 'Rudyard Kipling', isbn: 9780192822765, postcode: 'test_postcode', phoneNumber: '' }) }).to.throw('Invalid book entry')
    })
  })

  describe('#update_availability', () => {
    beforeEach(() => {
      testApp.addBook(testBook)
    })

    afterEach(() => {
      testApp.bookshelf = []
      testApp.id_counter = 1
    })

    it('updates availability from true to false', () => {
      testApp.updateAvailabilityById(1)
      expect(testApp.getBookById(1).availability).to.equal(false)
    })

    it('updates availability from false to true', () => {
      testApp.updateAvailabilityById(1)
      testApp.updateAvailabilityById(1)
      expect(testApp.getBookById(1).availability).to.equal(true)
    })

    it('rejects false update', () => {
      const testApp2 = new BookApp()
      expect(() => { testApp2.updateAvailabilityById(1) }).to.throw('Book not found on bookshelf')
    })
  })

  describe('#delete method', () => {
    beforeEach(() => {
      testApp.addBook(testBook)
    })

    afterEach(() => {
      testApp.bookshelf = []
    })

    it('delete method deletes a message', () => {
      testApp.deleteBookById(1)
      expect(testApp.bookshelf.length).to.equal(0)
    })

    it('ids are always unique', () => {
      testApp.addBook({ title: 'testTitle2', author: 'testAuthor2', isbn: 123, postcode: 'testPostcode2', phoneNumber: 'testPhoneNumber2' })
      testApp.deleteBookById(1)
      testApp.addBook({ title: 'testTitle3', author: 'testAuthor3', isbn: 1234, postcode: 'testPostcode3', phoneNumber: 'testPhoneNumber3' })
      expect(testApp.bookshelf[1].id).to.equal(3)
    })

    it('app deletes correctly', () => {
      testApp.addBook({ title: 'testTitle2', author: 'testAuthor2', isbn: 123, postcode: 'testPostcode2', phoneNumber: 'testPhoneNumber2' })
      testApp.addBook({ title: 'testTitle3', author: 'testAuthor3', isbn: 1234, postcode: 'testPostcode3', phoneNumber: 'testPhoneNumber3' })
      testApp.deleteBookById(1)
      testApp.deleteBookById(3)
      expect(testApp.getBookById(2).id).to.equal(2)
    })

    it('app updates correctly', () => {
      testApp.addBook({ title: 'testTitle2', author: 'testAuthor2', isbn: 123, postcode: 'testPostcode2', phoneNumber: 'testPhoneNumber2' })
      testApp.deleteBookById(1)
      testApp.updateAvailabilityById(2)
      expect(testApp.getBookById(2).availability).to.equal(false)
    })

    it('errors if no message to delete', () => {
      const testApp2 = new BookApp()
      expect(() => { testApp2.deleteBookById(1) }).to.throw('Book not found on bookshelf')
    })
  })

  describe('#mock database', () => {
    it('reads/writes to given file path', () => {
      const testFileApp = new BookApp('///json//testBooks.json')
      expect(testFileApp.bookshelf.length).to.equal(1)

      testFileApp.addBook(testBook)
      expect(testFileApp.bookshelf.length).to.equal(2)

      const testFileApp2 = new BookApp('///json//testBooks.json')
      expect(testFileApp2.bookshelf.length).to.equal(2)

      testFileApp2.deleteBookById(2)
      const testFileApp3 = new BookApp('///json//testBooks.json')
      expect(testFileApp3.bookshelf.length).to.equal(1)
    })
  })
})
