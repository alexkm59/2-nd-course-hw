// Задание 1

const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people1.sort(function (a, b) {
    return a.age - b.age;

}));

// Задание 2

function isPositive(a) {
    let b = a > 0;
    return b;
}

function isMale(c) {
    let b = c.gender === 'male';
    return b;
}
function filter(arr, rule) {
    const arrResult = [];

    for (let i = 0; i < arr.length; i++) {
        if (rule(arr[i])) {
            arrResult.push(arr[i]);
        }
    }
    return arrResult;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// Задание 3

// повторить с интервалом 3 секунды
let timerId = setInterval(() => console.log(new Date()), 3000);


// остановить вывод через 10 секунд
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

// Задание 4

function delayForSecond(callback) {

    setTimeout(callback, 1000);

}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

// Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond5(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond5(() => sayHi('Глеб'));