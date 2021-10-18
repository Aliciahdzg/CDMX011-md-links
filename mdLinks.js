const minimist = require('minimist');
const { statSync } = require('fs');
const { getFiles } = require('./readDir');
const { readFiles, readFilePrueba } = require('./readFile');
const { requestStatus } = require('./httpRequest.js')
const args = minimist(process.argv.slice(2));
const dir = minimist(process.argv[2]);

let opt = args._[1]
const path = args._[0]

if (args.undefined) {
  opt = undefined
}
if (args.validate || args.v) {
  opt = 'validate';
}
if (args.stats || args.s) {
  opt = 'stats';
}
if (args.validate && args.stats) {
  opt = 'validate_stats';
}
if (args.help || args.h) {
  opt = 'help';
}

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    switch (opt) {
      case undefined:
        resolve('Tus archivos')
        break;
      case 'validate_stats':
        resolve('Estas son tus validaciones con estadisticas')
        break
      case 'validate':
        resolve('Este es tu objeto con links validados')
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


mdLinks(dir, opt).then(result => console.log(result))
