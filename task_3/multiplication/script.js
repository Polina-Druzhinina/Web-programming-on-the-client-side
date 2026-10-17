const table = document.getElementById('multiplicationTable');

const headerRow = document.createElement('tr');
const emptyCell = document.createElement('th');
emptyCell.textContent = '×';
headerRow.appendChild(emptyCell);

for (let i = 1; i <= 10; i++) {
    const th = document.createElement('th');
    th.textContent = i;
    headerRow.appendChild(th);
}
table.appendChild(headerRow);

for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');
    
    const rowHeader = document.createElement('th');
    rowHeader.textContent = i;
    row.appendChild(rowHeader);

    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('td');
        cell.textContent = i * j;
        row.appendChild(cell);
    }
    table.appendChild(row);
}