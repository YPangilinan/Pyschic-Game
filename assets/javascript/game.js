//array for computer choice of letters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h","i","j","k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w","x","y", "z"];
//empty variables
var guesses = [];

//global variables
var userGuess =[];

//counter variables
var wins =0;
var losses=0;
var guessesLeft=10;


//user will press a key to start the game

document.onkeyup = function(event){
    var userGuess = event.key;
    guesses.push(userGuess);
    guessesLeft--;

console.log(userGuess);

//computer will randomly generate a letter

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerGuess);

//if the letters match, they win
if (userGuess === computerGuess){
    alert("you guessed my letter!");
    wins++;
    reset();
}

if (guessesLeft == 0){
    losses++;
    alert("aw darn! try again!");
    reset ();
}

//if the letters don't match they lose

console.log(guessesLeft);
console.log(guesses);

//display on the screen what letters they have already guessed

//update guesses left whenever they press a key
//dom manipulation
document.getElementById("wins").innerHTML = " " + wins;
document.getElementById("losses").innerHTML = " " + losses;
document.getElementById("guessesLeft").innerHTML = " " + guessesLeft;
document.getElementById("guesses").innerHTML = "   " + guesses;
}
//reset game when there is a win or a loss

function reset(){
    guessesLeft = 10;
    guesses = [];
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
}

