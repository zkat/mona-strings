/* global describe, it */
var assert = require('assert')
var strs = require('..')
var parse = require('@mona/parse')

describe('spaces()', function () {
  it('consumes one or more whitespace characters', function () {
    var parser = mona.and(strs.spaces(),
    mona.token())
    assert.equal(parse(parser, '     a'), 'a')
    assert.equal(parse(parser, '   \r  \n\t a'), 'a')
  })
  it('returns a single space as its success value', function () {
    assert.equal(parse(strs.spaces(), '\r \n\t   \r\t\t\n'), ' ')
  })
})
