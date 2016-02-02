/* global describe, it */
var assert = require('chai').assert
var strs = require('..')
var parse = require('@mona/core').parse
var reject = require('bluebird').reject

describe('alphanum()', function () {
  it('parses either an alphabetical character or a digit', function () {
    return parse(strs.alphanum(), 'x').then(function (res) {
      assert.equal(res, 'x')
    }).then(function () {
      return parse(strs.alphanum(), '7')
    }).then(function (res) {
      assert.equal(res, '7')
    }).then(function () {
      return parse(strs.alphanum(), '?')
    }).then(reject, function (e) {
      assert.match(e.message, /expected alphanum/)
    })
  })
  it('accepts an optional base/radix argument', function () {
    return parse(strs.alphanum(8), '8').then(function (res) {
      assert.equal(res, '8')
    }).then(function () {
      return parse(strs.alphanum(8), '9')
    }).then(reject, function (e) {
      assert.match(e.message, /expected alphanum/)
    })
  })
  it('defaults to base 10', function () {
    return parse(strs.alphanum(), '9').then(function (res) {
      assert.equal(res, '9')
    })
  })
})
