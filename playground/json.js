/*Objective - 7.1: To store the notes, when the user adds a note. We use the JSON files to store the notes.

JSON - JavaScript Object Notation, is a lightweight format that is used for data interchanging.
It is used to to represent arrays, objects etc in form of 'strings'.*/


/*Here we convert an object to a string, so that it can be used by JSON file.*/
var obj = {
    firstName: 'Omkar',
    lastName: 'Deshpande',
    age: 21
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

/*Here we convert a string to an object, so that it can be used by our processes.*/
var personString = '{"firstName":"Omkar", "lastName":"Deshpande", "age":21}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);


/*
Our Target:
Take the string and store it in a file, then read the string from the file using JSON.parse() to convert to to an object.
*/