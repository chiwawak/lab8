let userName = prompt("Введіть ваше ім'я:");

if (!userName || userName.trim() === "") {
    userName = "User";
}

let userScore = 0;
let computerScore = 0;
const maxWins = 3;

const userNameEl = document.getElementById("user-name");
const userScoreEl = document.getElementById("user-score");
const userNumberEl = document.getElementById("user-number");

const computerScoreEl = document.getElementById("computer-score");
const computerNumberEl = document.getElementById("computer-number");

const generateBtn = document.getElementById("generate-btn");

userNameEl.textContent = userName;

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function checkWinner() {
    if (userScore === maxWins) {
        alert(`Вітаємо, ${userName}! Ви перемогли з рахунком ${userScore}:${computerScore}!`);
        generateBtn.disabled = true;
    } else if (computerScore === maxWins) {
        alert(`Комп'ютер переміг з рахунком ${computerScore}:${userScore}. Спробуйте ще раз!`);
        generateBtn.disabled = true;
    }
}

function playRound() {
    const userNum = getRandomNumber();
    const computerNum = getRandomNumber();

    userNumberEl.textContent = userNum;
    computerNumberEl.textContent = computerNum;

    if (userNum > computerNum) {
        userScore++;
        userScoreEl.textContent = userScore;
    } else if (computerNum > userNum) {
        computerScore++;
        computerScoreEl.textContent = computerScore;
    }

    setTimeout(checkWinner, 100);
}

generateBtn.addEventListener("click", playRound);