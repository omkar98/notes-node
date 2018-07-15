/*
Objective - 5: Getting Input from the user from the Command Line and using this input for our application. */

console.log('Loading App...');

/*3rd Party Modules*/
const _ = require('lodash'); 
const fs = require('fs');
//const os = require('os');

/*Self-Defined Modules*/
const notes = require('./notes.js');

var command = process.argv[2];
/*
console.log(process.argv)
  process is an object and the property we are looking for is argv (argument vector)
argv stores all the command line arguments passed in the cmd prompt..

  We choose index '2', because the arguments passed from the command list are stored from index 2(i.e in the 3rd position). The first 2 indices store the File paths. To check the arguments, go ahead and print: console.log(process.argv) 
*/
console.log('Command: ', command);

if(command === 'add')
{
    console.log('Adding New note');
}
else if(command === 'list')
{
    console.log('Listing all notes');
}
else if(command === 'read')
{
    console.log('Reading the note');
}
else if(command === 'remove')
{
    console.log('Remobing the note');
}
else
{
    console.log('Command not recognized...');
}