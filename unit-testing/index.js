var assertEqual = function (actual, expected) {
    if (actual !== expected) {
        throw {
            type: "Fail",
            details: {
                actual: actual,
                expected: expected,
                msg: "Expected " + actual + " To equal " + expected
            }
        };
    } else {
        console.log("Success!", {
            type: "Success",
            details: {
                actual: actual,
                expected: expected
            }
        });
    }
}

function describe(message, testFunc) {
    console.log("Test being run: " + message);
    try {
        testFunc();
    } catch (err) {
        console.log(err);
    }
}

function helperCallbForFilt (strInp) {
    var countC = 0;
    var countO = 0;
    var countE = 0;
    for (var i = 0; i < strInp.length; i++) {
        if (strInp[i] === "c") {
            countC++;
        } else if (strInp[i] === "o") {
            countO++;
        } else if (strInp[i] === "e") {
            countE++;
        }
    }
    if ((countC + countE + countO) % 3 === 0) {
        return (countC + countE + countO) / 3;
    }
 }

 var testCases = {
     case0: "code",
     case1: "ccc",
     case2: "cofe",
     case3: "xxxcorecodexxx"
 }

describe("Sum function", function () {
    assertEqual(helperCallbForFilt(testCases.case0), 1);
    assertEqual(helperCallbForFilt(testCases.case1), 0);
    assertEqual(helperCallbForFilt(testCases.case2), 1);
    assertEqual(helperCallbForFilt(testCases.case3), 2);
});