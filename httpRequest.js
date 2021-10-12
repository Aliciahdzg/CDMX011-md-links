const http = require('http');
const axios = require('axios');


const requestStatus = (data) => {
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
      link['ok'] = 'fail'
    }
    return link

  })
}

module.exports.requestStatus = requestStatus
