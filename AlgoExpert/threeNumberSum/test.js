var threeNumberSum = require('./three-number-sum-solution');
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: {
      array: [12, 3, 1, 2, -6, 5, -8, 6],
      targetSum: 0
    },
    output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
  },
  {
    Input: {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 
      targetSum: 32
    },
    output: [[8, 9, 15]]
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = threeNumberSum(eachSample.Input.array,eachSample.Input.targetSum);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepStrictEqual(output,eachSample.output);
    });
  });
});

