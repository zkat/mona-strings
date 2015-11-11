/* global describe, it */
var assert = require('assert')
var strs = require('..')
var parse = require('@mona/parse').parse

describe('eol()', function () {
  it('consumes Linux-style newlines', function () {
    assert.equal(parse(strs.eol(), '\n'), '\n')
  })
  it('consumes Windows-style newlines', function () {
    assert.equal(parse(strs.eol(), '\r\n'), '\r\n')
  })
  it('consumes OSX-style newlines', function () {
    assert.equal(parse(strs.eol(), '\r'), '\r')
  })
  it('consumes whatever these newlines are', function () {
    assert.equal(parse(strs.eol(), '\n\r'), '\n\r')
  })
  assert.throws(function () {
    parse(strs.eol(), '')
  }, /expected end of line/)
  assert.throws(function () {
    parse(strs.eol(), 'hi')
  }, /expected end of line/)
})
