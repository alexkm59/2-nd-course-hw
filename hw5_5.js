// Игра "Времена года"

function seasons() {
    let m = Number(prompt('Введите номер месяца с 1 по 12'));
    if (isNaN(m) || m <= 0 || m > 12) {
        alert('Введено не верное значение');
    }
    else {
        if (m < 3 || m === 12) {
            alert('Зима');
        }
        if (m >= 3 && m <= 5) {
            alert('Весна');
        }
        if (m > 5 && m <= 8) {
            alert('Лето');
        }
        if (m > 8 && m <= 11) {
            alert('Осень');
        }

    }
}

// Игра "Запомни слова"

function checkAnswer(answer) {
    let regexp = /^[а-яА-Я]*$/;
    if (regexp.test(answer)) {
        return regexp.test(answer);
    } else {
        alert('Введены некорректные символы');
    }

}

function words() {
    let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    array = array.sort(() => Math.random() - 0.5);
    alert(array);
    let answer1 = prompt('Чему равнялся первый элемент массива ?');
    checkAnswer(answer1);
    let answer2 = prompt('Чему равнялся последний элемент массива ?');
    checkAnswer(answer2);
    if (array[0].toLowerCase() === answer1.toLowerCase() && array[array.length - 1].toLowerCase() === answer2.toLowerCase()) {

        alert('Поздравляем, вы справились!');
    } else {
        if (array.shift().toLowerCase() === answer1.toLowerCase() || array.pop().toLowerCase() === answer2.toLowerCase()) {
            alert('Вы были близки к победе!');
        } else {
            alert('Вы не угадали, попробуйте еще раз.');
        }

    }


}