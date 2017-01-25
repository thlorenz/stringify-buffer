const allEncodings = [ 'ascii', 'utf8', 'utf16le', 'binary', 'base64', 'hex' ]

function verifyEncodings(encodings) {
  if (!Array.isArray(encodings)) {
    throw new TypeError('encodings needs to be an Array')
  }
  function check(e, idx) {
    if (typeof e !== 'string') {
      throw new TypeError(
        'Each encoding needs to be a string\n"' +
        e + '" at index ' + idx + ' is not'
      )
    }
    if (!Buffer.isEncoding(e)) {
      throw new TypeError(
        '"' + e + '" at index ' + idx + ' is not a valid encoding.\n' +
        '  More info: https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings'
      )
    }
  }
  encodings.forEach(check)
}

/**
 * Stringifies the given buffer once for each encoding and adds
 * the result a hash.
 *
 * @name stringifyBuffer
 * @function
 * @param {Buffer} buf the buffer to stringify
 * @param {Array.<string>=} encodings the encodings to be used, if not supplied [all valid
 * encodings](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings) are used
 * @return {Object.<string, string>} a hash with a string value of the buffer for each of the supplied encodings
 */
exports = module.exports = function stringifyBuffer(buf, encodings) {
  if (encodings != null) verifyEncodings(encodings)
  else encodings = allEncodings

  function stringify(acc, enc) {
    acc[enc] = buf.toString(enc)
    return acc
  }
  return encodings.reduce(stringify, {})
}

/**
 * Returns an array of all valid Buffer encodings that are supported.
 * This is the same array that is used if no `encodings` is passed to @see stringifyBuffers.
 *
 * @name stringifyBuffer.encodings
 * @return {Array.<string>} all valid Buffer encodings
 */
exports.encodings = allEncodings
