var expect = require('chai').expect;
var delayedString = require('../src/7_source_for_test');

it ('returns Hello world after 1 second', (done) =>{
   delayedString().then((message) => {
      expect(message).to.be.equal('Hello world');
      done();
   });
});
