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
    it('adds a book to bookshelf with a title', function() {
      testApp.addBook('Just So Stories')
      expect(testApp.getBookshelf()[0].title).to.equal('Just So Stories')
    });

    it('adds a book to bookshelf with an id', function() {
      testApp.addBook('Just So Stories')
      expect(testApp.getBookshelf()[0].id).to.equal(1)
    });
  });
});
