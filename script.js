// DOM
const roundText = document.getElementById('round');
const statusText = document.getElementById('status');
const pScoreText = document.getElementById('playerScore');
const cScoreText = document.getElementById('computerScore');
const resultText = document.getElementById('result');

const gameChoices = ["rock", "paper", "scissors"];
let roundCount,
    pScore,
    cScore;

    newGame();

// Game buttons ( uses index of gameChoices )
document.getElementById('rock').onclick = function() { playRound(0); };
document.getElementById('paper').onclick = function() { playRound(1); };
document.getElementById('scissors').onclick = function() { playRound(2); };

// New Game Button
document.getElementById('newGame').onclick = function() { newGame(); };

// Used to fix mod so -2 % 3 returns 1
function mod(num, modulo) {
    return ((num % modulo) + modulo) % modulo;
}

function newGame() {
    roundCount = 1;
    pScore = 0;
    cScore = 0;
    document.getElementById('buttons').style.display = "block";
    document.getElementById('newGame').style.display = "none";
    statusText.textContent = "Select Rock, Paper, or Scissors";

    displayScore();
}

function playRound(playerSelection) {
    // Returns index of gameChoices to use for computer
    computerSelection = Math.floor(Math.random() * 3);
    
    if (playerSelection === computerSelection) {
        resultText.textContent = `Round ${roundCount} result: Draw!`;
        displayScrollResult("draw");
    } 
    else if (mod(playerSelection - computerSelection, 3) === 1) {
        resultText.textContent = `Round ${roundCount} result: You won!`;
        pScore++;
    }
    else {
        resultText.textContent = `Round ${roundCount} result: You lost!`;
        cScore++;
    }
    displayStatus(playerSelection, computerSelection);
}

function displayScrollResult(result) {
    scrollResult.classList.add("fade");
    
    setTimeout(function() {
        scrollResult.innerHTML = result;
    }, 4000);
    setTimeout(function() {
        scrollResult.classList.toggle("fade");
    }, 4000);
};

function displayScore() {
    pScoreText.textContent = `Player score: ${pScore}`;
    cScoreText.textContent = `Computer score: ${cScore}`;
    roundText.textContent = `Round ${roundCount}`;
}

function displayStatus(playerSelection, computerSelection) {
    choices.textContent = `You chose ${gameChoices[playerSelection]}, Computer chose ${gameChoices[computerSelection]}`;
    if (pScore === 5 || cScore ===5) {
        document.getElementById('buttons').style.display = "none";
        document.getElementById('newGame').style.display = "block";
        if (pScore > cScore) {
            statusText.textContent = "You win!";
        } else {
            statusText.textContent = "You lost!";
        }


    } else {
        roundCount += 1;
    }
    displayScore();
}
