const minimist = require('minimist');
const { verifyPath } = require('./verifyDirFile')
  //const dir = minimist(process.argv[2]);


const validateArgs = (args) => {
  let parsedArgs = minimist(args);
  let argsLength = Object.keys(args).length
  console.log(args);
  //console.log(Object.keys(args).length)
  let opt = args[1];
  const path = args[0]
    // console.log(path);
  const dirOrFile = verifyPath(path);
  //console.log(dirOrFile);

  if (argsLength === 1) {
    opt = 'pathOnly';
    return opt
  }
  if (parsedArgs.validate || parsedArgs.v) {
    opt = 'validate';
    return opt
  }
  if (parsedArgs.stats || parsedArgs.s) {
    opt = 'stats';
    return opt
  }
  if (parsedArgs.validate && parsedArgs.stats) {
    opt = 'validate_stats';
    return opt
  }
  if (parsedArgs.help || parsedArgs.h) {
    opt = 'help';
    return opt
  }
}

module.exports = {
  validateArgs,
}
