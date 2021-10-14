const minimist = require('minimist');
const args = minimist(process.argv.slice(3));

const prueba = (args) => {
  let opt = args._

  if (args.validate) {
    opt = 'validate';
  }
  if (args.stats) {
    opt = 'stats';
  }
  if (args.validate && args.stats) {
    opt = 'validate_stats';
  }

  switch (opt) {
    case 'validate_stats':
      console.log('Estas son tus validaciones con estadisticas')
      break
    case 'validate':
      console.log('Este es tu objeto con links validados')
      break
    case 'stats':
      console.log('Estas son tus estadisticas')
      break

    default:
      console.log('no existe esa opción')
  }
}

prueba(args)
