const expect = require('chai').expect;
const run = require('../../src/code/perm_missing_elem');

test('should return correctly', function () {
  expect(run([2, 3, 1, 5])).to.equal(4);
});
