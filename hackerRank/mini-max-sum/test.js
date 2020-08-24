var main = require('./min-max-sum-solution');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: [1,2,3,4,5],
    output: '10 14'
  },
  {
    Input: [5,5,5,5,5],
    output: '20 20'
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = main(eachSample.Input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepStrictEqual(output,eachSample.output);
    });
  });
});

