//create a dictionary object
// function should either add or find a given word
// adding:
// set the word as a property on the object
// setting the definition as a value to that property

//searching:
// check if dictionary has a property of the word youre looking for

//  if im adding a word, i need to provide a definition



function lookItUp(word, dictionary, def) {
    word = word.toLowerCase();
    if (dictionary.hasOwnProperty(word)) {
        return dictionary[word];
    } else {
        dictionary[word] = def;
        return true;
    }
}

var dictionaryEng = {};

console.log(lookItUp("absquatulate", dictionaryEng, "verb: to leave abruptly"));
console.log(lookItUp("absquatulate", dictionaryEng));

// console.log(dictionaryEng.absquatulate);

var Dictionary = function (language) {
    this.language = language;
    this.content = {}
}
Dictionary.prototype.addWord = function (word, def) {
    word = word.toLowerCase();
    if (this.content.hasOwnProperty(word)) {
        throw "That word already exists"
    } else {
        this.content[word] = def;
    }
}