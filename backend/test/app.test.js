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
})
