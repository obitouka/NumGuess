const compGuess = Math.floor(Math.random() * 10 + 1);
console.log(`Computer guess ${compGuess}`);
const userGuessId = document.querySelector("#guessInput");
const sumbitButtonID = document.querySelector("#guessSubmit");
const lastGuessID = document.querySelector("#prevGuess");
const guessRemID = document.querySelector("#guessLeft");
const resultId = document.querySelector("#result");
const p = document.createElement('p');

let prevGuess = [];
let canPlay = true;
let guessLeft = 5;

if (canPlay) {
    sumbitButtonID.addEventListener('click', (e) => {
        e.preventDefault();
        const userGuessId = document.querySelector("#guessInput").value;
        validateGuess(userGuessId);
    });
}

function validateGuess(userGuessId) {
    if (isNaN(userGuessId) || userGuessId < 1 || userGuessId > 10) {
        alert("Enter a valid range");
    }
    else {
        prevGuess.push(userGuessId);
        displayGuess(userGuessId);

        if (guessLeft == 0) {
            displayMsg("Game over. No guess left", "red");
            endGame();
        } else {
            checkGuess(userGuessId);
        }
    }
}

function checkGuess(userGuessId) {
    if (userGuessId == compGuess) {
        displayMsg("Correct Guess!!!", "green");
        endGame();
    } else if (userGuessId < compGuess) {
        displayMsg("Num is low", "red");
    } else if (userGuessId > compGuess) {
        displayMsg("Num is high", "red");
    }
}

function displayGuess(userGuessId) {
    lastGuessID.innerHTML = prevGuess;
    guessLeft--;
    guessRemID.innerHTML = `${guessLeft}`;
}

function displayMsg(msg, color = "white") {
    p.innerHTML = `<h2 style="color: ${color};">${msg}</h2>`;
    resultId.append(p);
}

function endGame() {
    userGuessId.setAttribute('disabled', '');
    sumbitButtonID.setAttribute('disabled', '');
    canPlay = false;
    newGame();
}

function newGame() {
    const restartBtn = document.createElement('button');
    restartBtn.textContent = "Restart Game";
    restartBtn.onclick = () => {
        window.location.reload();
    };
    restartBtn.style.backgroundColor = "purple";
    restartBtn.style.color = "white";
    resultId.append(restartBtn);
}

