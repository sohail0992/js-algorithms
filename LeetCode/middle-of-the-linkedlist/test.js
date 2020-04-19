var middleNode = require('./middle-of-the-linked-list-solution.js');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input:  {
      val: 1,
      next: { val: 2, next: { val: 3, next: {val: 4, next: {val: 5,next: null}} } } },
    output: [3,4,5]
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = middleNode(eachSample.Input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output,eachSample.output);
    });
  });
});

