'use strict';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const today = now.getDate();

const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

document.getElementById('monthYear').textContent = `${monthNames[month]} ${year}`;

const firstDay = new Date(year, month, 1).getDay();

const offset = (firstDay + 6) % 7;          
const daysInMonth = new Date(year, month + 1, 0).getDate();

const tbody = document.getElementById('calendarBody');
let date = 1;

for (let week = 0; week < 6; week++) {
    if (date > daysInMonth) break;

    const row = document.createElement('tr');

    for (let day = 0; day < 7; day++) {
        const cell = document.createElement('td');

        if (week === 0 && day < offset) {
            cell.classList.add('empty');
        } else if (date > daysInMonth) {
            cell.classList.add('empty');
        } else {
            cell.textContent = date;

            if (day === 5 || day === 6) {
                cell.classList.add('weekend');
            }
            if (date === today) {
                cell.classList.add('today');
            }
            date++;
        }
        row.appendChild(cell);
    }
    tbody.appendChild(row);
}