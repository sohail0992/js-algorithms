var findNumbers = require('./findNumbersWithEvenNumberOfDigits-solution');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    input: [555,901,482,1771],
    output: 1
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = findNumbers(eachSample.input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output,eachSample.output);
    });
  });
});

