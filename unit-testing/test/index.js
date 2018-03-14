var chai = require("chai");
var assert = chai.assert;

var helperCallbForFilt = require("../app.js");

var testCases = {
    case0: "code",
    case1: "ccc",
    case2: "cofe",
    case3: "xxxcorecodexxx"
}

describe("counting code warmup test", function () {
    it("should return 1", function () {
        assert.equal(helperCallbForFilt(testCases.case0), 1)
    });
    it("should return 0", function(){
        assert.equal(helperCallbForFilt(testCases.case1), 0)
    })
    it("should return 1", function(){
        assert.equal(helperCallbForFilt(testCases.case2), 1)
    })
    it("should return 2", function(){
        assert.equal(helperCallbForFilt(testCases.case3), 2)
    })
})

//to install mocha: npm install -g mocha

// To run the test, from the project folder type the command `mocha` into terminal