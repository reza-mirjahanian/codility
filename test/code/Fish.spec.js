const expect = require('chai').expect;
const solution = require('../../src/code/Fish');
const assert = require('assert');
test('should return correctly', function () {
  assert.deepEqual(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]), 2);
  assert.deepEqual(solution([4, 3, 2, 1, 5], [0, 1, 0, 1, 0]), 2);
  assert.deepEqual(solution([4, 3, 2, 1, 5], [0, 1, 0, 1, 1]), 4);
});
