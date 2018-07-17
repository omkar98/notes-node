console.log('Loading Notes.js');
var fs = require('fs');

var addNote = (title, body) => {
   var notes = [];
   var note = {
       title, //title = title
       body //body = body
   };    
    try{   
   var notesString = fs.readFileSync('notes-data.json');
   notes = JSON.parse(notesString);
    }
    catch(e){    
    }
    /*To avoid duplicate notes (notes with the same title):  
    1) We need to loop through all the titles in the notes-data.json, and check if there is any title matching with the current title.
    2.1) If doesn't exist, we add the current note, else we don't add it.
    
    filter is an 'array' method [node has special 'pre-defined' functions for arrays like push, filter, pop, etc. ]
    The return statement either returns true or false
    If true -> It keeps that array in the array, which will get saved in the duplicateNotes.
    If False -> duplicateNotes doesn't take the item. 
    
    */
    var duplicateNotes =
        /*
        filer function takes individual note as an argument, and compares its title with the current title. If they match the note is stored in the duplicateNotes, else it returns NULL.
        */
        notes.filter((note) => note.title === title
        /*title: current title
        note.title: titles in the notes-data.json file*/
    );
    
    console.log("duplicateNotes: " , duplicateNotes);
    
    if(duplicateNotes.length === 0){
     notes.push(note);
     fs.writeFileSync('notes-data.json', JSON.stringify(notes)); 
    }
   };

var getAll = () => {
    console.log('Listing all notes');
};

var getNote = (title) => {
    console.log('Reading Note', title);
};

var removeNote = (title) => {
    console.log('Removing Note', title);
};

module.exports = {
    addNote,  //addNote: addNote === addNote
    getAll,
    getNote,
    removeNote
};