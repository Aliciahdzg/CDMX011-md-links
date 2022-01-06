function extractLinks(lines, arr, file) {
    lines.forEach(line => {
        if (line.includes('http') === true && line.includes('![') === false && line.includes('href') == false) {
          const splitData = line.split('](');
          if (splitData.length >= 2) {
            let link = splitData[1].replace(')', '').replace('(', '').trim()
            if (link.includes(' ')) {
              let justLink = link.split(' ')[0].replace(',', '').trim()
              let test = justLink.charAt(justLink.length - 1)
              if (test === '.' || test === ')') {
                let fixedLink = justLink.slice(0, -1)
                justLink = fixedLink
              }
              link = justLink
            } else if (link.charAt(link.length - 1) === '.') {
              let fixedLink = link.slice(0, -1)
              link = fixedLink
            }
            const splitText = splitData[0].replace('*', '').replace('[ ]', '').split('[');
            const text = splitText[1];
            
            let model = {
                text,
                href: link,
                file
            }
            console.log(model)
            arr.push(model)
          }
        }
      })
}


module.exports = {
    extractLinks
}