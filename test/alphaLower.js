/* global describe, it */
var assert = require('assert')
var strs = require('..')
var parse = require('@mona/parse')

describe('alphaLower()', function () {
  it('parses one lowercase alphabetical character', function () {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < alphabet.length; i++) {
      assert.equal(parse(strs.alphaLower(), alphabet.charAt(i)),
      alphabet.charAt(i))
      assert.throws(function () {
        parse(strs.alphaLower(), alphabet.charAt(i).toUpperCase())
      }, /expected lowercase alphabetical character/)
    }
    assert.throws(function () {
      parse(strs.alphaLower(), '0')
    }, /expected lowercase alphabetical character/)
  })
})
