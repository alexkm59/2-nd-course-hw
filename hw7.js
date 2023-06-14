
// Задание 1
let j = 'js';

j = j.toUpperCase();
console.log(j);

// Задание 2
const arr2 = ['яблоко', 'груша', 'гриб', 'огурец'];
let serch = 'гр';
const arrResult = [];

 searchStart = (array, serch) => {
    array.forEach((el) => {
        if (el.toLowerCase().startsWith(serch.toLowerCase())) {
            arrResult.push(el);
        }
    });
    return (arrResult);
}

console.log(searchStart(arr2, serch));

// Задание 3
let num = 32.58884;
console.log(`Меньшее целое: ${Math.floor(num)}`);
console.log(`Большее целое: ${Math.ceil(num)}`);
console.log(`Ближайшее целое: ${Math.round(num)}`);

// Задание 4

const arr4 = [52, 53, 49, 77, 21, 32];

let minN = Math.min(52, 53, 49, 77, 21, 32);
console.log(`минимальное число = ${minN}`);

let maxN = Math.max(52, 53, 49, 77, 21, 32);
console.log(`максимальное число = ${maxN}`);

// Задание 5

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
console.log(getRandom(1, 10));

// Задание 6
const arr6 = [];
function getRandomArr(m) {
    let n = Math.floor(m / 2);
    for (let i = 0; i < Math.floor(m / 2); i++) {
        arr6.push(getRandom(0, m));
    }
    console.log(arr6);
}
getRandomArr(17);

// Задание 7 выполнено в задании 5

// Задание 8

let currentDate = new Date();
console.log(currentDate);

// Задание 9

console.log(`Через 73 дня будет ${currentDate.getDate(currentDate.setDate(73))}-е число`);

// Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

getDataInfo = (y, m, d, h, min, s) => {
    let myDate = new Date(y, m, d, h, min, s);
    let dateInfo = 'Дата: ' + myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' - это' + ' ' + days[myDate.getDay()];
    let timeInfo = 'Время: ' + myDate.getHours()+ ':' + myDate.getMinutes()+ ':' + myDate.getSeconds();
    console.log(dateInfo);
    console.log(timeInfo);
}
getDataInfo(2023, 5, 1, 14, 56, 17);

