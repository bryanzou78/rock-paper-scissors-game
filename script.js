const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const results = document.querySelector('.results');
const userVersus = document.querySelector('.user-versus');
const computerVersus = document.querySelector('.computer-versus');

let userScore = 0;
let computerScore = 0;

// 
function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    const randomNumber = (Math.floor(Math.random() * choices.length));
    return choices[randomNumber];
}

const computerChoice = getComputerChoice();

// 
function playRound(userChoice, computerChoice) {
    if (userChoice === 'rock' && computerChoice === 'scissors'
        || userChoice === 'paper' && computerChoice === 'rock'
        || userChoice === 'scissors' && computerChoice === 'paper') {
            userScore++;
            userScoreDisplay.innerHTML = userScore;
            results.innerHTML = `Computer chooses ${computerChoice}, you win! Play again?`;
        } else if (userChoice === 'rock' && computerChoice === 'paper'
            || userChoice === 'paper' && computerChoice === 'scissors'
            || userChoice === 'scissors' && computerChoice === 'rock') {
                computerScore++;
                computerScoreDisplay.innerHTML = computerScore;
                results.innerHTML = `Computer chooses ${computerChoice}, you lose! Try again?`;
            } else {
                results.innerHTML = `Computer chooses ${computerChoice}, it's a draw! Try again?`;
            }

    userVersus.innerHTML = `<img src='images/${userChoice}.svg'>`;
    computerVersus.innerHTML = `<img src='images/${computerChoice}.svg'>`;

    userVersus.classList.add('animate-user');
    setTimeout(() => userVersus.classList.remove('animate-user'), 1200);

    computerVersus.classList.add('animate-computer');
    setTimeout(() => computerVersus.classList.remove('animate-computer'), 1200);
}

// 
rockBtn.addEventListener('click', () => {
    playRound ('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound ('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playRound ('scissors', getComputerChoice());
});


