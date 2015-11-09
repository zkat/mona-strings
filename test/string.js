/* global describe, it */
var assert = require('assert')
var comb = require('@mona/combinators')
var strs = require('..')
var parse = require('@mona/parse')

describe('string()', function () {
  it('succeeds if the string matches a string in the input', function () {
    assert.equal(parse(strs.string('foo'), 'foo'), 'foo')
    assert.throws(function () {
      parse(comb.and(strs.string('foo'), strs.string('baz')), 'foobarbaz')
    }, /expected string matching {baz}/)
  })
  it('optionally does a case-insensitive match', function () {
    assert.equal(parse(strs.string('abc', false), 'AbC'), 'AbC')
    assert.throws(function () {
      parse(strs.string('abc', true), 'AbC')
    }, /expected string matching {abc}/)
  })
  it('defaults to being case-sensitive', function () {
    assert.throws(function () {
      parse(strs.string('abc'), 'AbC')
    }, /expected string matching {abc}/)
  })
  it('reports the location of the first bad character', function () {
    assert.throws(function () {
      parse(strs.string('aaaaaaa'), 'aaabaaaa')
    }, /(line 1, column 4)/)
  })
})
