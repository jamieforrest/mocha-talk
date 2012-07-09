var assert = require('assert')
, fib = require('./../1.js').fib
, asyncFib = require('./../2.js').asyncFib;

suite('fib', function() {
    test('fib should return the correct number in the fibonacci sequence', function() {
        assert.equal(55, fib(10));
    });
    test('fib should return the correct number in the fibonacci sequence', function() {
        assert.equal(354224848179262000000, fib(100));
    });
});

suite('asyncFib', function() {
  test('asyncFib should return the correct number in the fibonacci sequence', function(done) {
    asyncFib(100, function(n) {
      assert.equal(354224848179262000000, n, 'Wrong number');
      done();
    });
  });
});