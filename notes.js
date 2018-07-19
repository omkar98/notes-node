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
var logNote = (note) => {
    console.log('Title: ', note.title);
    console.log('Description: ', note.body);
}


/*------------------------------*/


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
    var notes = fetchNotes();
    readNote = notes.filter((notes) => notes.title === title)
    console.log('Found this note: ', readNote);
    return readNote[0];
};

var removeNote = (title) => {
    console.log('Removing Note', title);
    //Fetch notes
    var notes = fetchNotes();
//Filtering the notes
    var keepingNotes =
        notes.filter((notes) => notes.title != title
    );
    console.log("Will keep the following Notes: " , keepingNotes);
//saving Notes
    saveNotes(keepingNotes);
    
    return notes.length !== keepingNotes.length
};



module.exports = {
    addNote,  //addNote: addNote === addNote
    getAll,
    getNote,
    removeNote,
    logNote
};