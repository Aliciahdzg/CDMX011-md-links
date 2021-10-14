const path = require('path');
const fs = require('fs');

const getFiles = (dir) => {
  //console.log('Starting path analisis: '.concat(dir, '==================================='))
  const filteredPath = []
  fs.readdirSync(dir).forEach(file => {
    const otherDir = path.join(dir, file)
    if (path.extname(file) === '.md' || path.extname(file) === '.markdown') {
      filteredPath.push(path.join(dir, file));
    }
    try {
      if (fs.lstatSync(otherDir).isDirectory()) {
        let b = getFiles(otherDir)
        if (b.length > 0) {
          b.forEach(file => {
            filteredPath.push(file);
          })
        }
      }
    } catch {

    }
  })
  return filteredPath
}

module.exports = {
  getFiles
}
