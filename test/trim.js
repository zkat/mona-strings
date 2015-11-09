/* global describe, it */
var assert = require('assert')
var core = require('@mona/core')
var strs = require('..')
var parse = require('@mona/parse')

describe('trim()', function () {
  it('trims leading and trailing whitespace', function () {
    assert.equal(parse(strs.trim(core.token()), '   a    '), 'a')
    assert.equal(parse(strs.trim(core.token()), 'a    '), 'a')
    assert.equal(parse(strs.trim(core.token()), '   a'), 'a')
  })
})
