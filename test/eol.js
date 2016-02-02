/* global describe, it */
var assert = require('chai').assert
var strs = require('..')
var parse = require('@mona/core').parse
var reject = require('bluebird').reject

describe('eol()', function () {
  it('consumes Linux-style newlines', function () {
    return parse(strs.eol(), '\n').then(function (res) {
      assert.equal(res, '\n')
    })
  })
  it('consumes Windows-style newlines', function () {
    return parse(strs.eol(), '\r\n').then(function (res) {
      assert.equal(res, '\r\n')
    })
  })
  it('consumes OSX-style newlines', function () {
    return parse(strs.eol(), '\r').then(function (res) {
      assert.equal(res, '\r')
    })
  })
  it('consumes whatever these newlines are', function () {
    return parse(strs.eol(), '\n\r').then(function (res) {
      assert.equal(res, '\n\r')
    })
  })
  it('fails for non-newlines', function () {
    return parse(strs.eol(), '').then(reject, function (e) {
      assert.match(e.message, /expected end of line/)
    }).then(function () {
      return parse(strs.eol(), 'hi')
    }).then(reject, function (e) {
      assert.match(e.message, /expected end of line/)
    })
  })
})
