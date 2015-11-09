/* global describe, it */
var assert = require('assert')
var comb = require('@mona/combinators')
var core = require('@mona/core')
var strs = require('..')
var parse = require('@mona/parse').parse

describe('spaces()', function () {
  it('consumes one or more whitespace characters', function () {
    var parser = comb.and(strs.spaces(),
                          core.token())
    assert.equal(parse(parser, '     a'), 'a')
    assert.equal(parse(parser, '   \r  \n\t a'), 'a')
  })
  it('returns a single space as its success value', function () {
    assert.equal(parse(strs.spaces(), '\r \n\t   \r\t\t\n'), ' ')
  })
})
