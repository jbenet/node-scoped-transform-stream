# scoped-transform-stream

Scope a transform stream, using [json-pointer](https://www.npmjs.org/package/json-pointer) and [write-transform-read](https://www.npmjs.org/package/write-transform-read).

```
npm install scoped-transform-stream
```

## Example

```js
var scope = require('scoped-transform-stream')
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
```
