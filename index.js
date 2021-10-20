#!/usr/bin/env node

//const figlet = require('figlet');
//const { statSync } = require('fs');
const { getFiles } = require('./readDir');
const { readFiles } = require('./readFile');
const { requestStatus } = require('./httpRequest.js')
const { validateArgs } = require('./validateArgs');
const { menu } = require('./help')
const { stats } = require('./stats')

const slicedArgs = process.argv.slice(2);
const dir = slicedArgs[0];
let opt = validateArgs(slicedArgs);

console.log(opt);

const mdLinks = (path, opt) => {
  const mdFiles = getFiles(path);
  const parsedData = readFiles(mdFiles);
  return new Promise((resolve, reject) => {
    switch (opt) {
      case 'pathOnly':
        resolve(parsedData);
        break;
      case 'validate_stats':
        resolve('Estas son tus validaciones con estadisticas')
        requestStatus(parsedData).then((links) => {
          console.log(links)
        });
        break
      case 'validate':
        console.log('Validando links')
        resolve(requestStatus(parsedData))
        break
      case 'stats':
        console.log('Estas son tus estadisticas')
        resolve(stats(parsedData))
        break
      case 'help':
        resolve(menu)
        break
      default:
        reject(opt.concat('is not a valid command'))
    }
  })
}

mdLinks(dir, opt)
  .then(links => console.log(links))
  .catch(err => console.error(err))





/*if (statSync(dir).isDirectory()) {
  console.log('Analizing directory: ', dir, '-----------------------------------------')
  const mdFiles = getFiles(dir);
  mdFiles.length === 0 ? new Error('No hay archivos md') : console.log(mdFiles);
  console.log('Parsing links from md files: ----------------------------------')
  const parsedData = readFiles(mdFiles);
  console.log('Requesting links status: -------------------------------------')
  requestStatus(parsedData).then((status) => {
    console.log(status);
  })

} else if (statSync(dir).isFile()) {
  console.log('es un archivo')
  const mdFiles = getFiles(dir);
  const parsedData = readFiles(mdFiles)
  requestStatus(parsedData).then((status) => {
    console.log(status);
  })
} else {
  console.log('argumentos inválidos')
}*/
