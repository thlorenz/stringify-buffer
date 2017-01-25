const test = require('tape')
const stringify = require('../')
const spok = require('spok')
// eslint-disable-next-line no-unused-vars
const ocat = require('./util/ocat')

// patch in Buffer.from for 0.10 to make tests pass
if (typeof Buffer.from !== 'function') {
  Buffer.from = function bufferFrom(s) { return new Buffer(s) }
}
const emptyBuffer = Buffer.from([])
const oneCharBuffer = Buffer.from('a')
const hexBuffer = Buffer.from([ 0x4c, 0x6f, 0x76, 0x65, 0x20, 0x74, 0x72, 0x75, 0x6d, 0x70, 0x73, 0x20, 0x68, 0x61, 0x74, 0x65, 0x21 ])

test('\nempty buffer, default encodings', function(t) {
  const res = stringify(emptyBuffer)
  spok(t, res,
    { ascii: ''
    , utf8: ''
    , utf16le: ''
    , binary: ''
    , base64: ''
    , hex: '' })
  t.end()
})

test('\nempty buffer, [ utf8, hex ] encodings', function(t) {
  const res = stringify(emptyBuffer, [ 'utf8', 'hex' ])
  spok(t, res, { utf8: '', hex: '' })
  t.end()
})

test('\none char buffer, default encodings', function(t) {
  const res = stringify(oneCharBuffer)
  spok(t, res,
    { ascii: 'a'
    , utf8: 'a'
    , utf16le: ''
    , binary: 'a'
    , base64: 'YQ=='
    , hex: '61' })
  t.end()
})

test('\nhex buffer, default encodings', function(t) {
  const res = stringify(hexBuffer)
  spok(t, res,
    { ascii: 'Love trumps hate!'
    , utf8: 'Love trumps hate!'
    , utf16le: '潌敶琠畲灭⁳慨整'
    , binary: 'Love trumps hate!'
    , base64: 'TG92ZSB0cnVtcHMgaGF0ZSE='
    , hex: '4c6f7665207472756d7073206861746521' })
  t.end()
})

test('\nhex buffer, [ ascii, hex ] encodings', function(t) {
  const res = stringify(hexBuffer, [ 'ascii', 'hex' ])
  spok(t, res,
    { ascii: 'Love trumps hate!'
    , hex: '4c6f7665207472756d7073206861746521' })
  t.end()
})
