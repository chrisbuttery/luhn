var isLuhn = require('../')
var test = require('tape')

test('should return true for a valid credit card number', function (t) {
  var expected = true
  var cc = isLuhn('4111111111111111')
  t.equal(cc, expected)
  t.end()
})

test('should return false for a invalid credit card number', function (t) {
  var expected = false
  var cc = isLuhn('1111111111111111')
  t.equal(cc, expected)
  t.end()
})

test('should return undefined if an empty string is provided as a param', function (t) {
  var cc = isLuhn('')
  t.equal(cc, undefined)
  t.end()
})

test('should return undefined if no param is not provided', function (t) {
  var cc = isLuhn()
  t.equal(cc, undefined)
  t.end()
})
