var ask = require('readline-sync')
var playerLife = 3;

var playTheGame = function() {
    var playerName = ask.question("Heyo, what's your name?");
    console.log("Thanks " + playerName + "! So very nice to meet you!")
    if (playerName === "Ben") {
        console.log("You're stealing my life away");
        playerLife--;
        console.log(playerLife);
    } else if (playerName === 'Jamie') {
        console.log("More life for you")
        playerLife++;
        console.log(playerLife);
    }
}


while (playerLife > 0) {
    playTheGame();
}

console.log('Dun dun duuuuhhuuhhn')

// while (kingIsNotInCheck === true) {
//     keepPlayingChess()
// }

// if (playerOneVictory) {
//     alert('Congrats Player One!!')
// } else if (playerTwoVictory){
//     alert('Congrats Player Two!!')
// } else {
//     alert("How'd you do that!???")