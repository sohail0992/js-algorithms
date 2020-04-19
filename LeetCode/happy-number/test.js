var solution = require('./happy-number-solution');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    number: 19,
    output: true
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = solution(eachSample.number);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output,eachSample.output);
    });
  });
});

