const expect = require('chai').expect;
const solution = require('../../src/code/dominator');
const assert = require('assert');
test('should return correctly', function () {
  assert.deepEqual(solution([3, 4, 3, 2, 3, -1, 3, 3]), 0);
  assert.deepEqual(solution([1, 1, 2, 3]), -1);
});
