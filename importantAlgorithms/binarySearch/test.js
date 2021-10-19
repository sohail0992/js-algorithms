var assert = require('assert');
const solution = require('./binarySearch');

//add object to add custom tests
let testSamples = [
  {
    Input: [-1,0,3,5,9,12],
    target: 9,
    output: 4
  },
  {
    Input: [-1,0,3,5,9,12],
    target: 2,
    output: -1
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = solution(eachSample.Input, eachSample.target);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepStrictEqual(output,eachSample.output);
    });
  });
});


