// const name = require('./utils.js');
const yargs = require('yargs');
const notes = require('./notes.js');

// const command = process.argv[2];

yargs.command({
    command: 'add',
    describe: 'Add a node',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Add\'s Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log('Adding a node!');
        // console.log('Title: ' + argv.title);
        // console.log('Body: ' + argv.body);
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a node',
    builder: {
        title: {
            describe: 'Node title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){ 
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a node',
    handler: () => console.log('Reading a node!')
});

yargs.command({
    command: 'list',
    describe: 'List the nodes',
    handler: () => notes.listNotes()
});

//Realiza a execução do yargs
yargs.parse();

// console.log(process.argv);
// console.log(yargs.argv);
