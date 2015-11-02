var assert = require('assert')
var tv4 = require('tv4')

var schema = require('./')

assert.deepEqual(
  tv4.validateMultiple(require('./example.json'), schema),
  { errors: [ ], missing: [ ], valid: true })
