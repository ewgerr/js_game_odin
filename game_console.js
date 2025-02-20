console.log('Hellow in my game');

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

function getHumanChoice() {
    const userInput = prompt("Введіть один із варіантів: камінь, ножиці або папір").toLowerCase();

    if (userInput === "камінь" || userInput === "ножиці" || userInput === "папір") {
        return userInput;
    } else {
        alert("Невірний вибір. Будь ласка, введіть 'камінь', 'ножиці' або 'папір'.");
        return getHumanChoice(); // Рекурсивно запитуємо введення, доки воно не буде вірним
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Нічия! Обидва вибрали " + humanChoice + ".");
        return "нічия";
    } else if (
        (humanChoice === "камінь" && computerChoice === "ножиці") ||
        (humanChoice === "ножиці" && computerChoice === "папір") ||
        (humanChoice === "папір" && computerChoice === "камінь")
    ) {
        console.log("Ви перемогли! " + humanChoice + " перемагає " + computerChoice + ".");
        return "гравець";
    } else {
        console.log("Ви програли! " + computerChoice + " перемагає " + humanChoice + ".");
        return "комп'ютер";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`--- Раунд ${round} ---`);
        const humanSelection = getHumanChoice(); 
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection); 

        if (result === "гравець") {
            humanScore++;
        } else if (result === "комп'ютер") {
            computerScore++;
        }

        console.log(`Рахунок: Гравець - ${humanScore}, Комп'ютер - ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Вітаємо! Ви перемогли в грі!");
    } else if (computerScore > humanScore) {
        console.log("На жаль, комп'ютер переміг у грі.");
    } else {
        console.log("Гра завершилася внічию!");
    }
}

playGame();
