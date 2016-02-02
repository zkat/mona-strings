/* global describe, it */
var assert = require('chai').assert
var strs = require('..')
var core = require('@mona/core')
var parse = core.parse
var reject = require('bluebird').reject

describe('noneOf()', function () {
  it('succeeds if the next token is not in the char bag', function () {
    return parse(strs.noneOf('abc'), 'd').then(function (res) {
      assert.equal(res, 'd')
    }).then(function () {
      return parse(strs.noneOf('abc'), 'b')
    }).then(reject, function (e) {
      assert.match(e.message, /expected none of {a,b,c}/)
    })
  })
  it('accepts an array of strings as matches', function () {
    return parse(strs.noneOf(['foo', 'bar']), 'x').then(function (res) {
      assert.equal(res, 'x')
    }).then(function () {
      return parse(strs.noneOf(['foo', 'bar']), 'foo')
    }).then(reject, function (e) {
      assert.match(e.message, /expected none of {foo,bar}/)
    })
  })
  it('optionally does a case-insensitive match', function () {
    return parse(strs.noneOf('abc', true), 'B').then(function (res) {
      assert.equal(res, 'B')
    }).then(function () {
      return parse(strs.noneOf('abc', false), 'B')
    }).then(reject, function (e) {
      assert.match(e.message, /expected none of {a,b,c}/)
    })
  })
  it('accepts a parser that will run if matches fail', function () {
    var failParser = core.is(function (x) { return x === '?' })
    return parse(
      strs.noneOf('abc', true, failParser),
      '?'
    ).then(function (res) {
      assert.equal(res, '?')
    }).then(function () {
      return parse(strs.noneOf('abc', true, failParser), 'a')
    }).then(function (e) {
      assert.match(e.message, /expected none of {a,b,c}/)
    })
  })
})
