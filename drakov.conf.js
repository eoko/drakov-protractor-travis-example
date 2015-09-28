'use strict';

var path = require('path');
var conf = require('./gulp/conf');

module.exports = {
  sourceFiles: 'api/example.apib',
  serverPort: 3010,
  //discover: true,
  //stealthmode: true,
  //disableCORS: true,
  CORS: {
    origin: 'http://localhost:3000',
    headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    credentials: true
  },
  autoOptions: true
  //sslKeyFile: '/path/to/ssl/key.key',
  //sslCrtFile: '/path/to/ssl/cert.crt',
  //delay: 2000,
  //method: ['DELETE','OPTIONS']
};
