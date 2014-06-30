var wtr = require('write-transform-read')
var ptr = require('json-pointer')
var through2 = require('through2')

module.exports = Scope

function Scope(stream, path) {
  var transform = wtr(stream)
  return through2.obj(function(data, enc, cb) {
    transform(ptr(data, path), function(err, result) {
      if (err) return cb(err)
      ptr(data, path, result) // replace
      cb(null, data)
    })
  })
}
