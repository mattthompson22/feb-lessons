function fizzBuzz () {
    arrFizzBuzz = [];
    for (var i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arrFizzBuzz.push('fizzbuzz')
        } else if (i % 3 === 0) {
            arrFizzBuzz.push('fizz')
        } else if (i % 5 === 0) {
            arrFizzBuzz.push('buzz')
        } else {
            arrFizzBuzz.push(i)
        }
    }
    return arrFizzBuzz;
}

console.log(fizzBuzz());