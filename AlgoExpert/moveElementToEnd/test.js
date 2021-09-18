var moveElementToEnd = require('./moveElementToEnd');
const chai = require('chai');

it('Test Case #1', function () {
  const array = [2, 1, 2, 2, 2, 3, 4, 2];
  const toMove = 2;
  const expectedStart = [1, 3, 4];
  const expectedEnd = [2, 2, 2, 2, 2];
  const output = moveElementToEnd(array, toMove);
  const outputStart = sorted(output.slice(0, 3));
  const outputEnd = output.slice(3);
  chai.expect(outputStart).to.deep.equal(expectedStart);
  chai.expect(outputEnd).to.deep.equal(expectedEnd);
});

const sorted = array => array.sort((a, b) => a - b);


