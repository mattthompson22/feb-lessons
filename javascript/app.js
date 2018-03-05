// Given an int n, return True if it is within 10 of 100 or 200.
// Note: abs(num) computes the absolute value of a number.

nearHundred = function (n) {
    //use a conditional
    // < > || &&
    // ((n > 89 && n < 111) || (n > 189 && n < 211)) 
    if ((n > 89 && n < 111) || (n > 189 && n < 211)) {
        return true
    } else {
        return false;
    }
}