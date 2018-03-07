var button1 = document.getElementById('button1');

button1.addEventListener('mouseenter', colorChange);
button1.addEventListener('mouseleave', colorChange)
var body = document.getElementsByTagName('body')[0];

body.addEventListener('wheel', function() {
    // console.log('for the win!!!1!!1!!')
    // body.style.backgroundColor = "orange";if (button1.style.backgroundColor === 'red') {
    if (body.style.backgroundColor === 'green') { 
    body.style.backgroundColor = 'orange'
    } else if (body.style.backgroundColor === 'orange') {
        body.style.backgroundColor = 'red'
    } else {
        body.style.backgroundColor = 'green'
    }
})


function colorChange(e) {
    //keep track of number of clicks
    //if button is clicked even nubmer of times, bgc = red
    //if button is clicked odd nubmer of times, bgc = white
    console.log(e);
    if (button1.style.backgroundColor === 'red') {
        button1.style.backgroundColor = 'white'
    } else {
        button1.style.backgroundColor = 'red'
    }
    
}


document.getElementById('button2').addEventListener('click', pokeBiruk)

function pokeBiruk(e) {
    console.log(e.target);
}

window.addEventListener('keyup', function(e) {
    console.log(e)
})