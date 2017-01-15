const shelljs = require('shelljs');
const open = require('open');

shelljs.exec("C:\\nodejs\\node_modules\\.bin\\http-server", {async: true});
open('http://127.0.0.1:8080/index.html' , 'chrome')

