var todoList = document.getElementById("todo-list");

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var todoObj = data[i];
            var li = document.createElement("li");
            li.innerHTML = todoObj.title;
            todoList.appendChild(li);
        }
    }
}

xhr.open("GET", "https://api.vschool.io/ben/todo/", true);
xhr.send();

//when the page loads, send a request for some data
// with that data, convert it to javascript
// create the necessary html elements which will; display that data