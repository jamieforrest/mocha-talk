var assert = require('assert')
, asyncFib = require('./../2.js').asyncFib;

describe('Fibonacci', function(){
  describe('#asyncFib()', function(){
    it('should return the correct number in the fibonacci sequence', function(done){
        asyncFib(100, function(n) {
          assert.equal(354224848179262000000, n, 'Wrong number');
          done();
        });
    })
  })
})