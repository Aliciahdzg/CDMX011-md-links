const minimist = require('minimist');
const { verifyPath } = require('./verifyDirFile')
  //const dir = minimist(process.argv[2]);


const validateArgs = (args) => {
  let parsedArgs = minimist(args);
  let argsLength = Object.keys(args).length
  let opt = args[1];
  const path = args[0]
    // console.log(path);
  const dirOrFile = verifyPath(path);
  //console.log(dirOrFile);

  if (argsLength === 1) {
    opt = 'pathOnly';
  }
  if (parsedArgs.validate && !parsedArgs.stats && !parsedArgs.s || parsedArgs.v && !parsedArgs.s && !parsedArgs.stats) {
    opt = 'validate';
  }
  if (parsedArgs.stats && !parsedArgs.validate && !parsedArgs.v || parsedArgs.s && !parsedArgs.validate && !parsedArgs.v) {
    opt = 'stats';
  }
  if (parsedArgs.validate && parsedArgs.stats || parsedArgs.s && parsedArgs.v || parsedArgs.validate && parsedArgs.s || parsedArgs.stats && parsedArgs.v) {
    opt = 'validate_stats';
  }
  if (parsedArgs.help || parsedArgs.h) {
    opt = 'help';
  }
  return opt
}

module.exports = {
  validateArgs,
}
