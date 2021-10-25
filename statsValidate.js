const statsValidate = (obj) => {
  const total = obj.length
  const unique = new Set
  const broken = []
  obj.forEach(link => {
    unique.add(link.href)
  })
  unique.forEach(link => {
      let obj = {}
      obj['href'] = link
      broken.push(obj)
    })
    //console.log('Total: '.concat(total, '\n', 'Unique: ', unique.size))
  partialStats = []
  const result = {}
  result['Total'] = total
  result['Unique'] = unique.size;
  partialStats.push(result);
  //const partialStats = 'Total: '.concat(total, '\n', 'Unique: ', unique.size)
  return [broken, partialStats]

  /*obj.map(({ href }) => {
    console.log(href)
  })*/
}

module.exports = {
  statsValidate,
}
