const electron = require('electron');
const { ipcRenderer } = electron;

data = {
    firstDay: 5,
    numDays: 28,
    month: 5,
    year: 2021
}
// ipcRenderer.on('cal:update', (e, data) => {
    const calendarGrid = document.querySelector('#calendar-body');
    // Placeholder days
    for (let blank = 0; blank < data.firstDay; blank++) {
        const blankDay = document.createElement('div');
        blankDay.classList.add('box');
        calendarGrid.appendChild(blankDay);
    }
    // Days of the month
    for (let day = 1; day <= data.numDays; day++) {
        const today = document.createElement('button');
        today.classList.add('box');
        today.innerText = day;
        today.addEventListener('click', () => {
            const taskList = document.querySelector('#task-list');
            const item = document.createElement('li');
            item.innerText = day;
            taskList.appendChild(item);
        })
        calendarGrid.appendChild(today);
    }
// });