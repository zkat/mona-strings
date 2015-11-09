/* global describe, it */
var assert = require('assert')
var strs = require('..')
var parse = require('@mona/parse').parse

describe('alphaUpper()', function () {
  it('parses one uppercase alphabetical character', function () {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < alphabet.length; i++) {
      assert.equal(parse(strs.alphaUpper(), alphabet.charAt(i)),
      alphabet.charAt(i))
      assert.throws(function () {
        parse(strs.alphaUpper(), alphabet.charAt(i).toLowerCase())
      }, /expected uppercase alphabetical character/)
    }
    assert.throws(function () {
      parse(strs.alphaUpper(), '0')
    }, /expected uppercase alphabetical character/)
  })
})
