#!/usr/bin/env node

const getfiles = require('./readDir');
const files = require('./readFile');


module.exports = function mdLinks(path, options) {}

if (process.argv.slice(2).length >= 1) {
  const directory = process.argv[2];
  getfiles.getFilesPromise(directory)
    .then(function (filteredPath) { files.readFiles(filteredPath) })



  /*getfiles(directory, (err, filteredList) => {
    if (err) return console.error(err);

    files(filteredList, (err, result) => {
      if (err) return console.error(err);
      //console.log(result);

    })
  })*/

  /**/
} else {
  console.log('argumentos inválidos')
}
