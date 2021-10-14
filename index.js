#!/usr/bin/env node

const { statSync } = require('fs');
const { getFiles } = require('./readDir');
const { readFiles } = require('./readFile');
const { requestStatus } = require('./httpRequest.js')

const dir = process.argv[2];

if (statSync(dir).isDirectory()) {
  const mdFiles = getFiles(dir);
  mdFiles.length === 0 ? new Error('No hay archivos md') : console.log(mdFiles);
  const parsedData = readFiles(mdFiles);
  console.log(parsedData);
  const objStatus = requestStatus(parsedData)
  console.log(objStatus);

} else if (statSync(dir).isFile()) {
  console.log('es un archivo')
  readFiles(dir)
} else {
  console.log('argumentos inválidos')
}

/*function mdLinks(path) {
  console.log(path)
  switch (path) { // && process.argv.slice(2) < 4
    case directorio:
      console.log('Si es un directorio')
        //const mdFiles = getFiles(path);
        //console.log(mdFiles);
      break
  }
}*/
/* switch (dir) { // && process.argv.slice(2) < 4
  case fs.statSync(dir).isDirectory():
    const mdFiles = getFiles(dir);
    console.log(mdFiles);
    break
    //mdFiles.length === 0 ? new Error('No hay archivos md') : console.log(mdFiles);
    //const parsedData = readFiles(mdFiles);
    //console.log(parsedData)
    requestStatus(parsedData)




} */
