var solution = require('./largest-time-solution');
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    number: [1,2,3,4],
    output: "23:41"
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = solution(eachSample.number);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepStrictEqual(output,eachSample.output);
    });
  });
});

