const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

let opt = args._[1]
let path = args._[0]

if (args.length === 1) {
  opt = 'pathOnly'
}
if (args.validate && !args.stats || args.v && ) {
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
      case 'pathOnly':
        resolve('Tus archivos')
        break;
      case 'validate_stats':
        resolve('Estas son tus validaciones con estadisticas')
        break
      case 'validate':
        resolve('Tus links validados')
        break
      case 'stats':
        resolve('Estas son tus estadisticas')
        break
      case 'help':
        resolve(require('./help.js')(args))
        break
      default:
        reject('is not a valid command')
    }
  })
}


mdLinks(path, opt).then(result => console.log(result))
