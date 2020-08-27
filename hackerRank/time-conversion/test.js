var main = require('./time-conversion-solution.js');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: '07:05:45PM',
    output: '19:05:45'
  },
  {
    Input: '12:00:00AM',
    output: '00:00:00'
  },
  {
    Input: '12:00:00PM',
    output: '12:00:00'
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