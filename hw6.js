// Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let el of arr) {
    if (el == 10) {
        console.log(el);
        break;
    }
    console.log(el)
}

// Задание 2
arr.forEach((el, index) => {
    if (el == 4) {
        console.log(`Позиция числа 4 в массиве = ${index + 1}`);
    }

});


// Задание 3
let arr3 = [1, 3, 5, 10, 20];
arr3 = arr3.join(' ');
console.log(arr3);

// Задание 4
let arr4 = [];
for (let i = 0; i < 3; i++) {
    arr4[i] = [];
    for (let j = 0; j < 3; j++) {
        arr4[i][j] = 1;
    }
}
console.log(arr4);

// Задание 5

const arr5 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    arr5.push(2);
}

console.log(arr5);

// Задание 6

const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);

// Задание 7

const arr7 = [9, 8, 7, 6, 5];

let m = Number(prompt('Введите число от 1 до 10'));
let search = arr7.includes(m);
console.log(search);

// Задание 8

let str = 'abcdef';
const arrStr = str.split(''); //Переводим в массив
arrStr.reverse(); // сортируем
let str2 = arrStr.join(''); // преобразуем к тексту
console.log(str2);

// Задание 9

const arr9 = [
    [1, 2, 3,],
    [4, 5, 6]
]

const arrOne = [];

for (let arrIn of arr9) {
    for (let elem of arrIn) {
        arrOne.push(elem);
    }
}

console.log(arrOne);



// Задание 10

const arr10 = [5, 7, 8, 10, 5, 9, 10];
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}

// Задание 11

const arr11 = [5, 7, 8, 10, 5, 9, 10];

function multiplMap(arr11) {
    return arr11.map(x => x ** 2)
}
console.log(multiplMap(arr11));

// Задание 12
const arr12 = ['слово', '', 'слог', 'длинное предложение', 'буква'];

function getLengthWords(arr) {
    return arr.map((str) => str.length);

}

console.log(getLengthWords(arr12));

// Задание 13

function filterPositive(array) {
    const result = array.filter(el => el < 0);
    console.log(result);
  }
  
  filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
  filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]