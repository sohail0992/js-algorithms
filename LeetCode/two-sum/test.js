var solution = require('./two-sum-solution.js');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    arr: [2, 7, 11, 15],
    target: 9,
    output: [0,1]
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = solution(eachSample.arr,eachSample.target);
  describe('Function output should be equal to test sample output', function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output,eachSample.output);
    });
  });
});

