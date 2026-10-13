'use strict';

//2.1
let tx = 'background-color'.split('-');
let chars = tx[1].split('');
chars[0] = chars.at(0).toUpperCase();
tx[1] = chars.join('');
console.log(tx.join(''));

//2.2
let mas = [9,8,7,6,5,4,3,2,1];
let copy1 = mas.slice();
copy1.reverse();
console.log('1 массив', copy1);

let copy2 = [...mas];
for(let i = 0; i < Math.floor(copy2.length/2); i++){
    let temp = copy2[i];
    copy2[i] = copy2[copy2.length - 1 -i];
    copy2[copy2.length - 1 -i] = temp;
}
console.log('2 массив', copy2);

//2.3
let dict = {
    'hello': 'привет',
    'world': 'мир',
    'cat': 'кот',
    'house': 'дом'
};

let reverseDict = {};
for (let key in dict) {
    reverseDict[dict[key]] = key;
}

function translate(text, toLang) {
    let words = text.toLowerCase().split(' ');
    
    let currentDict = (toLang === 'ru') ? dict : reverseDict;
    
    return words.map(word => currentDict[word] || word).join(' ');
}

console.log(translate('hello world', 'ru'));  
console.log(translate('привет мир', 'en'));   

//2.4
let weekDays = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',

    showToday: function() {
        let day = new Date().getDay();
        if (day === 0) day = 7;
        console.log(this[day]);
    }
};

weekDays.showToday();

//2.5
let staff = {
    'Директор': 'Иванов',
    'Менеджер': 'Петров',
    'Разработчик': 'Сидоров',
    'Дизайнер': 'Козлов'
};
let staff2 = { ...staff };
staff2['Директор'] = 'Смирнов';
staff2['Менеджер'] = 'Кузнецов';
staff2['Разработчик'] = 'Попов';
staff2['Дизайнер'] = 'Новиков';
function objToString(obj) {
    let str = '';
    for (let key in obj) {
        str += key + ': ' + obj[key] + '\n';
    }
    return str;
}
console.log(objToString(staff));
console.log(objToString(staff2));

//задача 2.6
let subjects = {
    list: 'Математика, Физика, Информатика, История',

    add: function(name) {
        let arr = this.list.split(', ');
        if (!arr.includes(name)) {
            arr.push(name);
            this.list = arr.join(', ');
        }
    },

    remove: function(name) {
        let arr = this.list.split(', ');
        let index = arr.indexOf(name);
        if (index !== -1) {
            arr.splice(index, 1);
            this.list = arr.join(', ');
        }
    }
};

console.log(subjects.list);

subjects.add('Химия');
console.log(subjects.list);

subjects.add('Математика');
subjects.remove('Физика');
console.log(subjects.list);

subjects.remove('Биология');