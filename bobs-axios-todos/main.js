const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");

// Given an `id`, send a delete request to the server and remove
// the element (<li>) on the page with that id
function deleteItem(id) {
    // axios.delete an item based on the id
    axios.delete(`https://api.vschool.io/bob/todo/${id}`).then(function() {
        document.getElementById(id).remove();
    });
}

// Mark a todo as completed and apply the CSS `completed` class
// to the associated <span> element.
function markTodoCompleted(todo) {

    // send a PUT request to the endpoint of this specific todo item (based
    // on its `id`). The body of the request (second param to axios.put)
    // is just sending in the one little change I want to make. (The server
    // will be smart enough to combine this small change with all the other
    // properties of the object rather than overwriting it completely.
    // `!todo.completed` says "the value should be the opposite of what it
    // currently is. If it's true, send in `!true` (which is `false`).
    axios.put(`https://api.vschool.io/bob/todo/${todo._id}`, {completed: !todo.completed})

    // when the PUT request was successful, toggle the `completed` class on the <span>
    // Check out the documentation for Element.classList here:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
        .then(function(response) {
            const li = document.getElementById(todo._id);
            const span = li.querySelector("span");
            span.classList.toggle("completed");
        });
}

// This function's job is to take a todo object and create a new
// list item (<li>). This function won't be in charge of adding
// the <li> to the DOM. That should be handled by whatever code
// is calling this function.
function createTodoLi(todo) {
    // Start by creating a new <li> element and give it the id of our todo's `_id`
    const todoLi = document.createElement("li");
    todoLi.id = todo._id;

    // Add the delete button and give it an event listener which calls
    // our `deleteItem` function above
    const button = document.createElement("button");
    button.addEventListener("click", function () {
        deleteItem(todo._id);
    });

    // Give it the "x" inside for the text. Using `textContent` is faster
    // and (I think) a little safer than using `innerHTML`.
    button.textContent = "x";

    // Append the button to the <li>
    todoLi.appendChild(button);

    // Create the <input type="checkbox"> and add an event listener
    // for when its clicked by the user. Checking or un-checking
    // the box should call our `markTodoCompleted` function above.
    const input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("change", function() {
        markTodoCompleted(todo);
    });

    // Append the checkbox to the <li>
    todoLi.appendChild(input);

    // Create a <span> element
    const span = document.createElement("span");

    // If the todo is marked as completed, we want the checkbox to
    // be checked and the span to have the `completed` CSS class added
    if (todo.completed) {
        input.checked = true;
        span.classList.add("completed");
    }

    // The span is for displaying the title of the todo item
    span.textContent = todo.title;

    // Append the span to the <li>
    todoLi.appendChild(span);

    // Return the <li> we've built so it can be added to the DOM
    // by whatever piece of code called this function.
    return todoLi;
}

// GET our full list of todos from the API. This is called as soon as the
// page loads, which is best for user experience. (We don't want them to
// have to click a button to get their todos or something like that).
axios.get("https://api.vschool.io/bob/todo").then(function(response) {

    // the data that comes back (`response.data`) is an array. Loop through
    // that array of objects, and for each one, create a new <li> with our
    // `createTodoLi` function above and prepend it to the todo list <ul>
    // We chose to use `prepend()` instead of `appendChild()` so that the
    // newest items would show up on the top, but that isn't necessary.
    // If you want newest items to show up on the bottom, just change
    // `todoList.prepend(...)` to `todoList.appendChild(...)`
    response.data.forEach(function(todo) {
        todoList.prepend(createTodoLi(todo));
    });
});

// Add a submit handler to our form for creating new todo items.
todoForm.addEventListener("submit", function(event) {

    // By default, form submit events refresh the page.
    // This line stops that from happening.
    event.preventDefault();

    // Gather the data from the inputs the user filled out into an object
    // We do this because the server expects to recieve an object with
    // the properties shown below.
    const newTodoItem = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value
    }

    // Now that we've gathered the data together into an object, send a POST request
    // to the server with the new object as the request body.
    axios.post("https://api.vschool.io/bob/todo", newTodoItem)

    // When the POST was successful, the server sends back the new todo
    // item (with `_id` and everything), so we'll create a new <li> using
    // our same function from above, then reset the form to clear the inputs
    // and can even do something cool like focus the cursor back into the
    // first input box so the user can quickly add more items.
        .then(function(response) {
            todoList.prepend(createTodoLi(response.data));
            todoForm.reset();
            todoForm.title.focus();
        });
});
