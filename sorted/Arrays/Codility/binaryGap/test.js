var solution = require('./binaryGap-solution.js');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: 9,
    output: 2
  },
  {
    Input: 20,
    output: 1
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = solution(eachSample.Input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output,eachSample.output);
    });
  });
});

