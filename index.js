#!/usr/bin/env node

const getfiles = require('./readDir');
const read = require('./readFile');
const fs = require('fs');
const { requestStatus } = require('./httpRequest.js')

const dir = process.argv[2];

module.exports = function mdLinks(path, options) {

}

if (fs.statSync(dir).isDirectory()) {
  const mdFiles = getfiles(dir);
  mdFiles.length === 0 ? new Error('No hay archivos md') : console.log(mdFiles);
  const parsedData = read.readFiles(mdFiles);
  //console.log(parsedData)
  requestStatus(parsedData)

} else if (fs.statSync(path).isFile()) {
  read.readFiles(dir)
} else {
  console.log('argumentos inválidos')
}
