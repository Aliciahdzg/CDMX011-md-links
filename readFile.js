const fs = require('fs');

function readFiles(mdfiles) {
  const linksFound = []

  mdfiles.forEach(file => {
    console.log('READING FILE ', file)
    fileData = fs.readFileSync(file, 'utf8')
    const result = fileData.split('\n');

    result.forEach(line => {
      if (line.includes('http') === true && line.includes('![') === false && line.includes('href') == false) {
        const splitData = line.split('](');
        if (splitData.length >= 2) {
          let link = splitData[1].replace(')', '').replace('(', '').trim()
          if (link.includes(' ')) {
            let justLink = link.split(' ')[0].replace(',', '').trim()
            let test = justLink.charAt(justLink.length - 1)
            if (test === ".") {
              let fixedLink = justLink.slice(0, -1)
              justLink = fixedLink
            }
            link = justLink
          } else if (link.charAt(link.length - 1) === '.') {
            let fixedLink = link.slice(0, -1)
            link = fixedLink
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
  return linksFound
}

module.exports = {
  readFiles
}
