var formElement = document.getElementById("travel-form");

formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    var firstName = formElement.firstName.value;
    var lastName = formElement.lastName.value;
    var age = formElement.age.value;
    var email = formElement.email.value;
    alert(
        "First Name: " + firstName + 
        "\nLast Name: " + lastName + 
        "\nAge: " + age + 
        "\nEmail: " + email
    )
    formElement.reset()
});