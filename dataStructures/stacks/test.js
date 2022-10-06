var isPalindrome = require('./stacks');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: 'maddam',
    output: true
  },
  {
    Input: 'sohail',
    output: false
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = isPalindrome(eachSample.Input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepStrictEqual(output,eachSample.output);
    });
  });
});