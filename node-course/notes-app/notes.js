const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
  return 'Your notes...';
};

const readNote = (title) => {
    const notes = loadNotes();
    const noteFound = notes.find((note) => note.title === title);

    if(noteFound){
        console.log('Title: ' + chalk.yellow.bold(noteFound.title));
        console.log('Body: ' + noteFound.body);
    }else{
        console.log(chalk.red.inverse('No note found'));
    }

};

const listNotes = () => {
    const notes = loadNotes();
    if(notes.length > 0){
        console.log(chalk.blue('Your notes'));
        console.log(chalk.blue('========================='));
    
        notes.forEach((note) => {
            console.log(chalk.yellow.bold(note.title + ' - ' + note.body));
        });
        console.log(chalk.blue('========================='));
    }else{
        console.log(chalk.red('Não há notas para exibir'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const finalNotes = notes.filter((note) => note.title !== title);
    
    if(notes.length === finalNotes.length){
        console.log(chalk.red('Note "' + title + '" não existe.'));
    }else{
        saveNotes(finalNotes);
        console.log(chalk.green('Note "' + title + '" removido.'));
    }

};

const addNote = (title, body)  => {
    const notes = loadNotes();
    
    // const duplicateNotes = notes.filter((note) => {
    //     //Comparando se a nota da iteração possui o title igual ao title da function addNote
    //     return note.title === title;
    // });

    //O método find, ao encontrar o objeto, dá um break.
    //O método usado acima, o filter, busca sempre um array, por isso não dá break ao achar um resultado
    const duplicateNote = notes.find((note) => note.title === title);

    // debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('New note added!'));
    }else{
        console.log(chalk.red('Note title taken!'));
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync('notes.json');
    const object = JSON.parse(buffer.toString());
    return object;
  } catch(e){
      return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
