/* global describe, it */
var assert = require('assert')
var strs = require('..')
var parse = require('@mona/parse')

describe('alphanum()', function () {
  it('parses either an alphabetical character or a digit', function () {
    assert.equal(parse(strs.alphanum(), 'x'), 'x')
    assert.equal(parse(strs.alphanum(), '7'), '7')
    assert.throws(function () {
      parse(strs.alphanum(), '?')
    }, /expected alphanum/)
  })
  it('accepts an optional base/radix argument', function () {
    assert.equal(parse(strs.alphanum(16), 'f'), 'f')
  })
  it('defaults to base 10', function () {
    assert.equal(parse(strs.alphanum(), '0'), '0')
    assert.equal(parse(strs.alphanum(), '9'), '9')
  })
})
