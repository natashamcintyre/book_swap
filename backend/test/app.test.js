import request from "supertest"
import {expect} from "chai"; 

import BookApp from "../app.js"

describe("Hello World test", function() {
  it("first test", function(done){
    const res = request(BookApp)
    .get("/")

res.expect({val: "Hello World"})
  res.expect(200, done)
  })
})