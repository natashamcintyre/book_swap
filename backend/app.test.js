import { expect } from "chai";
import MessageApp from './app.js'

describe("app", function() {
  let testApp;

  beforeEach(() => {
    testApp = new MessageApp
    testApp.post('hi world')
  })

  it("app has messages", function() {
    expect(testApp.messages).to.be.an('array');
  });

  it("post method creates a new message", function() {
    testApp.post('test note');
    expect(testApp.messages.length).to.equal(2);
  });

  it("message has content, date, and id", function() {
    expect(testApp.messages[0].content).to.equal('hi world');
    expect(testApp.messages[0].date).to.equal('01/01/2021');
    expect(testApp.messages[0].id).to.equal(0);
  });

  it("read method returns a post", function() {
    expect(testApp.get(0).content).to.equal('hi world');
  });

  it("update method can update the text of a message", function() {
    testApp.update(0, 'hello world');
    expect(testApp.get(0).content).to.equal('hello world');
  });

  it("delete method deletes a message", function() {
    testApp.delete(0);
    expect(testApp.messages.length).to.equal(0);
  });

});
