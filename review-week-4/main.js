var todoForm = document.getElementById("todo-form");
axios.get("https://api.vschool.io/bob/todo").then(function(response) {
    for (var i = 0; i < response.data.length; i++) {
        document.getElementById("todos").innerHTML += 
            "<li><button id='" + response.data[i]._id + "'> X </button>" + response.data[i].title + "</li>"
    }
})
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value
    }
    axios.post("https://api.vschool.io/bob/todo", newTodo).then(function(response) {
        document.getElementById("todos").innerHTML += "<li>" + response.data.title + "</li>"
    });
});

axios.put("https://api.vschool.io/bob/todo/5aaff5c2eec94d291400aeee", {title: "Buy Whole Milk"});
