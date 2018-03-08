//these are the form and input elements
//we can ask them questions such as "what is your curent value?, Are you checked? Are you selected?"
var form = document.getElementById("submit");
var nameInput = document.getElementById("firstName");
var peanutBox = document.getElementById("peanuts");
var pollenBox = document.getElementById("pollen");
var wheatBox = document.getElementById("wheat");

//this is just an object to store user input data
// we define it in terms of what is meaningful to use as humans
var data = {
    firstName: "",
    allergies: []
}

// these event listeners just track the user activity and add the data to the approriate part of the data object
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

//send off the information now that it has been collected
form.addEventListener("submit", function () {
    alert("First Name: " + data.firstName + "\n" + "Allergies: " + data.allergies.join(", "));
});