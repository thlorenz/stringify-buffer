const ocat = require('ocat')
ocat.opts = {
  prefix: '  spok(t, res,\n',
  suffix: ')',
  indent: '   ',
  depth: 5
}

module.exports = ocat
