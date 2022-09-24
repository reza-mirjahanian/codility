const expect = require('chai').expect;
const solution = require('../../src/code/StoneWall');
const assert = require('assert');
test('should return correctly', function () {
  assert.deepEqual(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]), 7);
});
