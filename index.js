#!/usr/bin/env node

/* eslint-disable no-undef */

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
  console.log('');
  mdLinks(dir, opt)
    .then(data => {
      data.map(allData => {
        for (const key in allData) {
          let result = ''
          const value = allData[key];
          if (value >= 200 && value < 300) {
            console.log(chalk.blueBright(key) + ': ' + chalk.bgGreen(chalk.black(value)))
          } else if (value >= 300 && value < 500) {
            console.log(chalk.blueBright(key) + ': ' + chalk.bgRedBright(value))
          } else {
            result = chalk.blueBright(key) + ': ' + chalk.magentaBright(value);
            console.log(result);
          }
        }
        console.log('');
      })
    })
    .catch(() => {
      console.log(chalk.bgMagentaBright(chalk.black('======================Need a path and command to continue=======================')))
        //console.log(chalk.bgMagentaBright(chalk.black(err)));
      console.log(chalk.magentaBright(menu.main));
    })
}



cli();
