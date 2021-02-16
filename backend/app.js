class MessageApp {
  constructor() {
    this.messages = []
  }

  post (content) {
    let newMessage = {content: content, date: '01/01/2021', id: 0};
    this.messages.push(newMessage);
  }

  get(index) {
    return this.messages[index];
  }

  update(index, content) {
    this.get(index).content = content;
  }

  delete(index) {
      this.messages.splice(index, 1);
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
