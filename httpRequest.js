const http = require('http');
const axios = require('axios');


const requestStatus = (data) => {
  const statusList = [];
  data.forEach(async(link) => {
    try {
      let req = await axios.get(link.href)
        //console.log(link.href, req.status)
        //req.status
      link['status'] = req.status
      link['ok'] = 'ok'
    } catch (e) {
      //console.log(link.href, e.message)
      link['status'] = e.message
      link['fail'] = 'fail'
    }
    //console.log(link)
    statusList.push(link)
      // return link
  })
  return statusList
}

module.exports = {
  requestStatus
}
