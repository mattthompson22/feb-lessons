var lyricsArr = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"
];

function brunoLyrics(arr) {
    return arr.join(" ");
}
// console.log(brunoLyrics(lyricsArr));

function everyOther(arr) {
    var skip = [];
    for (var i = 0; i < arr.length; i += 2) {
        skip.push(arr[i]);
    }
    return brunoLyrics(skip);   
}

// console.log(everyOther(lyricsArr))

function reverseSong(arr){
    arr.reverse();
    song = arr.join(" ");
    return song;
}

console.log(reverseSong(lyricsArr))