/* eslint-disable no-case-declarations */
const { getFiles } = require('./readDir');
const { readFiles } = require('./readFile');
const { requestStatus } = require('./httpRequest.js');
const { menu } = require('./help');
const { stats } = require('./stats');
const { statsValidate } = require('./statsValidate');


const mdLinks = (path, opt) => {
  return new Promise((resolve, reject) => {
    switch (opt) {
      case 'pathOnly':
        const mdFiles = getFiles(path);
        //console.log(mdFiles);
        const parsedData = readFiles(mdFiles);
        resolve(parsedData);
        break;
      case 'validate_stats':
        const files = getFiles(path);
        const parsed = readFiles(files);
        const [unique, partialStats] = statsValidate(parsed)
        console.log('Loading stats validate ');
        resolve(requestStatus(unique).then(data => {
          let brokenLinks = 0
          data.forEach(link => {
            if (link.status < 200 || link.status > 299 || typeof link.status === 'string') {
              brokenLinks += 1
            }
          })
          const result = {}
          result['Broken'] = brokenLinks
          partialStats.push(result);
          return partialStats
        }))
        break
      case 'validate':
        const md = getFiles(path);
        const data = readFiles(md);
        console.log('Loading validate ')
        resolve(requestStatus(data))
        break
      case 'stats':
        //console.log('Estas son tus estadisticas')
        const filesMD = getFiles(path);
        const filesData = readFiles(filesMD);
        resolve(stats(filesData))
        break
      case 'help':
        resolve(menu.main)
        break
      default:
        reject(opt.concat(' is not a valid command'))
    }
  })
}
module.exports = {
  mdLinks,
}
