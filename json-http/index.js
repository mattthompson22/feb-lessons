var request = require("request");

function myFunc1() {
    console.log("1");
    myFunc3();
}

function myFunc2() {
    console.log("2");
}

function myFunc3() {
    console.log("3")
    myFunc2();
}

// myFunc1();  
// myFunc2();  
// myFunc3();  

// setTimeout(function(){
//     console.log("I'm late!!!!");
// }, 3000);

// myFunc2();

// function asyncGETWeatherData(callback){
//     var data = "Snowing today";
//     setTimeout(function(){
//         callback(data);
//     }, 2500);
// }

// asyncGETWeatherData(function(weatherData){
//     console.log("Today's forecast: " + weatherData);
// });

// request to the star wars api:

request("https://swapi.co/api/people/", function (err, response, body) {
    if(!err && response.statusCode === 200){
        var data = JSON.parse(body);
        console.log(data);
    }
})

console.log("WAITING FOR DATA....");