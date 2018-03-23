//expression
const nameOfFunc = function () {

}

//declarative
function anotherFunc() {

}

// anonymous
(function () {

})

const expressArr = () => {
    //function body
}

//anoynomous
() => {}

[1, 2, 3].filter(num => {
    return num % 2;
});

x => x;

//no paramters
() => {}

//one paramter
oneParam => {}

//more than one parameter
(oneParam, twoParam) => {};

//only one line in the function body --> return is IMPLIED
(x, y) => x + y;
(x, y) => (x + y);

// more than one line in function body
(x, y) => {
    //more
    //than
    //one
    //expression
}

// return an object
(x, y) => ({
    x,
    y
})

//THIS

// the keyword 'this' is ALWAYS an object, its always context dependent, it always refers to the object which called the function

function speak() {
    console.log(`Hi, my name is ${this.name}`);
}

function introspect() {
    console.log(this);
}

const arrowIntrospect = () => console.log(this);

// introspect();
// arrowIntrospect();

const person = {
    name: "Ben",
    speak,
    introspect,
    arrowIntrospect
}

// person.arrowIntrospect();

// const Person = function (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.introspect = arrowIntrospect;

// const steven = new Person("Steven");
// steven.introspect();

// const data = this;

// const getData = function(cb){
//     let rawData = "abcdef"
//     cb(rawData);
// }

// getData(function(info){
//     data.info = info;
// })

//sometimes we want to refer to a different 'this' than the one we have available
// const getData = cb => {
//     let rawData = "abcdef";
//     cb(rawData);
// }

// getData(info => {
//     this.info = info;
// });


const translate = () => console.log(this.message);
// translate();



// const Translator = function () {}

// Translator.prototype.translate = translate;

const Traveler = function (name) {
    this.name = name;
    this.message = "blah blah blah";
    // this.translator = new Translator()
}

Traveler.prototype.speak = () => console.log(this.message);

const steven = new Traveler("Steven");

steven.speak();