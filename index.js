#!/usr/bin/env node

const figlet = require('figlet');
const { statSync } = require('fs');
const { getFiles } = require('./readDir');
const { readFiles, readFilePrueba } = require('./readFile');
const { requestStatus } = require('./httpRequest.js')
const { validateArgs } = require('./validateArgs');

const slicedArgs = process.argv.slice(2);
const dir = slicedArgs[0];
let opt = validateArgs(slicedArgs);

console.log(opt);



const mdLinks = (path, opt) => {
  return new Promise((resolve, reject) => {
    const mdFiles = getFiles(dir);
    const parsedData = readFiles(mdFiles);
    switch (opt) {
      case 'dirOnly':
        resolve(parsedData);
        break;
      case 'fileOnly':
        let data = readFilePrueba(path)
          //console.log(data)
        resolve(data);
        break;
      case 'validate_stats':
        resolve('Estas son tus validaciones con estadisticas')
        break
      case 'validate':
        resolve(requestStatus(parsedData))
        break
      case 'stats':
        resolve('Estas son tus estadisticas')
        break
      case 'help':
        resolve(require('./help.js')(args))
        break
      default:
        reject(opt.concat('is not a valid command'))
    }
  })
}

mdLinks(dir, opt).then(links => console.log(links))






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
  const parsedData = readFilePrueba(dir)
  requestStatus(parsedData).then((status) => {
    console.log(status);
  })
} else {
  console.log('argumentos inválidos')
}*/
