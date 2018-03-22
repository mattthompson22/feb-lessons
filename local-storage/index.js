// Ive just logged in to a website
//  the server sent me a token to use authorization
// store token in local storage to have for later

var token = "w38wrgh8w4gr8w45t8srg.go8trb9rb8rsnsrht74wgw45g.reg97w38gw8ewr878sb";

// localStorage.setItem("token", token);

// pretend ive signed off and shut my computer down
// later i go to the same site.
//  i dont want to have to log in every single time
// so i want to GET the token from storage and use that to log in automatically

// function login() {
//     if (localStorage.getItem("token")) {
//         alert("Welcome! You have been logged in automatically!")
//     } else {
//         alert("Sorry you must log in!");
//     }
// }
// login();

var cart = [{
        type: "transistor radio",
        price: 2
    },
    {
        type: "vinyl record",
        price: 15
    },
    {
        type: "iphone",
        price: 1000
    }
]

localStorage.setItem("cart", JSON.stringify(cart));
console.log(JSON.parse(localStorage.getItem("cart")));


var str = "im a string";
sessionStorage.setItem("str", str);

var num = 10;
sessionStorage.setItem("num", num);
console.log(sessionStorage.getItem("num"));

var bool = true;
sessionStorage.setItem("bool", bool);

var obj = {
    key: "value",
    method: function(){
        console.log("im a method");
    }
}

localStorage.setItem("obj", JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("obj")));

var arr = [4, true, "yellow"];

localStorage.setItem("arr", JSON.stringify(arr));
console.log(JSON.parse(localStorage.getItem("arr")));

window.addEventListener("click", function(){
    // handle the logic here
    console.log("i clicked!");
});