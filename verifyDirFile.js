const { statSync } = require('fs');
const { getFiles } = require('./readDir');
const { readFiles, readFilePrueba } = require('./readFile');
const { requestStatus } = require('./httpRequest.js')

const dir = process.argv[2];

const verifyPath = (dir) => {
  try {
    if (statSync(dir).isDirectory()) {
      return 'dirOnly'
    } else if (statSync(dir).isFile()) {
      return 'fileOnly'
    }
  } catch { return 'Invalid' }
}
module.exports = {
  verifyPath,
}
