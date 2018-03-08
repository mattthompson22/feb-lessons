var readlineSync = require("readline-sync");

var myName = readlineSync.question("What is your name?");
console.log("Welcome, " + myName + "!");

var isAdmin = readlineSync.keyInYN("Are you the administrator?");

if(isAdmin){
    readlineSync.question("What is the password?")
} else {
    console.log("Welcome to this useless app!");
    var options = ["menu", "tools", "help"];
    var index = readlineSync.keyInSelect(options, "What would you like to do next?");
    console.log("You are now in the " + options[index] + " section");
}



