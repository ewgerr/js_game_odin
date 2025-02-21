// Глобальні змінні для відстеження результатів
let humanScore = 0;
let computerScore = 0;

// Елементи DOM
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const finalResultDiv = document.getElementById("final-result");

// Функція для отримання вибору комп'ютера
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

// Функція для гри в один раунд
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    // Визначаємо переможця раунду
    if (humanChoice === computerChoice) {
        return `Нічия! Обидва вибрали ${humanChoice}.`;
    } else if (
        (humanChoice === "камінь" && computerChoice === "ножиці") ||
        (humanChoice === "ножиці" && computerChoice === "папір") ||
        (humanChoice === "папір" && computerChoice === "камінь")
    ) {
        humanScore++; // Збільшуємо рахунок гравця
        return `Ви перемогли! ${humanChoice} перемагає ${computerChoice}.`;
    } else {
        computerScore++; // Збільшуємо рахунок комп'ютера
        return `Ви програли! ${computerChoice} перемагає ${humanChoice}.`;
    }
}

// Функція для оновлення інтерфейсу
function updateUI(result) {
    // Виводимо результат раунду
    const roundResult = document.createElement("p");
    roundResult.textContent = result;
    resultsDiv.appendChild(roundResult);

    // Виводимо поточний рахунок
    scoreDiv.textContent = `Рахунок: Гравець - ${humanScore}, Комп'ютер - ${computerScore}`;

    // Перевіряємо, чи хтось досяг 5 очок
    if (humanScore === 5 || computerScore === 5) {
        let finalMessage;
        if (humanScore === 5) {
            finalMessage = "Вітаємо! Ви перемогли в грі!";
        } else {
            finalMessage = "На жаль, комп'ютер переміг у грі.";
        }

        // Виводимо фінальний результат
        finalResultDiv.textContent = finalMessage;

        // Блокуємо кнопки після завершення гри
        document.getElementById("rock").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("paper").disabled = true;
    }
}

// Додаємо обробники подій для кнопок
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