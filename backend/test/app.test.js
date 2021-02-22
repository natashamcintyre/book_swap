import request from 'supertest'
import mongoose from 'mongoose'
import { expect } from 'chai'
import app from '../app.js'

describe('Books API endpoint tests', function () {
  before(function (done) {
    mongoose.connect('mongodb://localhost/testBooks', { useNewUrlParser: true, useFindAndModify: false }, function () {
      mongoose.connection.db.dropDatabase(function () {
        done()
      })
    })
  })

  it('submit a book', function (done) {
    const data = {
      book: { title: 'test_title', author: 'test_author' },
      user: { username: 'brad', email: 'brad@example', location: 'postcode' }
    }

    console.log('pre request')
    const res = request(app)
      .post('/add-book')
      .send(data)
      .set('Accept', 'application/json')

    res.expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }

        expect(res.body.book.title).to.equal('test_title')
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
        expect(res.body[0].book).to.deep.equal({ title: 'test_title', author: 'test_author' })
        done()
      })
  })
})
