/* global describe, it */
var assert = require('chai').assert
var strs = require('..')
var parse = require('@mona/core').parse
var reject = require('bluebird').reject

describe('digit()', function () {
  it('succeeds if the next token is a digit character', function () {
    return parse(strs.digit(), '1').then(function (res) {
      assert.equal(res, '1')
    }).then(function () {
      return parse(strs.digit(), 'z')
    }).then(reject, function (e) {
      assert.match(e.message, /expected digit/)
    })
  })
  it('accepts an optional base/radix argument', function () {
    return parse(strs.digit(16), 'f').then(function (res) {
      assert.equal(res, 'f')
    })
  })
  it('defaults to base 10', function () {
    return parse(strs.alphanum(), '9').then(function (res) {
      assert.equal(res, '9')
    }).then(function () {
      return parse(strs.digit(), 'a')
    }).then(reject, function (e) {
      assert.match(e.message, /expected digit/)
    })
  })
})
