const { statSync } = require('fs');
const { getFiles } = require('./readDir');
const { readFiles, readFilePrueba } = require('./readFile');
const { requestStatus } = require('./httpRequest.js')
const args = minimist(process.argv.slice(3));

let opt = args._[1]
const path = args._[0]

if (args.length === 1) {
  opt = 'pathOnly'
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

const mdLinks = (path, opt) => {
  return new Promise((resolve, reject) => {
    switch (opt) {
      case pathOnly:
        resolve('Tus archivos')
        break;
      case 'validate_stats':
        resolve('Estas son tus validaciones con estadisticas')
        break
      case 'validate':
        resolve(requestStatus(parsedData).then((status) => {
          console.log(status);
        }))
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
