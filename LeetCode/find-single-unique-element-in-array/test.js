var solution = require('./find-single-unique-element-in-array-solution');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    arr: [2,2,1],
    output: 1
  }, 
  {
    arr: [9,9,4,4,3,3,2],
    output: 2,
  },
  {
    arr: [0,0,1,1,5,5,2],
    output: 2,
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = solution(eachSample.arr);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output,eachSample.output);
    });
  });
});

