//keeping track of what goes where and why and where it comes from and when
// basically WTF


//MAP

function higherOrder(callback) {
    callback();
}

var wooooooo = function () {
    console.log("WOOOOOOO")
}
// higherOrder(wooooooo);

function doubleNumbers(numbers) {
    return numbers.map(function (number) {
        return number * 2;
    });
}

function doubleNum(number, i) {
    if (i % 2 === 0) {
        return number * 2;
    } else {
        return number;
    }
}

function map(arr, callback) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        //push into the output array the return value of callback with the current item as an argument
        output.push(callback(arr[i], i));
    }
    return output;
}

// console.log(map([1, 2, 3, 4, 5], doubleNum));

// in real life:
var numbers = [1, 2, 3, 4, 5];
// numbers.map(doubleNum);

//to abstract even more:
function doubleNumbersAtEvenIndex(numbers) {
    return numbers.map(doubleNum);
}

//FILTER

function fiveAndGreater(numbers) {
    return numbers.filter(function (num) {
        return num >= 5;
    })
}

// console.log(fiveAndGreater([1, 2, 3, 4, 5, 6, 7]));

//REDUCE

//under the hood
function reduce(arr, callback, initialVal) {
    var total = initialVal || arr[0];
    for (var i = initialVal ? 0 : 1; i < arr.length; i++) {
        total = callback(total, arr[i]);
    }
    return total;
}

function addTogether(total, val, i) {
    return total + val;
}

var numbers = [100, 0, 0, 0, 0];
// console.log(reduce(numbers, addTogether));

// actual .reduce:
// console.log(numbers.reduce(addTogether));

var users = [{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

console.log(users.reduce(function (total, person, i) {
    return total + person.age;
}, 0) / users.length);

//SORT
