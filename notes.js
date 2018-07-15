console.log('Loading Notes.js');

/*exports is an object on the module property, and everything on this object can be exported to other files.
View exports - console.log(module);*/

module.exports.age = 20;

/*This is an error function syntax in JS. This ' () => ' converts a regular function to an error function.*/
module.exports.addNote = () => {
    console.log('Add Note');
    return 'New Note';
};

module.exports.add = (a, b) => {
    var sum = a + b;
    return sum;
};