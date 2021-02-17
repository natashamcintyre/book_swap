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
    expect(testApp.messages[0].id).to.equal(1);
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

  it("id's are always unique", function() {
    testApp.post('1') // id 2
    testApp.post('2') // id 3
    testApp.delete(1)
    testApp.post('3') // id 4
    expect(testApp.messages[1].id).to.equal(3)
  });

  it("app deletes correctly", function() {
    testApp.post('1')
    testApp.post('2')
    testApp.post('3')
    testApp.delete(1)
    testApp.delete(3)
    expect(testApp.get(2).id).to.equal(2)
  });

  xit("app deletes correctly", function() {
    testApp.post('1')
    testApp.post('2')
    testApp.delete(1)
    testApp.update(2, 'update')
    expect(testApp.get(2).content).to.equal('update')
  });

});

class MessageApp {
  constructor() {
    this.messages = []
    this.counter = 1
  }

  post (content) {
    let newMessage = {
      content: content,
      date: '01/01/2021',
      id: this.counter
    };
    this.counter ++
    this.messages.push(newMessage);
  }

  get(index) {
    return this.messages[index];
  }

  update(index, content) {
    this.get(index).content = content;
    return this.messages[index]
  }

  delete(index) {
      this.messages.splice(index, 1);
      return this.messages
  }
}

export default MessageApp

// const array = [2, 5, 9];
//
// console.log(array);
//
// const index = array.indexOf(5);
// if (index > -1) {
//   array.splice(index, 1);
// }
//
// // array = [2, 9]
// console.log(array);
