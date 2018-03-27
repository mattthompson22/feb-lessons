// convert all the words using split
// for any given word, check if it appears more than once
// store duplicates to an array.
const str = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";

const test = "test wrong";

// const matchWords = str => {
//     const counts = {};
//     const output = [];
//     const rmSpecial = str.replace(/[^a-z\s]/gi, "").toLowerCase();
//     const strArray = rmSpecial.split(" ");
//     for (let i = 0; i < strArray.length; i++) {
//         if (counts.hasOwnProperty(strArray[i])) {
//             if (!output.includes(strArray[i])) {
//                 output.push(strArray[i]);
//             }
//         } else {
//             counts[strArray[i]] = 1;
//         }
//     }
//     return output;
// }



const matchWords = str => {
    const counts = {};
    const output = [];
    str.replace(/[^a-z\s]/gi, "").toLowerCase().split(" ").forEach(str => {
        if (counts.hasOwnProperty(str)) {
            if (!output.includes(str)) {
                output.push(str);
            }
        } else {
            counts[str] = 1;
        }
    })
    return output;
}

console.log(matchWords(str));
