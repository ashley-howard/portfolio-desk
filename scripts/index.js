var monthText = document.getElementById('month');
var calendarDate = document.getElementById('calendar-day');

const date = new Date;
const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate();

monthText.innerHTML = month;

function daysInThisMonth() {
    // var now = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

var i;
for (i = 0; i < (daysInThisMonth()); i++) {
    var element = document.createElement("div");
    element.setAttribute('class', 'grid-item');
    element.innerHTML = i + 1;
    if (day - 1 > i) {
        element.classList.add("checked-day");
    }
    calendarDate.appendChild(element);
}