const { readFileSync } = require('fs');
const { extractLinks } = require('./extractLinks')

function readFiles(mdfiles) {
  const linksFound = []

  mdfiles.forEach(file => {
    const fileData = readFileSync(file, 'utf8')
    const result = fileData.split('\n');

    extractLinks(result, linksFound, file);
  })
  return linksFound
}


module.exports = {
  readFiles,
}
