import request from 'supertest'
import { expect } from 'chai'
import app from '../app.js'

describe('Books API endpoint tests', () => {
  it('submit a book', (done) => {
    const data = {
      title: 'Just So Stories',
      author: 'Rudyard Kipling',
      isbn: 9780192822765,
      postcode: 'test_postcode',
      phoneNumber: 'test_phoneNumber'
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
        expect(res.body[0].title).to.equal('Just So Stories')
        done()
      })
  })

  it('submit wrong book data and get an error', (done) => {
    const data = {
      title: 'Just So Stories',
      isbn: 9780192822765,
      postcode: 'test_postcode',
      phoneNumber: 'test_phoneNumber'
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

  it('gets from backend bookshelf', (done) => {
    const res = request(app)
      .get('/')
    res.expect([{ id: 1, title: 'Just So Stories', author: 'Rudyard Kipling', isbn: 9780192822765, postcode: 'test_postcode', phoneNumber: 'test_phoneNumber', availability: true }])
    res.expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        expect(res.body.length).to.equal(1)
        done()
      })
  })
})
