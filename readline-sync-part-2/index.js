var rs = require("readline-sync");

// prompts
// get one number
var num1 = rs.question("Pick an integer");
// get another number
var num2 = rs.question("Pick another integer");
// choose operation
var operations = ["+", "-", "*", "/"];
var index = rs.keyInSelect(operations, "Choose the operation you wish to perform");

    // chooser function
    // selects which arithmetic function to perform, and calls it  using prompt numbers as arguments

    // arithmetic functions

    function add(x, y) {
        return x + y;
    }
//multiply
//divide
//subtract