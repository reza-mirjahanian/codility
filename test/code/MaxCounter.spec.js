const expect = require('chai').expect;
const run = require('../../src/code/MaxCounters');
const assert = require('assert');
test('should return correctly', function () {
  assert.deepEqual(run(5, [3, 4, 4, 6, 1, 4, 4]), [3, 2, 2, 4, 2]);
});
