#!/usr/bin/env node

const figlet = require('figlet');
const { statSync } = require('fs');
const { getFiles } = require('./readDir');
const { readFiles, readFilePrueba } = require('./readFile');
const { requestStatus, request } = require('./httpRequest.js')

const dir = process.argv[2];


const mdLinks = (path, options) => {

}



if (statSync(dir).isDirectory()) {
  console.log('Analizing directory: ', dir, '-----------------------------------------')
  const mdFiles = getFiles(dir);
  mdFiles.length === 0 ? new Error('No hay archivos md') : console.log(mdFiles);
  console.log('Parsing links from md files: ----------------------------------')
  const parsedData = readFiles(mdFiles);
  console.log('Requesting links status: -------------------------------------')
    //const objStatus = requestStatus(parsedData)
    //console.log(Promise.all(objStatus));
  request(parsedData)
    .then((status) => {
      console.log(status);
    })

} else if (statSync(dir).isFile()) {
  console.log('es un archivo')
  const parsedData = readFilePrueba(dir)
  request(parsedData)
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
