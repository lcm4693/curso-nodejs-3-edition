const validator = require('validator')
const getNotes = require('./notes.js')

const chalk = require('chalk')

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('diego@example.com'))
console.log(validator.isURL('http://www.uol.com.br'))

console.log(chalk.green.bold.inverse('Success'))

console.log('Teste do Nodemon')