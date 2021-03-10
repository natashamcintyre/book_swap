# Book Me Up
A web application to allow users to offer books to share with the community.

## Motivation
To demonstrate the ability to build a high quality single page web app, in a new framework as part of a team practising agile development that is focused on thorough test driven development process. Also, to enjoy ourselves.

## Build status
[![Build Status](https://travis-ci.com/argy-bargy/book_swap.svg?branch=main)](https://travis-ci.com/argy-bargy/book_swap)

## Code style
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

## Screenshots
![Home Screen](https://github.com/argy-bargy/book_swap/blob/main/screenshots/Screenshot%202021-03-01%20at%2015.28.59.png)

## Tech/framework used
**Built with**
- [React](https://reactjs.org)
- [Node.JS](https://nodejs.org)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)
- [Atom](https://atom.io)
- [Visual Studio Code](https://code.visualstudio.com)

## Features
Key Features:

* Add a book to lend with a barcode scanner
* Search for books by any keyword in the free search field.
* See details of each book
* See 'virtual library card' of prior readers
* Request to borrow a book from the community library

## Code Example
Frontend App.JS:
```
Refactors needed:
* Remove individual title, author, isbn variables from APP.js - DONE :)
* Rename bookSearchToo - DONE :)
* Combine all three header components (possibly through composition: https://reactjs.org/docs/composition-vs-inheritance.html)
* Create generic get request function with URL parameters
* Error Handling Front End Set Up??
* Refactoring a User object
* Refactor out BookHandler.js and UserHandler.js out of APP.js as modules?
* Is there a better way of positioning API calls in the file structure?
```

Backend app.js:
```
Refactors needed:
```

## Installation
To use locally, clone this repo, then:
```
$ cd book_swap/backend
$ npm install
$ cd ../frontend
$ npm install
```
You will need npm, which is installed with Node.js. Please visit the [Node.js website](https://nodejs.org/en/download/) to download.


### Database Installation
You will need homebrew, if you don't please install [Homebrew](https://brew.sh/).

* ```$ brew tap mongodb/brew```
* ```$ brew install mongodb-community```

If you have note upgraded to MacOs Catalina or above, then;
* ```$ sudo mkdir -p /data/db```
* ```$ sudo chown -R `id -un` /data/db```

If you do have Catalina or above:
* ```$ sudo mkdir -p /System/Volumes/Data/data/db```
* ```$ sudo chown -R `id -un` /System/Volumes/Data/data/db```


## API Reference
This project utilizes the OpenLibrary Books API: https://openlibrary.org/dev/docs/api/books, to request all related book information.

## Tests
Cypress for feature tests, Enzyme for React unit tests, and Mocha-Chai for Node.js tests.

Run the following to for frontend test coverage:
```
$ npm test -- --coverage --watchAll=false
```
Run the following to open the test runner for end to end testing:
```
$ cd backend
$ npm start
$ cd ../frontend
$ npm start
$ npx cypress open
```
### Linting
We are using ESlint for frontend and backend linting.

To run from each of the project directories:

`$ npx eslint .`

## How to use?
The frontend and backend run independently on separate servers, only in the local environment.

To use Book Me Up:

Terminal 1:
```
$ cd backend
$ npm start
```

Terminal 2:
```
$ cd frontend
$ npm start
```

Before either, ensure the mongodb is running in the background as well.

### Database Setup
Mongodb needs to be running for the app to work:
* ```$ brew services run mongodb-community```

To check it's working:
* ```$ brew services list```

To Stop:
* ```$ brew services stop mongodb-community```

## Credits

Team argy-bargy:
[Aman Tank](https://github.com/AmanTank187)
[Cathal Lavelle](https://github.com/calavell)
[Chris Whitehouse](https://github.com/chriswhitehouse)
[Kiki Dawson](https://github.com/kikidawson)
[Natasha McIntyre](https://github.com/natashamcintyre")
[Will Dixon](https://github.com/WillDixon93)

## Ideas for Refactoring:
