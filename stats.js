const stats = (data) => {
  const total = data.length
  const unique = new Set();
  data.forEach(link => {
      unique.add(link.href)
    })
    /*const result = {}
    result['total_links'] = total
    result['number_of_unique_links'] = unique.size*/

  return 'Total: '.concat(total, '\n', 'Unique: ', unique.size)
}

module.exports = {
  stats,
}
