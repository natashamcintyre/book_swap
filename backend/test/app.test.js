import request from 'supertest'
import mongoose from 'mongoose'
import { expect } from 'chai'
import app from '../app.js'

import BookModel from '../lib/model'

describe('Books API endpoint tests', function () {
  before(async function () {
    await mongoose.connect('mongodb://localhost/testBooks', { useNewUrlParser: true, useFindAndModify: false })

    await BookModel.remove({})
  })

  it('submit a book', function (done) {
    const data = {
      book: JSON.stringify({ title: 'test_title', author: 'test_author' }),
      user: { username: 'brad', email: 'brad@example', location: 'postcode' }
    }

    const res = request(app)
      .post('/add-book')
      .send(data)
      .set('Accept', 'application/json')

    res.expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }

        const bookID = res.body._id

        expect(JSON.parse(res.body.book).title).to.equal('test_title')
        expect(res.body.users[0].username).to.equal('brad')
        done()
      })
  })

  it('submit wrong book data and get an error', function (done) {
    const data = {
      book: '',
      user: { username: 'brad', email: 'brad@example', location: 'BS3 2LH' }
    }
    const res = request(app)
      .post('/add-book')
      .send(data)
      .set('Accept', 'application/json')
    res.expect(404)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        expect(res.body).to.equal('Invalid book entry')
        done()
      })
  })

  it('gets from backend bookshelf', function (done) {
    const res = request(app)
      .get('/')

    res.expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }

        expect(res.body.length).to.equal(1)
        expect(JSON.parse(res.body[0].book)).to.deep.equal({ title: 'test_title', author: 'test_author' })
        done()
      })
  })

  it('gets from backend bookshelf with search', function (done) {
    const data = {
      book: JSON.stringify({ title: 'another_title', author: 'test_author' }),
      user: { username: 'brad', email: 'brad@example', location: 'postcode' }
    }

    let res = {}

    request(app)
      .post('/add-book')
      .send(data)
      .set('Accept', 'application/json')
      .then(
        res = request(app)
          .get('/search?searchString=test_title')
      )

    res.expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }

        expect(res.body.length).to.equal(1)
        expect(JSON.parse(res.body[0].book)).to.deep.equal({ title: 'test_title', author: 'test_author' })
        done()
      })
  })

  it('records a new user to an existing book', function (done) {
    const first_book_data = {
      book: JSON.stringify({ title: 'test_title', author: 'test_author' }),
      user: { username: 'brad', email: 'brad@example', location: 'postcode' }
    }

    let bookID = '';

    const res = request(app)
      .post('/add-book')
      .send(first_book_data)
      .set('Accept', 'application/json')


      res.expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }

          bookID = res.body._id

          const request_book_data = {
            bookID: bookID,
            user: { username: 'bob', email: 'bob@example', location: 'another_postcode' }
          }

          const result_two = request(app)
            .post('/request-book')
            .send(request_book_data)
            .set('Accept', 'application/json')

          result_two.expect(200)
            .end(function (err, result_two) {
              if (err) {
                return done(err)
              }

              expect(JSON.parse(result_two.body.book).title).to.equal('test_title')
              expect(result_two.body.users[result_two.body.users.length - 1].username).to.equal('bob')
              done()
            })
      })
    })
})
