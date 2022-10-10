var dayOfProgrammer = require('./day-of-programmer-solution');
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: 2016,
    output: '12.09.2016'
  },
  {
    Input: 1800,
    output: '12.09.1800'
  },
  {
    Input: 2100,
    output: '13.09.2100'
  },
  {
    Input: 2700,
    output: '13.09.2700'
  },
  {
    Input: 1918,
    output: '26.09.1918'
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = dayOfProgrammer(eachSample.Input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepStrictEqual(output,eachSample.output);
    });
  });
});

