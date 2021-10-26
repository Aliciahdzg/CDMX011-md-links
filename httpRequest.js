const axios = require('axios');

const requestStatus = async(data) => {
  let statusList = [];

  for (let i = 0; i < data.length; i++) {
    try {
      let req = await axios.get(data[i].href)

      data[i]['status'] = req.status
      data[i]['ok'] = req.statusText
      process.stdout.write('.');
    } catch (e) {
      if (e.response) {
        data[i]['status'] = e.response.status
        data[i]['fail'] = 'fail';
      } else {
        data[i]['status'] = e.message;
        data[i]['fail'] = 'fail';
      }

      process.stdout.write('.');

    }
    statusList.push(data[i])
  }
  console.log('');
  return statusList
}

module.exports = {
  requestStatus,
}
