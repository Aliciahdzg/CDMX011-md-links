const stats = (data) => {
  const total = data.length
  const unique = new Set();
  data.forEach(link => {
    unique.add(link.href)
  })
  const statsArray = []
  const result = {}
  result['Total'] = total
  result['Unique'] = unique.size;
  statsArray.push(result);

  return statsArray;

  //return 'Total: '.concat(total, '\n', 'Unique: ', unique.size)
}

module.exports = {
  stats,
}
