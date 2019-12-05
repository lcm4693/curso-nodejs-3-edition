const fs = require('fs')

fs.writeFileSync('notes.txt', 'Meu nome é ')
console.log('Arquivo já criado')


fs.appendFileSync('notes.txt', 'Diego Serpa')
console.log('Arquivo finalizado')
