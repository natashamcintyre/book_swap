var config = {
    port: process.env.NODE_ENV === 'test' ? 2001 : 3001,
    db: process.env.NODE_ENV === 'test' ?
    'mongodb://localhost/testBooks' : 'mongodb://localhost/books',
}
module.exports = config;
