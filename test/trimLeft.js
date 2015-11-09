/* global describe, it */
var assert = require('assert')
var comb = require('@mona/combinators')
var strs = require('..')
var parse = require('@mona/parse')

describe('trimLeft()', function () {
  it('trims leading whitespace only', function () {
    var parser = comb.between(strs.string('|'),
                              strs.string('|'),
                              strs.trimLeft(strs.string('a')))
    assert.equal(parse(parser, '|   a|'), 'a')
    assert.throws(function () {
      parse(parser, '|   a    |')
    }, /expected string matching \{\|\}/)
  })
})
