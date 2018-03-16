axios.get("https://api.vschool.io/bob/todo").then(function(response) {
    console.log(response.data);
    var todoList = document.getElementById("todos");
    todoList.innerHTML += "<li>" + response.data[0].title + "</li>"
});

axios.post("https://api.vschool.io/bob/todo", {title: "Steal Ben's newsboy hat"}).then(function(response) {
    console.log(response.data);
});