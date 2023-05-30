
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

function conSquar(n){
    n = n**2;
    console.log(`Квадрат числа равен: ${n}`);
}
conSquar(5);

function squar(n){
    return n**2;
}
console.log(squar(6));