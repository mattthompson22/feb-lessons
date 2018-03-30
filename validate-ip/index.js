// compare string to regex expr
// use .test to match against string

//check for not ending in a dot, number between 0 - 255, doesnt start with a zero, exactly 4 sets of numbers, separated by dot 

// const validateIp = (ipAddress) => /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(ipAddress);

const isValidIP = str => {
    let arr = str.split(".");
    if (arr.length !== 4) return false;
        return arr.every((str, i) => {
            let num = parseInt(str);
            if (str !== num.toString())
                return false;
            if (i === 0) {
                return (Number(str) > 0 && Number(str) < 256);
            } else if (i === 3) {
                return (Number(str) > 0 && Number(str) < 255)
            }
            else {
                return (Number(str) > -1 && Number(str) < 256)
            }
        });
}
console.log(isValidIP("1.203.0.5"));