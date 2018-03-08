// Math.random(), Math.floor(), .charAt(), String.fromCharCode()
// pick keycode from ASCII Table
// pick from string of potential characters

// Write a function that returns a string of randomly generated characters with a length of whatever is provided as an argument

function genPwd(pwdLength) {
    // store a string of potential characters
    var characterList = "12345abcdefABCDEF!@#$%";
    var password = "";
    // abcdefghijklmnopqrstuvwxyz ....etc

    // do the following pwdLength amount of times:
    for (var i = 0; i < pwdLength; i++) {
        // randomly select and store a index from the potential list
        var randomIndex = Math.floor(Math.random() * characterList.length);
        // add the chosen character from the index to the password
        password += characterList.charAt(randomIndex);
    }
    // return the new string 
    return password;
}

// console.log(genPwd(5));

function genPwdAscii(pwdLength) {
    var password = "";
    for (var i = 0; i < pwdLength; i++) {
        //pick a random number between 33 and 126 inclusively
        var asciiCode = Math.floor(Math.random() * (126 - 33)) + 33;
        // convert that number to a character and add it to the password
        password += String.fromCharCode(asciiCode);
    }
    return password;
}

// console.log(genPwdAscii(5));


function randomPassword() {
    return Math.random().toString(36).slice(2);
}
console.log(randomPassword().length);