const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.trunc(Math.random() * 3) + 1;
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'Rock🗿';
    }

    if (randomNumber === 2) {
        computerChoice = 'Paper🧾';
    }

    if (randomNumber === 3) {
        computerChoice = 'Scissors✂';
    }

    computerChoiceDisplay.textContent = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a Draw';
    }
    if (computerChoice === 'Rock🗿' && userChoice === 'Paper🧾') {
        result = 'You Win!!!';
    }
    if (computerChoice === 'Rock🗿' && userChoice === 'Scissors✂') {
        result = 'You lose..';
    }
    if (computerChoice === 'Paper🧾' && userChoice === 'Rock🗿') {
        result = 'You lose..';
    }
    if (computerChoice === 'Paper🧾' && userChoice === 'Scissors✂') {
        result = 'You Win!!!';
    }
    if (computerChoice === 'Scissors✂' && userChoice === 'Rock🗿') {
        result = 'You Win!!!';
    }
    if (computerChoice === 'Scissors✂' && userChoice === 'Paper🧾') {
        result = 'You lose..';
    }
    resultDisplay.innerHTML = result;
}