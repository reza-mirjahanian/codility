const expect = require('chai').expect;
const run = require('../../src/code/TapeEquilibrium');

test('should return correctly', function () {
  expect(run([3, 1, 2, 4, 3])).to.equal(1);
});
