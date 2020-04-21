var findMaxConsecutiveOnes = require('./maxConsecutiveOnes-solution');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    input: [1,1,0,1,1,1],
    output: 3
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = findMaxConsecutiveOnes(eachSample.input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output,eachSample.output);
    });
  });
});

