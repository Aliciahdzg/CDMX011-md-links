const minimist = require('minimist');
const { readFiles, readFilePrueba } = require('./readFile');
const { getFiles } = require('./readDir');
const args = minimist(process.argv.slice(3));
const dir = minimist(process.argv[2]);

const prueba = (args) => {
  let opt = args._[0]
  let path = args._[0]

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

  switch (opt) {
    case undefined:
      console.log('Tus archivos')
      break;
    case 'validate_stats':
      console.log('Estas son tus validaciones con estadisticas')
      break
    case 'validate':
      console.log('Este es tu objeto con links validados')
      break
    case 'stats':
      console.log('Estas son tus estadisticas')
      break
    case 'help':
      require('./help.js')(args)
      break
    default:
      console.error(opt.concat('is not a valid command'))
  }
}

prueba(args)
