const { join, extname } = require('path');
const { statSync, readdirSync, lstatSync } = require('fs');

const getFiles = (dir) => {
  const filteredPath = []
  if (statSync(dir).isDirectory()) {
    readdirSync(dir).forEach(file => {
      const otherDir = join(dir, file);
      extname(file).toLowerCase;
      if (extname(file) === '.md' || extname(file) === '.markdown' || extname(file) === '.mdown' || extname(file) === '.mkdn' || extname(file) === '.mkd') {
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
      } catch (err) {
        return err;
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
