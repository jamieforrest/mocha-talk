var fib = require('./1.js').fib;

function asyncFib(n, fn) {
  setTimeout(function() {
    fn(fib(n));
  }, 1999);
}

module.exports.asyncFib = asyncFib;