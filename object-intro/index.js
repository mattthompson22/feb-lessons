// // What is an object

// // Composite Data type
// // contains key/value pairs separated by commas
// // wrapped in curly braces

// var ben = {
//     name: "Ben",
//     age: 29,
//     height: 6,
//     hobbies: []
// }
// var bensEvilTwin = ben;
// bensEvilTwin.age++;

// var bensAge = ben.age;
// // var evilTwinsAge = 29;
// bensAge++;

// // console.log(bensAge);
// // console.log(evilTwinsAge);

// // console.log(bensEvilTwin);
// console.log(ben);
// console.log(bensAge);


// var car = {
//     owner: {
//         name: "Ben",
//         age: 29,
//         height: 6,
//         hobbies: []
//     },
//     year: 2012,
//     color: "maroon",
//     make: "Subaru",
//     model: "Impreza",
//     plateNum: "2da7da",
//     pastOwners: [bensEvilTwin, { name: "Kermit The Frog", age: 60, height: 2 }, { name: "Darnell", age: 35, staysAtHomeWithHisMomma: true }]
// }

// //OBJECTS CAN HAVE FUNCTIONS AS PROPERTIES!!!!! WOOT


// var turnOff = function () {
//     console.log("Already did when I turned it on");
// };
// var samsungGalaxyPhone = {
//     year: 2017,
//     turnOn: function () {
//         console.log("BEEP boop WHIRRRRRRRR Chachachahc....BOOM");
//     },
//     turnOff: turnOff
// }

// samsungGalaxyPhone.turnOn();
// samsungGalaxyPhone.turnOff();



//THIS keyword

var speak = function () {
    console.log(this.sound);
}
var introduceMyself = function () {
    console.log(this);
}

var moose = {
    sound: "MRRRRRRRROOOOOOOOOOOOOEEEWWWWW",
    speak: speak,
    introduceMyself: introduceMyself
}
var elephant = {
    sound: "mmmmrrrrrooooooeeeewwwww",
    speak: speak,
    introduceMyself: introduceMyself
}
var pig = {
    sound: "oink.",
    speak: speak,
    introduceMyself: introduceMyself
}

// moose.speak();
// elephant.speak();
// pig.speak();

// moose.introduceMyself();
// elephant.introduceMyself();
// pig.introduceMyself();

// introduceMyself();

function Phone(model, type, price) {
    this.model = model;
    this.type = type;
    this.price = price;
}

var gorillaPants = new Phone("Samsung GalaxyS", "Android", 900);
console.log(newPhone);