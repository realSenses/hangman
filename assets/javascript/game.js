//reference DOM element
var $newGameButton = document.getElementById('new-game-button');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesLeft = document.getElementById('guesses-left');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

//Game Variables wordBank, wins, losses, picked word, guesses left, game running, picked word placeholder, guessed letter bank, incorrect letter bank
var wordBank = ["Milky Way", "Andromeda", "Black Hole"];
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var gameRunning = false;
var pickedWord = '';
var hiddenWordArray = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

//newGame function to reset all stats pick one and create placeholder
function newGame() {
    //reset game info
    gameRunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    hiddenWordArray = [];

    //Pick a word
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // Create placeholders out of pickedWord
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === ' ') {
            hiddenWordArray.push(' ');
        } else {
            hiddenWordArray.push('_');
        }
    }

    //Write all New Game info to DOM
    $guessesLeft.textContent = guessesLeft;
    $placeholders.textContent = hiddenWordArray.join('');
    $guessedLetters.textContent = incorrectLetterBank;
}
//letterGuess function takes in leter picked and checks to see if its in the word
function letterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1);
        //Game Logic
        guessedLetterBank.push(letter);

        //Check if guessed letter is in my picked word
        for (var i = 0; i < pickedWord.length; i++)
        //Convert both values to lower case to compare correctly
        if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
           //if a match swap out placeholder with actual letter
            hiddenWordArray[i] = pickedWord[i];
        }
    }
        $placeholders.textContent = hiddenWordArray.join('');


         {
        if (!gameRunning) {
            alert('Game is not running. Click new game button');
        } else {
            alert('you have already guessed this letter, try a new one');
        }
    }


//checkIncorrect(letter)
function checkIncorrect(letter){
    //Check to see if letter didn't make it into hiddenWordArray
    if (
    hiddenWordArray.indexOf(letter.toLowerCase()) === -1 
    &&
    hiddenWordArray.indexOf(letter.toUpperCase()) === -1
     ) {
         //subtract guesses
         guessesLeft --;
         //Add incorrect letter to incorrectLetterBank
         incorrectLetterBank.push(letter);
         //Write new bank of incorrect letters to DOM
         $guessedLetters.textContent = incorrectLetterBank.join(' ');
         //write new amount of guesses left to DOM
         $guessesLeft.textContent = guessesLeft;
     }
     checkLoss();
}
//checkLoss
function checkLoss() {
    if (guessesLeft === 0) {
        losses++;
        gameRunning = false;
        $losses.textContent = losses;
        $placeholders.textContent = pickedWord;
    }
    checkWin();
}
//checkWin
function checkWin() {
    if (pickedWord.toLowerCase() === hiddenWordArray.join('').toLowerCase());
    {
        wins++;
        gameRunning = false;
        $wins.textContent = wins;
    }
}
//add Event listener
$newGameButton.addEventListener('click', newGame);
//add onKeyUp
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
};