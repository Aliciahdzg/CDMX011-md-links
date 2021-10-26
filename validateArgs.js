const minimist = require('minimist');
const { verifyPath } = require('./verifyDirFile')
  //const dir = minimist(process.argv[2]);


const validateArgs = (args) => {
  let parsedArgs = minimist(args);
  let argsLength = Object.keys(args).length
  let opt = args[1];
  let path = args[0];
  const argsList = ['validate', 'stats', 'v', 's'];
  for (const key in parsedArgs) {
    if (key === '_') {
      continue;
    }
    if (!argsList.includes(key)) {
      opt = 'help'
      return opt
    }
  }
  //console.log(path);
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
  if (parsedArgs.help && !parsedArgs.validate && !parsedArgs.stats || parsedArgs.h && !parsedArgs.s && !parsedArgs.v || parsedArgs.help && !parsedArgs.validate && !parsedArgs.s || parsedArgs.help && !parsedArgs.v && !parsedArgs.s || parsedArgs.help && !parsedArgs.validate && !parsedArgs.s || parsedArgs.help && !parsedArgs.v && !parsedArgs.stats || parsedArgs.h && !parsedArgs.validate && !parsedArgs.stats || parsedArgs.h && !parsedArgs.validate && !parsedArgs.s) {
    opt = 'help';
  }
  return opt;
}

module.exports = {
  validateArgs,
}
