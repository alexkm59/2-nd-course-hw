function seasons() {
    let m = Number(prompt('Введите номер месяца с 1 по 12'));
    if (isNaN(m) || m <= 0 || m > 12) {
        alert('Введено не верное значение');
    }
else{
    if (m < 3 || m === 12){
        alert('Зима');
        }
        if (m >= 3 && m <= 5){
        alert('Весна');
        }
        if(m > 5 && m <=8){
            alert('Лето');   
        }
        if(m > 8 && m <=11){
            alert('Осень');   
        }
        
}
    

}

// let m = Number(prompt(`Укажите номер месяца`));

// if (isNaN(m)) {
//     alert('введенное значение не является числом');

// }
// else{
//     return(m);
// }