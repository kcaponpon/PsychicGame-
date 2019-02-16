// array filled with letters that we will guess
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// guesses left for countown 
var guessesLeft = 9;
var lettersGuessedSoFar = [];
var computerGuess = [];


// track wins and losses
var wins = 0;
var losses = 0;

var copmuterGuess = computerChoices=[Math.floor(Math.random() * computerChoices.length)];

var updateGuessesLeft = function() {
    document.querySelector(".guesses").innerHTML = guessesLeft;
};

var remainingLetters = function() {
    lettersGuessedSoFar = letters[Math.floor(Math.random() * letters.length)];
}



var reset = function () {
    guessesLeft = 9
    lettersGuessedSoFar = [];
    updateLettersToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};