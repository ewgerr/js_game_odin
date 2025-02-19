console.log('game.js loaded');

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
//   console.log(getRandomInt(3));

function getComputerChoice() {
    // Генеруємо випадкове число від 0 до 1
    const randomNumber = Math.random();

    // Використовуємо умовний оператор для вибору одного з варіантів
    if (randomNumber < 0.33) {
        return "камінь";
    } else if (randomNumber < 0.66) {
        return "ножиці";
    } else {
        return "папір";
    }
}

// Перевіряємо, що повертає функція
console.log(getComputerChoice());


function getHumanChoice() {
    // Запитуємо введення від користувача
    const userInput = prompt("Введіть один із варіантів: камінь, ножиці або папір").toLowerCase();
    
    // Перевіряємо, чи введені дані є дійсним варіантом
    if (userInput === "камінь" || userInput === "ножиці" || userInput === "папір") {
        return userInput;
    } else {
        // Якщо введені дані недійсні, повертаємо повідомлення про помилку
        return "Невірний вибір. Будь ласка, введіть 'камінь', 'ножиці' або 'папір'.";
    }
}

// Перевіряємо, що повертає функція
console.log(getHumanChoice());


