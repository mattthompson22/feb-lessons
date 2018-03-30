// make a container array for the nested arrays
// fill it with ten arrays
// fill each sub-array with 10 numbers incremented by the row number multipled by column number
// return output array
const genMultTable = (n) => {
    const output = [];
    // let a = 0;
    // let b = 1;
    // let c = 0;
    for (let i = 1; i <= n; i++) {
        // a++;
        // b += 10;
        // c++;
        const row = [];
        for (let j = 1; j <= n; j++) {
            row.push(j * i);
        }
        output.push(row);
    }
    return output;
}
console.log(genMultTable());

