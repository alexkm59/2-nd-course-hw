let password = 'пароль';
// let inputPassword = String(prompt('Укажите пароль'));
let c = 2;
let d = 34;
let e = 220;
let a = '2';
let b = '3';
let monthNumber = 10;
// Задание 1
// if (password == inputPassword) {
//     alert('Пароль введен верно');
// } else {
//     alert('Пароль введен неправильно');
// }
// Задание 2
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3
if (e > 100 || d > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4
alert(Number(a) + Number(b));

// Задание 5
switch (monthNumber) {
    case 1:
    case 12:
    case 2:
        console.log('зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
        break;
    default:
        console.log('Такого месяца нет');
        break;
}

// Задание 7
