let randomNumber =  parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subguess');
const userInput = document.querySelector('#guessNum');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let PlayGame = true;

if(PlayGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a Valid Number");
    }
    else if(guess < 1){
        alert("Please Enter a Number greater than 1");
    }
    else if(guess > 100){
        alert("Please Enter a Number less 100");
    }
    else{
        preGuess.push(guess);
        if(numGuess > 10){
            displayGuess(guess);
            displayMessage(`Game Over: Random Number is ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Woooooo.....You Guess Right Number`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TOOOO Low`);
    }
    else if(guess > randomNumber){
        displayMessage(`Number is TOOOO High`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaning.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    StartOver.appendChild(p);
    PlayGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        preGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaning.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled','');
        StartOver.removeChild(p);
        // displayGuess(guess).innerHTML = '';
        PlayGame = true;
    });
}
