const axios = require('axios');

const requestStatus = async(data) => {
  let statusList = [];
  for (let i = 0; i < data.length; i++) {
    try {
      let req = await axios.get(data[i].href)

      data[i]['status'] = req.status
      data[i]['ok'] = req.statusText
        //console.log(data[i].href, req.status)
    } catch (e) {
      //console.log(data[i].href, e.message)
      data[i]['status'] = e.message
      data[i]['fail'] = 'fail'
    }
    statusList.push(data[i])
  }
  return statusList
}

module.exports = {
  requestStatus,
}
