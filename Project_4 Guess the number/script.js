let randomNumber = Math.floor(Math.random() * 100 + 1);

const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas'); 

let prevGuesses = [];
let numGuesses = 1;
let maxGuesses = 10;

let playgame = true;

submitButton.addEventListener('click', (e) =>{
    e.preventDefault();
    const userGuess = parseInt(userInput.value);
    // console.log(userGuess);
    validateGuess(userGuess)
});


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1 || guess > 100){
        alert('Please enter a number between 1 and 100');
    } else{
        prevGuesses.push(guess);
        if (prevGuesses.length >= maxGuesses) {
            displayMessage(`Game Over! The number was ${randomNumber}.`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
     if (guess === randomNumber) {
            displayMessage(`Congratulations! You guessed the number ${randomNumber} correctly.`);
            endGame();
        } else if (guess < randomNumber){
            displayMessage('Your guess is too low!');
        } else if (guess > randomNumber){
            displayMessage('Your guess is too high!'); 
        }
    
}
function displayGuess(guess) {
    userInput.value = '';  
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    remaining.innerHTML = maxGuesses - prevGuesses.length;
}
function displayMessage(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';  
    userInput.setAttribute('disabled', '');
    submitButton.setAttribute('disabled', '');
    startover.innerHTML += `<button id="newgame">Start New Game</button>`;
    startover.appendChild(p);
    playgame = false;
    newGame();
}

function newGame() {   
    const newGameButton = document.querySelector('#newgame');
    newGameButton.addEventListener('click', function (e) {
        console.log('New Game Started');
        randomNumber = Math.floor(Math.random() * 100 + 1);
        prevGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        loworhi.innerHTML = '';
        remaining.innerHTML = maxGuesses;
        userInput.removeAttribute('disabled');
        submitButton.removeAttribute('disabled');
        startover.removeChild(p);
        newGameButton.remove();
        playgame = true;
    });
}
