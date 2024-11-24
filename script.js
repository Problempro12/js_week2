
// Задание 1: Определение категории по возрасту
let age = prompt("Введите ваш возраст:");
age = Number(age);
if (age >= 0 && age <= 2) {
    alert("Вы ребенок.");
} else if (age >= 12 && age <= 18) {
    alert("Вы подросток.");
} else if (age >= 18 && age <= 60) {
    alert("Вы взрослый.");
} else if (age > 60) {
    alert("Вы пенсионер.");
} else {
    alert("Некорректный ввод.");
}

// Задание 2: Число от 0 до 9 → спецсимвол
let digit = prompt("Введите число от 0 до 9:");
switch (digit) {
    case "1": alert("!"); break;
    case "2": alert("@"); break;
    case "3": alert("#"); break;
    case "4": alert("$"); break;
    case "5": alert("%"); break;
    case "6": alert("^"); break;
    case "7": alert("&"); break;
    case "8": alert("*"); break;
    case "9": alert("("); break;
    case "0": alert(")"); break;
    default: alert("Некорректный ввод.");
}

// Задание 3: Проверка трехзначного числа на одинаковые цифры
let number = prompt("Введите трехзначное число:");
if (number.length === 3 && !isNaN(number)) {
    if (number[0] === number[1] || number[1] === number[2] || number[0] === number[2]) {
        alert("Есть одинаковые цифры.");
    } else {
        alert("Одинаковых цифр нет.");
    }
} else {
    alert("Некорректный ввод.");
}

// Задание 4: Проверка високосного года
let year = prompt("Введите год:");
year = Number(year);
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    alert("Год високосный.");
} else {
    alert("Год не високосный.");
}

// Задание 5: Проверка, является ли число палиндромом
let palindrome = prompt("Введите пятизначное число:");
if (palindrome.length === 5 && !isNaN(palindrome)) {
    if (palindrome === palindrome.split('').reverse().join('')) {
        alert("Число является палиндромом.");
    } else {
        alert("Число не является палиндромом.");
    }
} else {
    alert("Некорректный ввод.");
}

// Задание 6: Конвертер валют
let amount = prompt("Введите количество USD:");
let currency = prompt("Выберите валюту для конвертации (EUR, UAN, AZN):").toUpperCase();
const rates = { EUR: 0.93, UAN: 36.9, AZN: 1.7 };
if (rates[currency]) {
    let converted = amount * rates[currency];
    alert(`Сумма: ${converted} ${currency}`);
} else {
    alert("Некорректный ввод.");
}

// Задание 7: Расчет суммы со скидкой
let purchaseAmount = prompt("Введите сумму покупки:");
purchaseAmount = Number(purchaseAmount);
if (purchaseAmount >= 200 && purchaseAmount < 300) {
    alert(`Сумма с учетом скидки: ${purchaseAmount * 0.97}`);
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    alert(`Сумма с учетом скидки: ${purchaseAmount * 0.95}`);
} else if (purchaseAmount >= 500) {
    alert(`Сумма с учетом скидки: ${purchaseAmount * 0.93}`);
} else {
    alert("Скидка не предоставляется.");
}

// Задание 8: Проверка, помещается ли окружность в квадрат
let circumference = prompt("Введите длину окружности:");
let perimeter = prompt("Введите периметр квадрата:");
let radius = circumference / (2 * Math.PI);
let side = perimeter / 4;
if (radius * 2 <= side) {
    alert("Окружность поместится в квадрат.");
} else {
    alert("Окружность не поместится.");
}

// Задание 9: Тест из 3 вопросов
let score = 0;
if (prompt("Вопрос 1: 2 + 2? (1: 3, 2: 4, 3: 5)") === "2") score += 2;
if (prompt("Вопрос 2: Столица Франции? (1: Лондон, 2: Париж, 3: Берлин)") === "2") score += 2;
if (prompt("Вопрос 3: Сколько будет 3 * 3? (1: 6, 2: 8, 3: 9)") === "3") score += 2;
alert(`Ваш счет: ${score}`);

// Задание 10: Вывод следующей даты
let day = Number(prompt("Введите день:"));
let month = Number(prompt("Введите месяц:"));
let year1 = Number(prompt("Введите год:"));
let date = new Date(year1, month - 1, day + 1);
alert(`Следующая дата: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);
