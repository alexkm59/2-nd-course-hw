let a = 10;
let iPhoneYear = 2007;
let jsCreater = 'Brendan';
let b = 10;
let c = 2;
let summ;
let diff;
let prod;
let quot;
let result;
let age;
 let user = {
     name: String('Иван'),
    age: Number('18'),
    isAdmin: Boolean('false')
 }
let cityOfResidence;
let info;

alert(a);
a = 20;
alert(a);
alert(`2. Год выпуска первого iPhone - ${iPhoneYear}`);
alert(`3. Имя создателя JS - ${jsCreater}`);
summ = b+c;
diff = b-c;
prod = b*c;
quot = b/c;
alert(`4. сумма чисел ${b} и ${c} = ${summ}; разность = ${diff}; произведение = ${prod}; частное от деления = ${quot}`);
result = 2**5;
alert(`5. 2 в степени 5 = ${result}`);
a=9;
b=2;
alert(`6. остаток от деления ${a} и ${b} = ${a%b}`);
age = prompt ("сколько вам лет?");
alert(`7. Ваш возвраст ${age} лет.`);
user.cityOfResidence = 'Moscow';
user.age = 22;
console.log(user.name);
console.log(user.age);
delete user.cityOfResidence;
info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);
user.name = prompt('Укажите ваше имя');
alert(`Привет, ${user.name}!`);