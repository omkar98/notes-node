/*
Objective - 6: Getting 'Simplified' Input from the user from the Command Line using a third party module named 'yargs'. */

console.log('Loading App...');

/*3rd Party Modules*/
const _ = require('lodash'); 
const fs = require('fs');
//const os = require('os');
const yargs = require('yargs');

/*Self-Defined Modules*/
const notes = require('./notes.js');


const argv = yargs.argv;
var command = process.argv[2];
/*
console.log(process.argv)
  process is an object and the property we are looking for is argv (argument vector)
argv stores all the command line arguments passed in the cmd prompt..

  We choose index '2', because the arguments passed from the command list are stored from index 2(i.e in the 3rd position). The first 2 indices store the File paths. To check the arguments, go ahead and print: console.log(process.argv) 
*/
console.log('Command: ', command);
console.log('Process: ', process.argv); 
console.log('Yargs: ', argv);

if(command === 'add')
{
    console.log('Adding New note');
    /*Here basically, we have created our own module 'notes.js' and defined a function named 'addNote' there.*/
    var note = notes.addNote(argv.title, argv.body);
    if(note)
        {
            console.log('Note created successfully!');
            console.log('Title: ', note.title);
            console.log('Description: ', note.body);
        }
    else
        {
            console.log('Note title already exists');
        }
    
}
else if(command === 'list')
{
    notes.getAll();
}
else if(command === 'read')
{
    requiredNote = notes.getNote(argv.title);
    //console.log(requiredNote);
    if(requiredNote)
    {
        console.log('Title: ', requiredNote.title);
        console.log('Description: ', requiredNote.body);
    }
    else{
        console.log('Note not found...');
    }
}
else if(command === 'remove')
{
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note is removed' : 'Note not found';
    console.log(message);
}
else
{
    console.log('Command not recognized...');
}