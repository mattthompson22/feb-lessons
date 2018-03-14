// // find "code" in string

// var countCode = function (str) {
//     var count = 0;
//     for (var i = 0; i < str.length - 3; i++) {
//         if (str[i] + str[i + 1] + str[i + 3] === "coe") {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countCode("cozexxcope"))

function countCode(str) {
    var count = 0;
    var regEx = /co\we/g;
    // we know that the index is tracked with every regex.exec call
    // we know that if there is no match it returns null
    while(regEx.exec(str)){
        count++;
    }
    return count;
}
console.log(countCode("edoc"));