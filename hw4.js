let i;
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

const n = 1000;
let num;
let res;
let firstFriday = 4;
let weekDay;
let friday;
// Задание 1
i = 1;
while (i <= 2) {
    console.log('Привет.');
    i++;
}

// Задание 2
i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Задание 3
i = 1;
while (i <= 22) {
    if (i >= 7 && i <= 22) {
        console.log(i);
        i++;
    } else {
        i++;
        continue;
    }

}

// Задание 4

for (key in obj) {
    if (obj[key]) {
        console.log(`${key} - зарплата ${obj[key]} долларов`);
    }
}

// Задание 5
res = n;
for (num = 0; res >= 50; num++) {
    res = res / 2;
}
console.log(`Результат деления = ${res}, потребовалось итераций = ${num}`);

// Задание 6
friday = firstFriday;

for (weekDay = 1; weekDay <= 31; weekDay++) {

    if (weekDay === friday) {
        console.log(`Сегодня пятница, ${weekDay}-е число. Необходимо подготовить отчет`);
        friday += 7;
    }

}