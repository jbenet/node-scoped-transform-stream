var scope = require('./')
var through2 = require('through2')

var square = through2.obj(function(data, enc, cb) {
  cb(null, (data * data))
})

var scoped = scope(square, '/foo/bar')
scoped.on('data', console.log)
scoped.write({foo: { bar: 2 }, baz: 'yay'})
scoped.write({foo: { bar: 4 }, baz: 'yay'})
scoped.write({foo: { bar: 8 }, baz: 'yay'})
scoped.write({foo: { bar: 16 }, baz: 'yay'})
