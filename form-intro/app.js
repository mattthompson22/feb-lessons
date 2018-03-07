var form = document.getElementById("submit");
var nameInput = document.getElementById("firstName");
var peanutBox = document.getElementById("peanuts");
var pollenBox = document.getElementById("pollen");
var wheatBox = document.getElementById("wheat");

var data = {
    firstName: "",
    allergies: []
}

nameInput.addEventListener("input", function (event) {
    data.firstName = event.target.value;
    console.log(data);
});

function setAllergy(event) {
    // user clicks on checkbox
    // if its checked, add to the array
    console.log(event.target.name);
    if (event.target.checked) {
        data.allergies.push(event.target.name);
    } else {
        // if its not checked remove from the array
        //find where string is
        var index = data.allergies.indexOf(event.target.name)
        // splice the string out of the array from the index
        data.allergies.splice(index, 1);
    }
    console.log(data.allergies);
}

pollenBox.addEventListener("change", setAllergy)
wheatBox.addEventListener("change", setAllergy)
peanutBox.addEventListener("change", setAllergy)

form.addEventListener("submit", function () {
    alert("First Name: " + data.firstName + "\n")

});