const expect = require('chai').expect;
const run = require('../../src/code/Distinct');
const assert = require('assert');
test('should return correctly', function () {
  assert.deepEqual(run([2, 1, 1, 2, 3, 1]), 3);
  assert.deepEqual(run([2, 1, 1, 2, 3, 1, -1, -1]), 4);
});
