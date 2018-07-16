console.log('Loading Notes.js');

/*exports is an object on the module property, and everything on this object can be exported to other files.
View exports - console.log(module);*/

/*This is an error function syntax in JS. This ' () => ' converts a regular function to an error function.*/
/*module.exports.addNote = () => {
    console.log('Add Note');
    return 'New Note';
};*/
/*Here we create a variable named addnote that holds the value retured from the the function, taking title and body as an argument.*/
var addNote = (title, body) => {
    console.log('Adding Note: ', title, body);
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