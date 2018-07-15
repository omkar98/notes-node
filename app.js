/*
Objective - 3: To learn how to use 'require()' to load 3rd Party modules.

Notes: 
The require function is similar to #include in C/C++.
*/

console.log('Loading App...');
const notes = require('./notes.js');


/*3rd Party Module: lodash*/
const _ = require('lodash'); 
console.log(_.isString(true));
console.log(_.isString('true'));
//One of its functions include isString, which checks if the given input is a string.
var filteredArray = _.uniq(['Omkar', 1, 'Omkar', '1', 1 , 2, 3 ,4 ,5]);
console.log(filteredArray);



var res = notes.addNote();
console.log(res);

var addition = notes.add(4,-5);
console.log(addition);
/*  
    fs is an in-built module available in Node.js
    Such modules have function that perform various tasks
    The 'require()' loads all the functions in fs module.
*/
const fs = require('fs');

//os module is used to grab info of the currently logged-in user.
const os = require('os');
var user = os.userInfo();//This function stores all the data of the user into the user variable. This data includes - uid, gid, username, homedir & shell.
console.log(user.username);


/*
For Higher versions of Node, the function fs.appendFile() throws a callback error. To avoid it, we provide a thrid argument function(err).

However this method is slower when compared to an alternative function fs.appendFileSync();

fs.appendFile('greetings.txt', 'Hello World!', function(err){
    if(err)
    {
        console.log('Unable to Write into file');
    }           
}
);*/


/*Relatively Faster*/
fs.appendFileSync('greetings.txt', 'Hello Omkar');

/*
To print Hello, Uday!
*/
//Method - 1
fs.appendFileSync('greetings.txt', 'Hello, ' + user.username + '!');
/*Method - 2: Using template Strings
USE BACK TICKS, available beside the '1' key or below the 'ESC' key*/
fs.appendFileSync('greetings.txt', `Hello, ${user.username}! You are ${notes.age}`);

