const fs = require('fs');


const readFiles = (file) => {
  console.log('Starting md files analisis: '.concat(file, '================================'));
  return new Promise((resolve, reject) => {
    file.forEach(actualfile => {
      console.log('Reading file: '.concat(actualfile));
      fs.readFile(actualfile, 'utf8', (err, string) => {
        //if (err) return reject(err);
        const result = string.split('\n');
        console.log(result.length);
        resolve(result);
        return (err) ? reject(err) : resolve(result);
      })
    })
  })
}



function readfiles(file, callback) {
  console.log('Starting md files analisis: '.concat(file, '================================'));
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

module.exports.readFiles = readFiles;
module.exports.readfiles = readfiles;
