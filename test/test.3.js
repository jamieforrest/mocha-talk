var assert = require('should')
, user = require('./../3.js').user;

describe('Models', function(){
  describe('#user', function(){
    it('user should have the correct properties', function(){
        user.should.have.property('name', 'jamie');
        user.should.have.property('children').with.lengthOf(2);
    })
  })
})

