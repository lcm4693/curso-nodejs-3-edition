const name = require('./utils.js')
const getNotes = require('./notes.js')

const fs = require('fs')

//Criação do arquivo
fs.writeFileSync('notes.txt', 'Meu nome é ')
console.log('Arquivo já criado')

//Append no arquivo
fs.appendFileSync('notes.txt', 'Diego Serpa')
console.log('Arquivo finalizado')

console.log(name)

//Expondo uma função para outros arquivos JS
const stringRetorno = getNotes()
console.log(stringRetorno)

