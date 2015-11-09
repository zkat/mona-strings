/* global describe, it */
var assert = require('assert')
var comb = require('@mona/combinators')
var strs = require('..')
var parse = require('@mona/parse')

describe('trimRight()', function () {
  it('trims trailing whitespace only', function () {
    var parser = comb.between(strs.string('|'),
                              strs.string('|'),
                              strs.trimRight(strs.string('a')))
    assert.equal(parse(parser, '|a     |'), 'a')
    assert.throws(function () {
      parse(parser, '|   a    |')
    }, /\(line 1, column 2\) expected string matching \{\a\}/)
  })
})
