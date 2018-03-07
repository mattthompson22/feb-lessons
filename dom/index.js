var header = document.createElement("div");
var body = document.body;

header.id = "header";
header.className = "header";
header.innerHTML = "test";
header.style = "font-family: Fantasy";

body.prepend(header);

console.log(document.body.children[1])
