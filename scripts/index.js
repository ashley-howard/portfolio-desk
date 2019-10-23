var monthText = document.getElementById('month');
var calendarDays = document.getElementById('calendar-days');
var taskbarTime = document.getElementById('taskbar-time');

var screenProjects = document.getElementById('screen-projects');

const date = new Date;
const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate();

monthText.innerHTML = month;
taskbarTime.innerHTML = date.getHours() + ':' + date.getMinutes();

function daysInThisMonth() {
    // var now = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

for (var i = 0; i < (daysInThisMonth()); i++) {
    var element = document.createElement("div");
    element.setAttribute('class', 'grid-item');
    element.innerHTML = i + 1;
    if (day - 1 > i) {
        element.classList.add("checked-day");
    }
    calendarDays.appendChild(element);
}

// replace calendar image every month

function openProjects(){
    screenProjects.style.display = "block";
    // console.log('open projects');
}

function hideScreen(){
    screenProjects.style.display = "none";
}