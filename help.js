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
  const menu = args[0] === 'help'

  return menus[menu] || menus.main
}
