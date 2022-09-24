const expect = require('chai').expect;
const solution = require('../../src/code/Nesting');
const assert = require('assert');
test('should return correctly', function () {
    assert.deepEqual(solution(''), 1);
    assert.deepEqual(solution('(()(())())'), 1);
    assert.deepEqual(solution('())'), 0);
});
