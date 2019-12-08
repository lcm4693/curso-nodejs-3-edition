const fs = require('fs');

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);

// Escreve o json do objeto no arquivo
// fs.writeFileSync('1-json.json', bookJSON);

const bufferArquivo = fs.readFileSync('1-json.json');

const bufferObject = JSON.parse(bufferArquivo.toString());

console.log(JSON.stringify(bufferObject));

bufferObject.name = 'Diego';
bufferObject.planet = 'Mars';
bufferObject.age = 33;

fs.writeFileSync('1-json.json', JSON.stringify(bufferObject));



