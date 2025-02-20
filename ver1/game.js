console.log('Hellow in my game');


// // Функція для отримання вибору комп'ютера
// function getComputerChoice() {
//     const randomNumber = Math.random();

//     if (randomNumber < 0.33) {
//         return "камінь";
//     } else if (randomNumber < 0.66) {
//         return "ножиці";
//     } else {
//         return "папір";
//     }
// }

// // Функція для отримання вибору гравця
// function getHumanChoice() {
//     const userInput = prompt("Введіть один із варіантів: камінь, ножиці або папір").toLowerCase();

//     if (userInput === "камінь" || userInput === "ножиці" || userInput === "папір") {
//         return userInput;
//     } else {
//         alert("Невірний вибір. Будь ласка, введіть 'камінь', 'ножиці' або 'папір'.");
//         return getHumanChoice(); // Рекурсивно запитуємо введення, доки воно не буде вірним
//     }
// }

// // Функція для гри в один раунд
// function playRound(humanChoice, computerChoice) {
//     // Робимо вибір гравця нечутливим до регістру
//     humanChoice = humanChoice.toLowerCase();

//     // Визначаємо переможця раунду
//     if (humanChoice === computerChoice) {
//         console.log("Нічия! Обидва вибрали " + humanChoice + ".");
//         return "нічия";
//     } else if (
//         (humanChoice === "камінь" && computerChoice === "ножиці") ||
//         (humanChoice === "ножиці" && computerChoice === "папір") ||
//         (humanChoice === "папір" && computerChoice === "камінь")
//     ) {
//         console.log("Ви перемогли! " + humanChoice + " перемагає " + computerChoice + ".");
//         return "гравець";
//     } else {
//         console.log("Ви програли! " + computerChoice + " перемагає " + humanChoice + ".");
//         return "комп'ютер";
//     }
// }

// // Функція для гри в 5 раундів
// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     // Граємо 5 раундів
//     for (let round = 1; round <= 5; round++) {
//         console.log(`--- Раунд ${round} ---`);
//         const humanSelection = getHumanChoice(); // Отримуємо вибір гравця
//         const computerSelection = getComputerChoice(); // Отримуємо вибір комп'ютера

//         const result = playRound(humanSelection, computerSelection); // Граємо раунд

//         // Оновлюємо рахунок
//         if (result === "гравець") {
//             humanScore++;
//         } else if (result === "комп'ютер") {
//             computerScore++;
//         }

//         // Виводимо поточний рахунок
//         console.log(`Рахунок: Гравець - ${humanScore}, Комп'ютер - ${computerScore}`);
//     }

//     // Оголошуємо переможця
//     if (humanScore > computerScore) {
//         console.log("Вітаємо! Ви перемогли в грі!");
//     } else if (computerScore > humanScore) {
//         console.log("На жаль, комп'ютер переміг у грі.");
//     } else {
//         console.log("Гра завершилася внічию!");
//     }
// }

// // Запускаємо гру
// playGame();
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

// Функція для отримання вибору гравця
function getHumanChoice() {
    const userInput = prompt("Введіть один із варіантів: камінь, ножиці або папір").toLowerCase();

    if (userInput === "камінь" || userInput === "ножиці" || userInput === "папір") {
        return userInput;
    } else {
        alert("Невірний вибір. Будь ласка, введіть 'камінь', 'ножиці' або 'папір'.");
        return getHumanChoice(); // Рекурсивно запитуємо введення, доки воно не буде вірним
    }
}

// Функція для гри в один раунд
function playRound(humanChoice, computerChoice) {
    // Робимо вибір гравця нечутливим до регістру
    humanChoice = humanChoice.toLowerCase();

    // Визначаємо переможця раунду
    if (humanChoice === computerChoice) {
        return `Нічия! Обидва вибрали ${humanChoice}.`;
    } else if (
        (humanChoice === "камінь" && computerChoice === "ножиці") ||
        (humanChoice === "ножиці" && computerChoice === "папір") ||
        (humanChoice === "папір" && computerChoice === "камінь")
    ) {
        return `Ви перемогли! ${humanChoice} перемагає ${computerChoice}.`;
    } else {
        return `Ви програли! ${computerChoice} перемагає ${humanChoice}.`;
    }
}

// Функція для гри в 5 раундів
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const resultsDiv = document.getElementById("results");
    const finalResultDiv = document.getElementById("final-result");

    // Очистимо попередні результати
    resultsDiv.innerHTML = "";
    finalResultDiv.innerHTML = "";

    // Граємо 5 раундів
    for (let round = 1; round <= 5; round++) {
        const humanSelection = getHumanChoice(); // Отримуємо вибір гравця
        const computerSelection = getComputerChoice(); // Отримуємо вибір комп'ютера

        const result = playRound(humanSelection, computerSelection); // Граємо раунд

        // Оновлюємо рахунок
        if (result.includes("Ви перемогли")) {
            humanScore++;
        } else if (result.includes("Ви програли")) {
            computerScore++;
        }

        // Виводимо результат раунду в HTML
        const roundResult = document.createElement("p");
        roundResult.textContent = `Раунд ${round}: ${result}`;
        resultsDiv.appendChild(roundResult);
    }

    // Оголошуємо переможця
    let finalMessage;
    if (humanScore > computerScore) {
        finalMessage = "Вітаємо! Ви перемогли в грі!";
    } else if (computerScore > humanScore) {
        finalMessage = "На жаль, комп'ютер переміг у грі.";
    } else {
        finalMessage = "Гра завершилася внічию!";
    }

    // Виводимо фінальний результат в HTML
    finalResultDiv.textContent = `Фінальний рахунок: Гравець - ${humanScore}, Комп'ютер - ${computerScore}. ${finalMessage}`;
}

// Запускаємо гру
playGame();