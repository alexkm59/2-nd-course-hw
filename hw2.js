let a = 10;
const iPhoneYear = 2007;
const jsCreater = 'Brendan';
let b = 10;
let c = 2;
let summ;
let diff;
let prod;
let quot;
let result;
let age;
let num;
 let user = {
     name: 'Иван',
    age: 18,
    isAdmin: false
 }
let cityOfResidence;
let info;

// Задача 1
alert(a);
a = 20;
alert(a);

// Задача 2
alert(`2. Год выпуска первого iPhone - ${iPhoneYear}`);

// Задача 3
alert(`3. Имя создателя JS - ${jsCreater}`);

// Задача 4
summ = b+c;
diff = b-c;
prod = b*c;
quot = b/c;
alert(`4. сумма чисел ${b} и ${c} = ${summ}; разность = ${diff}; произведение = ${prod}; частное от деления = ${quot}`);

// Задача 5
result = 2**5;
alert(`5. 2 в степени 5 = ${result}`);

// Задача 6
a=9;
b=2;
alert(`6. остаток от деления ${a} и ${b} = ${a%b}`);

// Задача 7
num = 1;
num += 5;
console.log(num);
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);


// Задача 8
age = prompt ("сколько вам лет?");
alert(`8. Ваш возвраст ${age} лет.`);

// Задача 9
user.cityOfResidence = 'Moscow';
user.age = 22;
delete user.cityOfResidence;
info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

// Задача 10
user.name = prompt('Укажите ваше имя');
alert(`Привет, ${user.name}!`);