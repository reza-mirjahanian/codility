const expect = require('chai').expect;
const solution = require('../../src/code/EquiLeader');
const assert = require('assert');
test('should return correctly', function () {
  assert.deepEqual(solution([4, 3, 4, 4, 4, 2]), 2);
  assert.deepEqual(solution([1, 1, 2, 2, 3]), 0);
  assert.deepEqual(solution([2, 2, 1]), 0);
  assert.deepEqual(solution([-3, 3, -3, -3, -3, 7]), 2);
});
