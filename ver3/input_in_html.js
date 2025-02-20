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
        return getHumanChoice();
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


