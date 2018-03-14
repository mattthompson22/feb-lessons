// higher order function:
// a function that either takes as parameter another function OR returns a function

// examples that we know:
// var button = document.getElementById("button");

// button.addEventListener(function(e){
//     console.log(e.name);
// })

// function calculate(operator, x, y){
//     return operator(x, y);
// }

// function sum(x, y){
//     return x + y;
// }
// function absVal(x, y){
//     return Math.abs(x - y);
// }

// console.log(calculate(absVal, 5, 5));

// forEach takes a callback function as a parameter, as well as an array
// call the callback ON EACH ITEM OF THE ARRAY.

// var list = document.getElementById("list");

// function createListItemFromName(str) {
//     var li = document.createElement("li");
//     li.innerHTML = str;
//     list.appendChild(li);
// }

// function forEach(callback, arr) {
//     for (var i = 0; i < arr.length; i++) {
//         callback(arr[i]);
//     }
// }

// var names = ["ben", "morgan", "ilian", "jen", "ateeq", "matt"];
// names.forEach(createListItemFromName);

// function morgan(callback1, callback2, x){
//     for(var i = 0; i < x; i++){
//         callback1();
//         callback2();
//     }
// }

// function heaven(){
//     console.log("im counting to 10");
// }
// function danielle(){
//     console.log("say abc's")
// }

// morgan(danielle, heaven, 5);

function filter(callback, arr) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}

function isAdult(personObj) {
    return personObj.age >= 18;
}

var data = [{
        age: 10
    },
    {
        age: 10
    },
    {
        age: 17
    },
    {
        age: 18
    },
    {
        age: 20
    },
    {
        age: 45
    },
    {
        age: 9
    },
    {
        age: 12
    }
]

var adults = filter(isAdult, data)
console.log(adults)



