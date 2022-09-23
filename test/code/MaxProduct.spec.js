const expect = require('chai').expect;
const run = require('../../src/code/MaxProduct');
const assert = require('assert');
test('should return correctly', function () {
  assert.deepEqual(run([-3, 1, 2, -2, 5, 6]), 60);
});
