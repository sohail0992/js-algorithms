var rotLeft = require('./left-rotation-solution');
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: {
      arr: [1, 2, 3, 4, 5],
      d: 4
    },
    output: [5, 1, 2, 3, 4]
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = rotLeft(eachSample.Input.arr, eachSample.Input.d);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepStrictEqual(output,eachSample.output);
    });
  });
});

