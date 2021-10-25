const cliProgress = require('cli-progress');
const figlet = require('figlet');

const cli = () => {
  console.log(figlet.textSync('MD-LINKS', {
    font: 'Larry 3D',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    whitespaceBreak: true,
  }))
}
