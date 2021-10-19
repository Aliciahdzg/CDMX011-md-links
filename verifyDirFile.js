const { statSync } = require('fs');

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
