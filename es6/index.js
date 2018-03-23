//const

var pi = 3.1415926;

pi = 3;

// console.log(pi);

// const phi = 1.61;

// phi = 2;

// console.log(phi);

const stubbornFrog = {
    name: "Fred",
    habits: ["doesn't listen", "dont give AF"]
}
stubbornFrog.habits.push("drinks soda and eats chips all day")
// console.log(stubbornFrog);

stubbornFrog.name = "Bob";
// console.log(stubbornFrog);

// let
// it is a block-scoped variable declaration

// var x = 10;
// function funcScope() {
//     var x = 11;
//     console.log(x);
// }
// funcScope();
// console.log(x);


// var x = 10;

// if (true) {
//     var x = 11;
// }
// console.log(x);

var i = 10000;
for (var i = 0; i < 10; i++) {}

// console.log(i);
let j = 2846182356178346;
j = 100;
// console.log(j);
for (let j = 0; j < 10; j++) {
    // console.log(j);
}
// console.log(j);

let z = 10;
if (true) {
    z = 11;
}

// console.log(z);

// template literals
const person = {
    name: "Ben",
    age: 29,
    birthday: "Apr 29, 1988"
}

// console.log("Hello " + person.name + ", you are " + person.age + " years old and your birthday is on " + person.birthday);

// console.log(`Hello ${person.name}, you are ${person.age} years old and your birthday is on ${person.birthday}`);

//spread operator

const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
// const num3 = [1, 2, ...num2, 3, 4, 5];
const num3 = [...num2, ...num1];
// console.log(num3);

const str = "abcdefg";
const arr = [...str];
// console.log(arr);

const orig = [1, 2, 3, 4, 5];
const copy = ["ayf", ...orig, 1, 2, 3];
orig[2] = 10;
// console.log(copy);

const objOrig = {
    key: "value"
}

const copyObj = {
    ...objOrig,
    newKey: "newVal"
};

// console.log(copyObj)

const incomingData = [1, 2, 3, 4, 5];

const dataToSendBack = [...incomingData, "newData"];

// deconstructing / destructuring

const names = ["Ilian", "Danielle", "Will", "Morgan", "Laney", "Matt W"];
const [nicePerson, asphalt, alsoNice] = names;

// literally the same as:
// let ilian = names[0], morgan = names[3], laney = names[4]

// console.log(a, b, c);

const house = {
    bedrooms: 4,
    bath: 3,
    kitchen: 1.5,
    price: 10000000
}

const {
    bedrooms,
    bath,
    kitchen,
    price,
    location = "LA"
} = house;

// console.log(`For Sale: \nBedrooms: ${bedrooms}\nBathrooms: ${bath}`);

//default parameters
function exponent(x, y = 2) {
    return Math.pow(x, y);
}

// exponent(3);

// in es5:
function exponent(x, y) {
    if (y === undefined) {
        return Math.pow(x, 2);
    } else {
        return Math.pow(x, y);
    }
}

console.log(exponent(3));

//spread operator in function parameters:

function unknownArgs(...args) {
    args.forEach(function (arg) {
        console.log(arg);
    });
}

unknownArgs(1, 4, 6, "test", true, false);

//object literals

let name = "Ben";
let age = 29;

let person = {
    name,
    age
}