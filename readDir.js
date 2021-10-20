const { join, extname } = require('path');
const { statSync, readdirSync, lstatSync } = require('fs');

const getFiles = (dir) => {
  //console.log('Starting path analisis: '.concat(dir, '==================================='))
  const filteredPath = []
  if (statSync(dir).isDirectory()) {
    readdirSync(dir).forEach(file => {
      const otherDir = join(dir, file)
      if (extname(file) === '.md' || extname(file) === '.markdown') {
        filteredPath.push(join(dir, file));
      }
      try {
        if (lstatSync(otherDir).isDirectory()) {
          let moreFiles = getFiles(otherDir)
          if (moreFiles.length > 0) {
            moreFiles.forEach(file => {
              filteredPath.push(file);
            })
          }
        }
      } catch {

      }
    })
  } else if (statSync(dir).isFile()) {
    filteredPath.push(dir)
  }

  return filteredPath
}

module.exports = {
  getFiles
}
