console.log('Loading Notes.js');

/*exports is an object on the module property, and everything on this object can be exported to other files.
View exports - console.log(module);*/

/*This is an error function syntax in JS. This ' () => ' converts a regular function to an error function.*/
/*module.exports.addNote = () => {
    console.log('Add Note');
    return 'New Note';
};*/
/*Here we create a variable named addnote that holds the value retured from the the function, taking title and body as an argument.*/

/*Our target:
a) The user entered strings (from the command-line) should be stored in a file(a json file, so that it becomes easier to manipulate the data.)  
b) To store in a file, we need to convert these strings in an object and fetch the required data, as per our requirements and store them back to a file, in string format.
*/
var fs = require('fs');

/* Whenever the function addNote is called:
 - We create a local object 'note' and store the user typed 'title' and 'body' into the local's 'title' and 'body' attributes.
 - We now push this 'note' data into the 'notes' array.
 - This data of 'notes' array in now stored into a file 'notes-data.json' in a string format. */

var addNote = (title, body) => {
   var notes = [];
   var note = {
       title, //title = title
       body //body = body
   };
    
    /*Why to use try-catch statements here?
    We use it because, our program throws an error, as we are trying to read a file, which doesn't exist initially. 
    
    In such error, try executes the catch statement, which in this case executes nothing, as we want the initial notes array to be empty.
    
    In this way, when the reading operation fails, it simply executes the writing operation.*/
    
    try{
        /*Below two statements:
    The previous data in the notes-data.json is read and this data(string) is converted back to an object and stored in 'notes' variable.
    This is done to avoid vanishing off old data and overwriting by new data. */
   var notesString = fs.readFileSync('notes-data.json');
   notes = JSON.parse(notesString);
    }
    catch(e){
        
        }
   notes.push(note);
   fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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

/*insteading of exporting each and every function, we define a comman module.exports function that holds all the functions needed to be exported.*/
module.exports = {
    addNote,  //addNote: addNote === addNote
    getAll,
    getNote,
    removeNote
};