//take an array of names, and print them to the page;

let names = ["Ben", "Bob", "Eric", "Marcus"];
let ul = document.getElementById("names");

//loop through array of names

for (let i = 0; i < names.length; i++) {
   //for each item, make an element to display that contains the data
   //use createElement() to make a li tag.
   let li = document.createElement("li");
   //add the current name to the li
   li.innerHTML = names[i];
    //append element to page
    ul.appendChild(li);
}






