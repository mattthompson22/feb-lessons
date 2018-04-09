// PROMISES

//A promise is an object

//3 states of a promise:
//pending

//resolved

//rejected

const getCoffee = new Promise((resolved, rejected) => {
    let coffee;
    let failureMsg;
    setTimeout(() => {
        let success = Math.random() < .5;
        if (success) {
            coffee = "Medium Roast is ready";
            resolved(coffee);
        } else {
            failureMsg = "The machine is broken, come back later"
            rejected(failureMsg);
        }
    }, 3000);
});

getCoffee
    .then(rainbowpants => console.log(rainbowpants),
        failureMSg => console.log(failureMSg));

console.log("Meanwhile, Im going to continue teaching ");
