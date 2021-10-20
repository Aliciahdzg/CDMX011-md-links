const stats = (data) => {
  const total = data.length
  const unique = new Set();
  //console.log(data)
  data.forEach(link => {
      unique.add(link.href)
    })
    //console.log('Total: '.concat(total, '\n', 'Unique: ', unique.size))
    /**/
  return 'Total: '.concat(total, '\n', 'Unique: ', unique.size)
}

module.exports = {
  stats,
}
