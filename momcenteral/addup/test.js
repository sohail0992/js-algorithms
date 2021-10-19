var argmap = require('./addup');
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    arr1: [3, 2],
    arr2: [4, 3, 2, 9, 10, 12],
    output: [7, 5, 5, 11, 13, 14]
  },
  {
    arr1: [1,2],
    arr2: [1,2,3,4],
    output: [2, 4, 4, 6]
  },
  {
    arr1: [1,2,3,4],
    arr2: [5,6,7, 8],
    output: [6,8,10,12]
  },
  {
    arr1: [4, 3, 2, 1],
    arr2: [2, 1],
    output: [6, 4, 4, 2]
  },
  {
    arr1: [4, 3, 2, 9],
    arr2: [2, 1],
    output: [6, 4, 4, 10]
  },
  {
    arr1: [4, 3, 2, 9, 10, 12],
    arr2: [2, 1],
    output: [6, 4, 4, 10, 12, 13]
  },
  {
    arr1: [4, 3, 2, 9, 10, 12, 8, -1],
    arr2: [2, 1],
    output: [6, 4, 4, 10, 12, 13, 10, 0]
  },
  {
    arr1: [4, 3],
    arr2: [2, 1],
    output: [6, 4]
  }

];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = argmap(eachSample.arr1,eachSample.arr2);
  console.log(output, 'output: ')
  describe('Function output should be equal to test sample output', function() {
    it('Test # ' + index, function() {
      assert.deepStrictEqual(output,eachSample.output);
    });
  });
});

