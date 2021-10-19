const { requestStatus } = require('./httpRequest')

requestStatus(parsedData).then((status) => {
  console.log(status.href);
})

const stats = (data) => {
  const total = data.length
  const unique = 0

  if (data.href.includes(!data.href)) {
    unique += 1
  }
  console.log('Total: '.concat(total, '\n', 'Unique: ', { unique }))
    //return 'Total: '.concat(total, '\n', 'Unique: ', { unique })
}

stats()
