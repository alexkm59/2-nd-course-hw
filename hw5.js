
// Задание 1
function lessNumber(a, b) {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}
console.log(`Наименьшее число: ${lessNumber(8, 4)}`);

// Задание 2
function evenNumber(n) {
    if (n % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число не четное';
    }
}
console.log(evenNumber(6));

// Задание 3
// 3.1 возврат в консоль
function conSquar(n) {
    n = n ** 2;
    console.log(`Квадрат числа равен: ${n}`);
}
conSquar(5);
// 3.2 возврат
function squar(n) {
    return n ** 2;
}
console.log(squar(6));

// Задание 4
function hello() {
    age = prompt(`Сколько вам лет?`);
    if (age < 0) {
        alert(`Вы ввели неправильное значение`);
    }
        else{
            if (age >= 0 && age <= 12) {
                alert(`Привет, друг!`);
                
            } else {
                alert(`Добро пожаловать!`);
            }
        }  
}

hello();

// Задание 5

function multiplay (a, b) {
a = Number(a);
b = Number(b);
  
if (isNaN(a) || isNaN(b)) {
    return 'введенное значение не является числом';
} else{
    return a * b;
}
}

console.log(multiplay (40, 4));