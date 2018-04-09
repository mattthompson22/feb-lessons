//recursive functions are functions that call themselves inside themselves

//two things:

//1) avoid exceeding maximum call stack by having base case ====>  a 'way' out of the recursion

// 2) call the function inside itself

//factorials:
// 5! = 5 * 4 * 3 * 2 * 1
//  3! = 3 * 2 * 1


const factorial = num => {
    if (num === 1)
        return 1;
    else
        return num * factorial(num - 1);
}

// console.log(factorial(6));

// factorial(6) => 6 * factorial(5) => 6 * 5 * factorial(4) => 6 * 5 * 4 * factorial(3) => 6 * 5 * 4 * 3 * factorial(2) => 6 * 5 * 4 * 3 * 2 * factorial(1) => 6 * 5 * 4 * 3 * 2 * 1

const gameOf3 = (n, counter = 0) => {
    if (n === 1)
        return counter;
    else if (n % 3 === 0)
        return gameOf3(n / 3, counter + 1);
    else if ((n + 1) % 3 === 0)
        return gameOf3((n + 1) / 3, counter + 1);
    else
        return gameOf3((n - 1) / 3, counter + 1);
}

console.log(gameOf3(9));

