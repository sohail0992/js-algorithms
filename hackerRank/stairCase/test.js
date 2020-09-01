var main = require('./stair-case-solution');
  var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: 6,
    output: 
`     #
    ##
   ###
  ####
 #####
######`
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

