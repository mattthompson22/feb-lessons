// console.log(thishasnoreference);
// console.log("Im code after the reference error, but youl never see me, because im after an error");

// try {
//     console.log(thishasnoreference);
// } catch (err) {
//     // do something with the err
//     console.log(err);
// }

// console.log("im code after the try block!");

// write function that randomly determines whether the request was successful

function sendResponse() {
    var success = Math.random();
    if (success < .5) {
        return {
            data: {
                username: "Btdev29",
                email: "btdev429@dev.com"
            }
        }
    } else {
        throw "Server is down";
    }
}

// write function that handles the response from the request
function login() {
    try {
        var data = sendResponse();
        console.log(data);
    } catch (err) {
        console.log(err);
    } finally {
        // run this code no matter what, regardless of error

    }
}
// login();

function sum(x, y) {
    //check data types first and throw error
    if (typeof x !== "number" || typeof y !== "number") {
        throw "Input must be a number";
    }
    return x + y;
}

try {
    console.log(sum("3", 4));
} catch (err) {
    console.log(err);
}