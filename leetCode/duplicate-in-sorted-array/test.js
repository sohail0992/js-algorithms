var removeDuplicates = require('./duplicate-in-sorted-array.js');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: [ 0,0,1,1,1,2,2,3,3,4],
    output: 5
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = removeDuplicates(eachSample.Input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output, eachSample.output);
    });
  });
});

