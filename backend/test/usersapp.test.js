import request from 'supertest'
import mongoose from 'mongoose'
import { expect } from 'chai'
import app from '../app.js'

describe('Users API endpoint tests', function () {
  before(function (done) {
    mongoose.connect('mongodb://localhost/testBooks', { useNewUrlParser: true, useFindAndModify: false }, function () {
      mongoose.connection.db.dropDatabase(function () {
        done()
      })
    })
  })

  it('sign up', (done) => {
    const user = {
      username: 'username',
      email: 'email@example.com',
      password: 'password',
      passwordCheck: 'password',
      location: 'postcode'
    }
    const res = request(app)
      .post('/user-new')
      .send(user)
      .set('Accept', 'application/json')
    res.expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        expect(res.body.displayName).to.equal('username')
        done()
      })
  })

  it('errors if fields not complete', (done) => {
    const user = {
      username: 'username',
      password: 'password',
      passwordCheck: 'password',
      location: 'postcode'
    }
    const res = request(app)
      .post('/user-new')
      .send(user)
      .set('Accept', 'application/json')
    res.expect(400)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        expect(res.body.msg).to.equal('Not all fields have been filled')
        done()
      })
  })

  it('errors if password less than 6 char', (done) => {
    const user = {
      username: 'username',
      email: 'email@example.com',
      password: 'pass',
      passwordCheck: 'pass',
      location: 'postcode'
    }
    const res = request(app)
      .post('/user-new')
      .send(user)
      .set('Accept', 'application/json')
    res.expect(400)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        expect(res.body.msg).to.equal('Password needs to be at least 6 characters')
        done()
      })
  })

  it('errors if passwords do not match', (done) => {
    const user = {
      username: 'username2',
      email: 'test2@example.com',
      password: 'password',
      passwordCheck: 'wrongpassword',
      location: 'postcode'
    }
    const res = request(app)
      .post('/user-new')
      .send(user)
      .set('Accept', 'application/json')
    res.expect(400)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        expect(res.body.msg).to.equal('Passwords do not match')
        done()
      })
  })

  it('does not allow duplicate username', (done) => {
    const user = {
      username: 'username',
      email: 'test@example.com',
      password: 'password',
      passwordCheck: 'password',
      location: 'postcode'
    }
    const res = request(app)
      .post('/user-new')
      .send(user)
      .set('Accept', 'application/json')
    res.expect(400)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        expect(res.body.msg).to.equal('An account with this username or email address already exists')
        done()
      })
  })

  it('does not allow duplicate email', (done) => {
    const user = {
      username: 'username1',
      email: 'email@example.com',
      password: 'password',
      passwordCheck: 'password',
      location: 'postcode'
    }
    const res = request(app)
      .post('/user-new')
      .send(user)
      .set('Accept', 'application/json')
    res.expect(400)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        expect(res.body.msg).to.equal('An account with this username or email address already exists')
        done()
      })
  })

  it('logs user in', (done) => {
    const user = {
      username: 'username',
      password: 'password'
    }
    const res = request(app)
      .post('/login')
      .send(user)
      .set('Accept', 'application/json')
    res.expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body.displayName).to.equal('username')
        done()
      })
  })

  it('errors if no user is found', (done) => {
    const user = {
      username: 'wrong',
      password: 'password'
    }
    const res = request(app)
      .post('/login')
      .send(user)
      .set('Accept', 'application/json')
    res.expect(400)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body.errors).to.equal('No user found')
        done()
      })
  })
})
