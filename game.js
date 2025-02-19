console.log('game.js loaded');


let humanScore = 0;
let computerScore = 0;


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
        return "Невірний вибір. Будь ласка, введіть 'камінь', 'ножиці' або 'папір'.";
    }
}


function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Нічия! Обидва вибрали " + humanChoice + ".");
    } else if (
        (humanChoice === "камінь" && computerChoice === "ножиці") ||
        (humanChoice === "ножиці" && computerChoice === "папір") ||
        (humanChoice === "папір" && computerChoice === "камінь")
    ) {
        console.log("Ви перемогли! " + humanChoice + " перемагає " + computerChoice + ".");
        humanScore++;
    } else {
        console.log("Ви програли! " + computerChoice + " перемагає " + humanChoice + ".");
        computerScore++; 
    }

  
    console.log(`Рахунок: Гравець - ${humanScore}, Комп'ютер - ${computerScore}`);
}


const humanSelection = getHumanChoice(); 
const computerSelection = getComputerChoice(); 

playRound(humanSelection, computerSelection); 