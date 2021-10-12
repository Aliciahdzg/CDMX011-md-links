const fs = require('fs');

const readFiles = (mdfiles) => {
  const linksFound = []
  mdfiles.forEach(file => {
      console.log("READING FILE ", file)
      fileData = fs.readFileSync(file, 'utf8')
      const result = fileData.split('\n');

      result.forEach(line => {
        if (line.includes('http') === true && line.includes('![') === false && line.includes('href') == false) {
          const splitData = line.split('](');
          if (splitData.length >= 2) {
            let link = splitData[1].replace(')', "").replace('(', "").trim()
            if (link.includes(' ')) {
              const justLink = link.split(' ')[0].replace(',', '').replace('.', '').trim()
              link = justLink
            }
            const text = splitData[0].replace('[', "").replace('*', "").trim()
            let model = {}
            model['text'] = text
            model['href'] = link
            model['file'] = file
            linksFound.push(model)
          }
        }
      })
    })
    /*linksFound.forEach(actual => {
      const links = actual.href
      console.log(links)
    })*/
  return linksFound
}
module.exports.readFiles = readFiles
