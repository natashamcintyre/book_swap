# Book Me Up
A web application, to allow users to offer books to share with the community.

## Motivation
To demonstrate the ability to build a high quality single page web app, in a new framework as part of a team practising agile development that is focused on thorough test driven development process. Also, to enjoy ourselves.

## Build status
Build status of continuous integration i.e. travis, appveyor etc. Ex. -

[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/akashnimare/foco?branch=master&svg=true)](https://ci.appveyor.com/project/akashnimare/foco/branch/master)

## Code style
If you're using any code style like xo, standard etc. That will help others while contributing to your project. Ex. -

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Screenshots
Include logo/demo screenshot etc

## Tech/framework used
Ex. -

<b>Built with</b>
- [React](https://reactjs.org)
- [Node.JS](https://nodejs.org)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)
- [Atom](https://atom.io)
- [Visual Studio Code](https://code.visualstudio.com)
- [Electron](https://electron.atom.io)

## Features
What makes your project stand out?

## Code Example
This is a full stack app that is accessed through localhost:3000. Run npm start from the frontend folder to start the react-scripts server.

## Installation
To use locally, clone this repo, then:

cd book_swap/backend
```npm install```
cd ../frontend
```npm install```

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


### Tests
Describe and show how to run the tests with code examples.
Run the following to run the test coverage for the front end.
```
$ npm test -- --coverage --watchAll=false
```
Run the following to open the test runner for end to end testing:
```
cd backend
npm start
cd ../frontend
npm start
$ npx cypress open
```
### Linting
We are using ESlint for frontend and backend linting.

To run from each of the project directories:

`$ npx eslint .`

## How to use?
To use Book Me Up:

Terminal 1:
```
cd backend
npm start
```

Terminal 2:
```
cd frontend
npm start
```

### Database Setup
Mongodb needs to be running for the app to work:
* ```$ brew services run mongodb-community```

To check it's working:
* ```$ brew services list```

To Stop:
* ```$ brew services stop mongodb-community```

## Contribute
Contributions and pull requests welcome. Please check the [contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md)

----------------

## API Reference
Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Credits
Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project.

#### Anything else that seems useful

## License
A short snippet describing the license (MIT, Apache etc)

MIT © [Yourname]()
