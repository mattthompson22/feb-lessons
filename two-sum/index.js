const twoSum = (arr, target) => {
    // take first num in array
    // loop through rest of array
    // find numbers that add up to target

    // rinse and repeat for each number in array

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return "NOT FOUND"
}

console.log(twoSum([1, 2, 3, 0], 2));
