/* global describe, it */
var assert = require('assert')
var strs = require('..')
var parse = require('@mona/parse').parse

describe('alpha()', function () {
  it('parses one alphabetical character', function () {
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < alphabet.length; i++) {
      assert.equal(parse(strs.alpha(), alphabet.charAt(i)),
      alphabet.charAt(i))
    }
    assert.throws(function () {
      parse(strs.alpha(), '0')
    }, /expected alphabetical character/)
  })
})
