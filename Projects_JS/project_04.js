let randomNumber = parseInt(Math.random() * 100 + 1);
//random number generatio--> 
//generate a rondom number between 1-100 by MATH.RANDOM() 
//*100 for decimal placement and +1 for tense place onnly 
//use ParseInt() method to remove extra decmials digit.

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses')

const remaining = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')

//all html tags are selected by querySelecctor

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true;


//valid statement about game
//value btw 1 -100 actual value
if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        //  console.log(guess);
        validateGuess(guess);
        //if statement to ccheck whether the game is going to start or not lke checkcing the conditions 

    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid nnumber')
    } else if (guess < 1) {
        alert('Please enter a valid number more than 1')
    } else if (guess > 100) {
        alert('Please enter a valid number less than 100')
    } else {

        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {

    if (guess === randomNumber) {
        displayMessage(`CORRECT YOU WON `)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOO high`)
    }
    //number is between ranges right or wrong also message RIGHT WRONG value
}



function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  ,`
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;

    //value cleaner for next value 
    //update array and store prev and remmaining guess
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;



    //interact with DOM and give a message  
}



function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}



function newGame() {
    //new game
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disables');
        startOver.removeChild(p);
        playGame = true;
    })
}