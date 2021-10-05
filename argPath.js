const path = require('path');
const fs = require('fs');


function getFiles(dir, callback) {
  console.log('Starting path analisis ============================================');
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);
    // console.log('Files found: ')
    list.forEach(file => {
      const otherDir = path.resolve(dir, file)
      try {
        if (fs.lstatSync(otherDir).isDirectory()) {
          getFiles(otherDir, callback)
        }

      } catch {

      }
      if (otherDir.isDirectory) {
        console.log('Este es un directorio'.concat(file))
      }
      // console.log(file);
    })
    const filtered = list.filter(file => path.extname(file) === '.md');
    const filteredPath = []
    if (filtered.length > 0) {
      filtered.forEach(data => {
        filteredPath.push(path.resolve(dir, data))
      })
      console.log('Number of md files found: '.concat(filtered.length.toString(), '\n'));
      return callback(null, filteredPath);
    } else {
      return callback(err);
    }

  })
};


function readfiles(file, callback) {
  console.log('Starting md files analisis ============================================');
  file.forEach(actualfile => {
    console.log('Reading file: '.concat(actualfile));
    fs.readFile(actualfile, 'utf8', (err, string) => {
      if (err) {
        console.error(err);
        return err
      }
      const result = string.split('\n');
      console.log(result.length);
      return callback(null, result);
    })
  })
}


module.exports.getFiles = getFiles;
module.exports.readfiles = readfiles;
