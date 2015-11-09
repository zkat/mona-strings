/* global describe, it */
var assert = require('assert')
var core = require('@mona/core')
var comb = require('@mona/combinators')
var strs = require('..')
var parse = require('@mona/parse').parse

describe('text()', function () {
  it('collects one or more parser results into a string', function () {
    assert.equal(parse(strs.text(strs.string('a')), 'aaaab',
    {allowTrailing: true}),
    'aaaa')
  })
  it('defaults to token()', function () {
    assert.equal(parse(strs.text(), 'abcde'), 'abcde')
  })
  it('accepts a minimum and maximum option', function () {
    assert.equal(parse(strs.text(core.token(), {min: 3}),
    'aaaa'),
    'aaaa')
    assert.throws(function () {
      parse(strs.text(core.token(), {min: 3}), 'aa')
    }, /unexpected eof/)
    assert.equal(parse(comb.followedBy(
      strs.text(core.token(), {max: 3}), core.token()),
      'aaaa'),
    'aaa')
  })
})
