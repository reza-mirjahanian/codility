const expect = require('chai').expect;
const run = require('../../src/code/FrogRiverOne');
const assert = require('assert');
test('should return correctly', function () {
  assert(run(5, [1, 3, 1, 4, 2, 3, 5, 4]) === 6);
  assert(run(5, [1, 2, 4, 5, 2]) === -1);
  assert(run(1, [1]) === 0);
});
