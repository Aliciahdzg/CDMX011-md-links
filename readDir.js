const path = require('path');
const fs = require('fs');


function getFilesPromise(dir) {
  console.log('Starting path analisis: '.concat(dir, '==================================='));
  return new Promise((resolve, reject) => {
    const filteredPath = []
    fs.readdir(dir, (err, list) => {
      console.log('Files found: ')
      list.forEach(file => {
        filtered = list.filter(file => path.extname(file) === '.md' || path.extname(file) === '.markdown');
        const otherDir = path.join(dir, file)
        fs.lstat(otherDir, (err, stats) => {
            //if (err) return console.error(err);
            if (stats.isDirectory()) {
              getFiles(otherDir);
              return (err) ? reject(err) : resolve(filteredPath)
            }
          })
          /*if (fs.lstatSync(otherDir).isDirectory()) {
            getFilesPromise(otherDir).then;
          } */
        console.log(file)
      })
      if (filtered.length > 0) {
        filtered.forEach(data => {
          filteredPath.push(path.resolve(dir, data))
        })
      }
      console.log('Number of md files found: '.concat(filtered.length.toString(), '\n'));
      console.log(filteredPath);
      return (err) ? reject(err) : resolve(filteredPath);
    })
  })
}

function getFiles(dir, callback) {
  console.log('Starting path analisis: '.concat(dir, '==================================='));
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);
    console.log('Files found: ')
    list.forEach(file => {
      const otherDir = path.resolve(dir, file)
      fs.lstat(otherDir, (err, stats) => {
        //if (err) return console.error(err);
        if (stats.isDirectory()) {
          getFiles(otherDir, callback);
        }
      })
      console.log(file);
    })
    const filtered = list.filter(file => path.extname(file) === '.md' || path.extname(file) === '.markdown');
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





//module.exports.getFiles = getFiles;
module.exports.getFilesPromise = getFilesPromise;
