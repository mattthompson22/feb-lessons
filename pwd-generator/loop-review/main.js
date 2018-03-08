// var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//create an array
//fill the array with 3 arrays
//each of the inner arrays will have 3 "x"'s
//inject the arrays with 'x's into the bigger array
//return bigger array

function chessBoardGen(num) {
    var output = []
    for (var i = 0; i < num; i++) {
        output.push([])
        for (var j = 0; j < num; j++) {
            // output[i][j] = 'X'
            output[i].push(`${i} & ${j}`)
        }
    }
    return output;
}

console.log(chessBoardGen(3));