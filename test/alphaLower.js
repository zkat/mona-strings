/* global describe, it */
var assert = require('chai').assert
var strs = require('..')
var parse = require('@mona/core').parse
var bluebird = require('bluebird')

describe('alphaLower()', function () {
  it('parses one lowercase alphabetical character', function () {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var tests = []
    for (var i = 0; i < alphabet.length; i++) {
      tests.push(
        parse(strs.alphaLower(), alphabet.charAt(i)).then((function (i) {
          return function (res) {
            assert.equal(res, alphabet.charAt(i))
          }
        })(i)))
    }
    return bluebird.all(tests).then(function () {
      return parse(strs.alphaLower(), '0')
    }).then(bluebird.reject, function (e) {
      assert.match(e.message, /expected lowercase alphabetical character/)
    }).then(function () {
      return parse(strs.alphaLower(), 'A')
    }).then(bluebird.reject, function (e) {
      assert.match(e.message, /expected lowercase alphabetical character/)
    })
  })
})
