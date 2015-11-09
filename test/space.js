/* global describe, it */
var assert = require('assert')
var strs = require('..')
var parse = require('@mona/parse').parse

describe('space()', function () {
  it('consumes a single whitespace character from input', function () {
    assert.equal(parse(strs.space(), ' '), ' ')
    assert.equal(parse(strs.space(), '\n'), '\n')
    assert.equal(parse(strs.space(), '\t'), '\t')
    assert.equal(parse(strs.space(), '\r'), '\r')
    assert.throws(function () {
      parse(strs.space(), '')
    }, /expected space/)
    assert.throws(function () {
      parse(strs.space(), 'hi')
    }, /expected space/)
  })
})
