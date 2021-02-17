import request from "supertest";
import {expect} from "chai";
import app from "../app.js"


describe("Books API endpoint tests", function() {
  it.only("gets from backend bookshelf", function(done){
    const res = request(app)
    .get("/")
    res.expect([ {id: 1, title: 'Just So Stories', author: 'Rudyard Kipling', isbn: 9780192822765, postcode: 'test_postcode', phoneNumber: 'test_phoneNumber', availability: true } ])
    res.expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err)
        }
        expect(res.body.length).to.equal(1)
        done()
      })
  })
})
