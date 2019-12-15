var monthText = document.getElementById('month');
var calendarDays = document.getElementById('calendar-days');
// var taskbarTime = document.getElementById('taskbar-time');

const date = new Date;
const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate();

// monthText.innerHTML = month;
// taskbarTime.innerHTML = date.getHours() + ':' + date.getMinutes();

// function daysInThisMonth() {
//     // var now = new Date();
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// }

// for (var i = 0; i < (daysInThisMonth()); i++) {
//     var element = document.createElement("div");
//     element.setAttribute('class', 'grid-item');
//     element.innerHTML = i + 1;
//     if (day - 1 > i) {
//         element.classList.add("checked-day");
//     }
//     calendarDays.appendChild(element);
// }

// (function () {
//     function checkTime(i) {
//         return (i < 10) ? "0" + i : i;
//     }

//     function startTime() {
//         var today = new Date(),
//             h = checkTime(today.getHours()),
//             m = checkTime(today.getMinutes())
//         document.getElementById('time').innerHTML = h + ":" + m;
//         t = setTimeout(function () {
//             startTime()
//         }, 1000);
//     }
//     startTime();
// })();

// replace calendar image every month