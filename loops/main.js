// var numbers = [];

// for (var i = 0; i < 10; i++) {
//     numbers.push(i);
// }

// console.log(numbers);

var output = [];
for (var i = 0; i < 3; i++) {
    //all the code here gets run 3 times
    output.push([])
    for (var j = 0; j < 3; j++) {
        //all the code here gets run 3 times
        output[i].push(0);
    }
}

console.log(output);