
/*Objective - 7.2: We have defined an object 'originalNote' here. 
We then convert this object into a string and store it in a notes.json file.
We read the string from that file, and convert it back to an object of our choice 'Note'.

JSON - JavaScript Object Notation, is a lightweight format that is used for data interchanging.
It is used to to represent arrays, objects etc in form of 'strings'.*/

const fs = require('fs');

//Our object
var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};
//
//console.log(typeof originalNote);
//console.log(originalNote.title);

//Our object is being converted to a string
var originalNoteString = JSON.stringify(originalNote);

//This string is written into a json file
fs.writeFileSync('notes.json',originalNoteString);

//We fetch the string from the json file
var noteString = fs.readFileSync('notes.json');

//We noe convert the fetched string into an object
var note = JSON.parse(noteString);

//We now check if the conversion was done appropriately.
console.log(typeof note);
console.log(note.title);