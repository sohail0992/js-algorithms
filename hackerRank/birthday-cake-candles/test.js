var main = require('./birthday-cake-candles-solution');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: [3,3,3,3],
    output: 4 
  },
  {
    Input: [3,2,1,3],
    output: 2
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

