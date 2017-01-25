const stringify = require('./')
const buf = Buffer.from('Hello ☃')
console.log(stringify(buf))

/* =>
  { ascii: 'Hello b\u0018\u0003',
    utf8: 'Hello ☃',
    utf16le: '效汬⁯飢',
    binary: 'Hello â',
    base64: 'SGVsbG8g4piD',
    hex: '48656c6c6f20e29883' }
*/
