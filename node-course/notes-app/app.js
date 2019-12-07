const name = require('./utils.js');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// const command = process.argv[2];

yargs.command({
    command: 'add',
    describe: 'Add a node',
    handler: function (){
        console.log('Adding a node!');
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a node',
    handler: function (){
        console.log('Removing a node!');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a node',
    handler: function (){
        console.log('Reading a node!');
    }
});

yargs.command({
    command: 'list',
    describe: 'List the nodes',
    handler: function (){
        console.log('Listing the node!');
    }
});

console.log(process.argv);
console.log(yargs.argv);
