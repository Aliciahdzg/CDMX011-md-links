const menus = {
  main: `
    outside [command] <options>

    validate .............. show the status code, url, text of url and path of file
    stats ................. show total and number of unique url
    stats & validate ...... show total, number of unique and broken url
    help .................. show help menu for command
    `
}

module.exports = (args) => {
  const menu = args._[0] === 'help' ?
    args._[1] :
    args._[0]

  console.log(menus[menu] || menus.main)
}
