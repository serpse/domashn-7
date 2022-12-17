const van = +prompt('какой у тебя год рождения?');



if (van < 2022) 

{
    alert(2022 - van)
} 

let year = van <= 2022? 'Шкода, що Ви не захотіли ввести свію дату народження':
'год рождения' + (2022 - van) + 'лет'


const nam = prompt('в каком городе ты живёшь?');
let town 



if (nam === '') {
    town = 'Шкода, що Ви не захотіли ввести свій город'
} else if (nam === 'Kyiv') {
    town = 'Ти живеш у столиці Україна?'
} else if (nam === 'London') {
    town = 'Ти живеш у столиці Британії'
}  else if (nam === 'Washington') {
    town = 'Ти живеш у столиці США?'
}  else {
town = 'Ти живеш у ' + nam
}




const varn = prompt('какой твой любимый вид спорта?')
let champion

if (varn === '') {
    champion = 'Шкода, що Ви не захотіли ввести свій вид спорту '
} else if (varn === 'хокей') {
    champion = 'Круто! Хочеш стати Жорданн Перре?'
} else if (varn === 'велоспорт') {
    champion = 'Круто! Хочеш стати Ремко Эвенепул?'
} else if (varn === 'MMA') {
    champion = 'Круто! Хочеш стати Ройсом Грейси?'
} else {
    champion = 'Круто! Хочеш стати ' + varn
}



alert(`${year}
       ${town}
       ${champion}`
 );




//  Ройсом Грейси MMA         Жорданн Перре хокей           Ремко Эвенепул велоспорт















 



