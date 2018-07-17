console.log('Loading Notes.js');
var fs = require('fs');
/*--------------------------*/
var fetchNotes = () => {
    try
    {   
       var notesString = fs.readFileSync('notes-data.json');
       return JSON.parse(notesString);
    }
    catch(e)
    {  
        return [];
    }    
};
/*--------------------------*/
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes)); 
};
/*--------------------------*/


var addNote = (title, body) => {
   var notes = fetchNotes();
   var note = {
       title, //title = title
       body //body = body
   };    
   
    
    var duplicateNotes =
        notes.filter((note) => note.title === title
    );
    
    console.log("duplicateNotes: " , duplicateNotes);
    
    if(duplicateNotes.length === 0){
     notes.push(note);
     saveNotes(notes);
        return note;
    }
    else{
        return 0;
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