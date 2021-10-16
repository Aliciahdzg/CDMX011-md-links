const axios = require('axios');

const request = (data) => {
  for (let i = 0; i < data.length; i++) {
    const promise = axios.get(data[i].href)
    const req = axios.all(promise)

    const dataPromise = req.then((res) => res.status)

    console.log(dataPromise)
    return dataPromise
  }
}
const requestStatus = async(data) => {
  let statusList = [];
  for (let i = 0; i < data.length; i++) {
    try {
      let promiseReq = axios.get(data[i].href)
      let req = await axios.all([promiseReq])
        //.then((req) => link['status'] = req.status, link['ok'] = 'ok')
        // .catch(error => link['status'] = error.message)
        //console.log(link.href, req.status)
        //req.status
      data[i]['status'] = req.status
      data[i]['ok'] = req.statusText
      console.log(data[i].href, req.data)
    } catch (e) {
      console.log(data[i].href, e.message)
      data[i]['status'] = e.message
      data[i]['fail'] = 'fail'
    }
    statusList.push(data[i])
  }
  //console.log(statusList);
  return statusList
    /*data.forEach((link) => {
        return axios.get(link.href)
          .then((res) => console.log(res.status, res.statusText))
          .catch((err) => err.message)


        /* Promise.resolve(await axios.get(link.href))
           .then(resolve => resolve.status)
           .then((res) => link['status'] = res, link['ok'] = res.statusText)
           .catch((err) => console.log(err.message), link['status'] = e.message, link['fail'] = 'fail')
           //console.log(link)
         statusList.push(link)*/
    //console.log(Promise.all(statusList))
    /*try {
      let req = await axios.get(link.href)
        //.then((req) => link['status'] = req.status, link['ok'] = 'ok')
        // .catch(error => link['status'] = error.message)
        //console.log(link.href, req.status)
        //req.status
      link['status'] = req.status
      link['ok'] = 'ok'
        //console.log(link)
    } catch (e) {
      //console.log(link.href, e.message)
      link['status'] = e.message
      link['fail'] = 'fail'
    }*/
    //statusList.push(link)
    //console.log(link)
    //return statusList.push(link)
    // })
    //console.log(statusList)
    //return statusList
}

const newObj = () => {}

module.exports = {
  requestStatus,
  request,
}
