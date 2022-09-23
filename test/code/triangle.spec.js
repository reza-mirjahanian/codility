const expect = require('chai').expect;
const run = require('../../src/code/triangle');
const assert = require('assert');
test('should return correctly', function () {
  assert.deepEqual(run([10, 2, 5, 1, 8, 20]), 1);
  assert.deepEqual(run([10, 50, 5, 1]), 0);
});
