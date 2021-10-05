#!/usr/bin/env node

const files = require('./argPath');


function mdLinks(path, options) {

}

if (process.argv.slice(2).length >= 1) {
  const directory = process.argv[2];
  // const argValidate = process.argv.slice(2)[1];
  files.getFiles(directory, (err, filteredList) => {
    if (err) return console.error(err);

    files.readfiles(filteredList, (err, result) => {
      if (err) return console.error(err);
      console.log(result);

    })
  })

  /**/
} else {
  console.log('argumentos inválidos')
}
