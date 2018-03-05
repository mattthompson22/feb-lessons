// true
// false

// var didBobEatBreakfast = true;
// if (didBobEatBreakfast) {
//     //do this code
//     console.log("I'm full from my yogurt");
// }

// comparison operators < > <= >= === == ! !==

// var myAge = -5;

// if (myAge >= 18) {
//     console.log("Welcome to Friday 13th")
// } else if (myAge >= 13) {
//     console.log("Welcome to Black Panther");
// } else if (myAge >= 0) {
//     console.log("Welcome to Toy Story!")
// } else {
//     console.log("Bro you're from the future");
// }

// var height = 5
// var age = 16;

// //logical operators && ||

// // AND GATE (&&)

// // x     y     |  output
// // true  true  |  true
// // true  false |  false
// // false false |  false
// // false true  |  false

// if (true && true) {
//     console.log("output true");
// }

// // OR GATE (||)

// // x     y     |  output
// // true  true  |  true
// // true  false |  true
// // false false |  false
// // false true  |  true

// if (true || true) {
//     // would run
// }
// if (false || true) {
//     // would run
// }
// if (true || false) {
//     // would run
// }
// if (false || false) {
//     // wouldnt run
// }

// // TRUTH FALSEY

// var name = "Ben";

// if (0) {
//     // some code and stuff
// }

// if("4" === 4){

// }

// var fakeVar;

// if (typeof fakeVar === "undefined") {
//     console.log("Im not defined")
// }

var person = {
    name: "Bobby",
    age: 12
}

// var bob = ["B", "o", "b", "b", "y"];

if(person.name[0] === "B"){
    // do some code
}
if(person.name.charAt(0) === "B"){
    //same thing
}

if (person.age >= 18){
    if (person.name[0] === "B"){
    console.log(person.name + " is allowed to go to the movie");
    }
} else {
    console.log(person.name + " is not allowed to go to the movie");
}

if(person.age >= 18 && person.name[0] === "B"){
    
}




