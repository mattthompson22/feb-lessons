// look at each letter of the input string
// add each letter to an object if it's not already there
// if it's already there, increase its count
// print the object to the console

function letterFreq(str) {
    var output = {};
    for (var i = 0; i < str.length; i++) {
        if (output.hasOwnProperty(str[i])) {
            output[str[i]]++;
        } else {
            output[str[i]] = 1;
        }
    }
    return output;
}

var phrase = 'slimy smelly solution';

console.log(letterFreq(phrase));


let cow = {
    eatsGrass: true
}

cow.hasOwnProperty("eatsGrass");