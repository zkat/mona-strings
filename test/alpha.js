/* global describe, it */
var assert = require('chai').assert
var strs = require('..')
var parse = require('@mona/core').parse
var bluebird = require('bluebird')

describe('alpha()', function () {
  it('parses one alphabetical character', function () {
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var tests = []
    for (var i = 0; i < alphabet.length; i++) {
      tests.push(
        parse(strs.alpha(), alphabet.charAt(i)).then((function (i) {
          return function (res) {
            assert.equal(res, alphabet.charAt(i))
          }
        })(i)))
    }
    return bluebird.all(tests).then(function () {
      return parse(strs.alpha(), '0')
    }).then(bluebird.reject, function (e) {
      assert.match(e.message, /expected alphabetical character/)
    })
  })
})
