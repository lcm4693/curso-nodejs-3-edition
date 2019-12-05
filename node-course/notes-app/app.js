const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('diego@example.com'))
console.log(validator.isURL('http://www.uol.com.br'))