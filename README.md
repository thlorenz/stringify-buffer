# stringify-buffer [![build status](https://secure.travis-ci.org/thlorenz/stringify-buffer.png)](http://travis-ci.org/thlorenz/stringify-buffer)

Converts a buffer a collection of strings, one for each possible encoding.

```js
const stringify = require('stringify-buffer')
const buf = Buffer.from('Hello ☃')
console.log(stringify(buf))
```

```
{ ascii: 'Hello b\u0018\u0003',
  utf8: 'Hello ☃',
  utf16le: '效汬⁯飢',
  latin1: 'Hello â',
  base64: 'SGVsbG8g4piD',
  hex: '48656c6c6f20e29883' }
```

## Installation

    npm install stringify-buffer

## API


## License

MIT
