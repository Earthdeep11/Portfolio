// --- 1. Background Animation ---
const bgContainer = document.getElementById('bgAnimate');
function createCircles() {
    for (let i = 0; i < 15; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        const size = Math.random() * 80 + 20 + "px";
        circle.style.width = size;
        circle.style.height = size;
        circle.style.left = Math.random() * 100 + "%";
        circle.style.animationDelay = Math.random() * 5 + "s";
        circle.style.animationDuration = Math.random() * 15 + 10 + "s";
        bgContainer.appendChild(circle);
    }
}
createCircles();

// --- 2. Calculator Logic ---
const display = document.getElementById('display');
function addToDisplay(val) {
    if (display.value === '0' || display.value === 'Error') display.value = val;
    else display.value += val;
}
function clearCalc() { display.value = '0'; }
function calculateResult() {
    try {
        // eval is used for simplicity, but avoid in production with user input
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// --- 3. Modified Number Guess Game ---
let targetNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

function makeGuess() {
    const userInput = document.getElementById('guessInput');
    const msg = document.getElementById('guessMsg');
    const attemptDisplay = document.getElementById('attempts');
    const val = parseInt(userInput.value);

    if (isNaN(val) || val < 1 || val > 50) {
        msg.innerText = "Please enter 1 - 50!";
        return;
    }

    attempts++;
    attemptDisplay.innerText = `Attempts: ${attempts}`;

    if (val === targetNumber) {
        msg.innerHTML = `JACKPOT! 🎉 It was ${targetNumber}`;
        msg.style.color = "#00cec9";
        // Reset game after 3 seconds
        setTimeout(() => {
            targetNumber = Math.floor(Math.random() * 50) + 1;
            attempts = 0;
            attemptDisplay.innerText = `Attempts: 0`;
            msg.innerText = "New number set! Guess again.";
            userInput.value = "";
        }, 3000);
    } else {
        const diff = Math.abs(val - targetNumber);
        if (diff <= 5) {
            msg.innerText = val > targetNumber ? "Very Close! (A bit high ↓)" : "Very Close! (A bit low ↑)";
        } else {
            msg.innerText = val > targetNumber ? "Too High! ↓" : "Too Low! ↑";
        }
        msg.style.color = "#ff7675";
    }
}

// --- 4. Modified Battle Arena (RPS) ---
let playerScore = 0;
let botScore = 0;

function playRPS(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const botChoice = choices[Math.floor(Math.random() * 3)];
    const resultMsg = document.getElementById('rpsResult');
    
    const icons = { rock: '✊', paper: '✋', scissors: '✌️' };

    if (playerChoice === botChoice) {
        resultMsg.innerText = `Draw! Both chose ${icons[playerChoice]}`;
    } else if (
        (playerChoice === 'rock' && botChoice === 'scissors') ||
        (playerChoice === 'paper' && botChoice === 'rock') ||
        (playerChoice === 'scissors' && botChoice === 'paper')
    ) {
        resultMsg.innerText = `You Win! ${icons[playerChoice]} beats ${icons[botChoice]}`;
        playerScore++;
    } else {
        resultMsg.innerText = `Bot Wins! ${icons[botChoice]} beats ${icons[playerChoice]}`;
        botScore++;
    }

    document.getElementById('pScore').innerText = playerScore;
    document.getElementById('cScore').innerText = botScore;
}

function resetRPS() {
    playerScore = 0;
    botScore = 0;
    document.getElementById('pScore').innerText = 0;
    document.getElementById('cScore').innerText = 0;
    document.getElementById('rpsResult').innerText = "Score Reset! Play again.";
}
