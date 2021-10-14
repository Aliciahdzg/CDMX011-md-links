const { antojos, comida } = require('./helpers')

if (process.argv[2] == 'cuernitos') {
  console.log(antojos())
} else if (process.argv[2] == 'comida') {
  console.log(comida())
} else {
  console.log('Estas mal solicita ayuda')
}
