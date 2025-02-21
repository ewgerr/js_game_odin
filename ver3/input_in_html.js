
let humanScore = 0;
let computerScore = 0;


const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const finalResultDiv = document.getElementById("final-result");


function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "камінь";
    } else if (randomNumber < 0.66) {
        return "ножиці";
    } else {
        return "папір";
    }
}


function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        return `Нічия! Обидва вибрали ${humanChoice}.`;
    } else if (
        (humanChoice === "камінь" && computerChoice === "ножиці") ||
        (humanChoice === "ножиці" && computerChoice === "папір") ||
        (humanChoice === "папір" && computerChoice === "камінь")
    ) {
        humanScore++; 
        return `Ви перемогли! ${humanChoice} перемагає ${computerChoice}.`;
    } else {
        computerScore++; 
        return `Ви програли! ${computerChoice} перемагає ${humanChoice}.`;
    }
}

function updateUI(result) {
    const roundResult = document.createElement("p");
    roundResult.textContent = result;
    resultsDiv.appendChild(roundResult);

    scoreDiv.textContent = `Рахунок: Гравець - ${humanScore}, Комп'ютер - ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        let finalMessage;
        if (humanScore === 5) {
            finalMessage = "Вітаємо! Ви перемогли в грі!";
        } else {
            finalMessage = "На жаль, комп'ютер переміг у грі.";
        }

        finalResultDiv.textContent = finalMessage;

        document.getElementById("rock").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("paper").disabled = true;
    }
}

document.getElementById("rock").addEventListener("click", () => {
    const result = playRound("камінь");
    updateUI(result);
});

document.getElementById("scissors").addEventListener("click", () => {
    const result = playRound("ножиці");
    updateUI(result);
});

document.getElementById("paper").addEventListener("click", () => {
    const result = playRound("папір");
    updateUI(result);
});