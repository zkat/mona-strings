/* global describe, it */
var assert = require('assert')
var strs = require('..')
var parse = require('@mona/parse').parse
var nums = require('@mona/numbers')

describe('noneOf()', function () {
  it('succeeds if the next token is not in the char bag', function () {
    assert.equal(parse(strs.noneOf('abc'), 'd'), 'd')
    assert.throws(function () {
      parse(strs.noneOf('abc'), 'b')
    }, /expected none of {a,b,c}/)
  })
  it('accepts an array of strings as matches', function () {
    assert.equal(parse(strs.noneOf(['foo', 'bar']), 'x'), 'x')
    assert.throws(function () {
      parse(strs.noneOf(['foo', 'bar']), 'foo')
    }, /expected none of {foo,bar}/)
  })
  it('accepts a parser that will run if matches fail', function () {
    assert.equal(parse(strs.noneOf('abc', true, nums.integer()), '25'),
    25)
    assert.throws(function () {
      parse(strs.noneOf('abc', true, nums.integer()), 'a')
    }, /expected none of {a,b,c}/)
  })
  it('optionally does a case-insensitive match', function () {
    assert.equal(parse(strs.noneOf('abc', true), 'B'), 'B')
    assert.throws(function () {
      parse(strs.noneOf('abc', false), 'B')
    }, /expected none of {a,b,c}/)
  })
})
