import request from "supertest";
import mongoose from "mongoose"
import {expect} from "chai";
import app from "../app.js"


describe("Books API endpoint tests", function() {

  before(function (done) {
    mongoose.connect("mongodb://localhost/testBooks", { useNewUrlParser: true, useFindAndModify: false }, function(){
    mongoose.connection.db.dropDatabase(function(){
    done()
    })
    })
    })

  it("submit a book", function(done) {
    var data = {
      title:"Just So Stories",
      author:"Rudyard Kipling",
      isbn:9780192822765,
      postcode:"test_postcode",
      phoneNumber:"test_phoneNumber"
    };
    const res = request(app)
    .post("/add-book")
    .send(data)
    .set("Accept", "application/json")

    res.expect(200)
    .end(function(err, res) {
      if (err) {
        return done(err)
      }
      expect(res.body.data.title).to.equal('Just So Stories');
      done()
    })
  })

  it("submit wrong book data and get an error", function(done) {
    var data = {
      title:"Just So Stories",
      isbn:9780192822765,
      postcode:"test_postcode",
      phoneNumber:"test_phoneNumber"
    };
    const res = request(app)
    .post("/add-book")
    .send(data)
    .set("Accept", "application/json")
    res.expect(404)
    .end(function(err, res) {
      if (err) {
        return done(err)
      }
      expect(res.body).to.equal('Invalid book entry');
      done()
    })
  })



  it("gets from backend bookshelf", function(done){
    const res = request(app)
    .get("/")

    res.expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err)
        }

      expect(res.body.length).to.equal(1)
      expect(res.body[0].data).to.deep.equal( {title: 'Just So Stories', author: 'Rudyard Kipling', isbn: 9780192822765, postcode: 'test_postcode', phoneNumber: 'test_phoneNumber' } )
      done()
    })
  })
})
