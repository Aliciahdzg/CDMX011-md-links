#!/usr/bin/env node

const figlet = require('figlet');
const chalk = require('chalk');
const { mdLinks } = require('./mdLinks.js');
const { validateArgs } = require('./validateArgs');
const { menu } = require('./help');

const slicedArgs = process.argv.slice(2);
const dir = slicedArgs[0];
let opt = validateArgs(slicedArgs);

const cli = () => {
  console.log(chalk.bgBlue(chalk.cyanBright(figlet.textSync('MD-LINKS', {
    font: 'Reverse',
    horizontalLayout: 'fitted',
    verticalLayout: 'fitted',
    whitespaceBreak: true,
  }))))
  mdLinks(dir, opt)
    .then(data => {
      //console.log(data)
      //if (data.isArray) {
      data.map(allData => {
          for (const key in allData) {
            const value = allData[key];
            const result = chalk.blue(key) + ':' + ' ' + chalk.magentaBright(value);
            console.log(result);
          }
          console.log('');
        })
        //}
        //console.log()
    })
    .catch(() => {
      console.log(chalk.bgMagentaBright(chalk.black('======================Need a path and command to continue=======================')))
      console.log(chalk.magentaBright(menu.main));
    })

}



cli();
