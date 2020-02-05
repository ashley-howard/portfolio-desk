// var monthText = document.getElementById('month');
// var calendarDays = document.getElementById('calendar-days');
// var taskbarTime = document.getElementById('taskbar-time');

const date = new Date;
// const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate();
var hour = date.getHours();
var welcomeText = document.getElementById('welcome-text')
const hubBg = document.getElementById('hub-bg')

document.getElementById('day').innerHTML = day;

if (hour >= 5 && hour <= 11) {
    welcomeText.innerHTML = "Good morning";
}
else if (hour >= 12 && hour <= 17) {
    welcomeText.innerHTML = "Good afternoon";
}
else if (hour >= 18 && hour <= 20) {
    welcomeText.innerHTML = "Good evening";
}
else {
    welcomeText.innerHTML = "Good night";
}

if (hour >= 5 && hour <= 17) {
    hubBg.src = './img/hub-day.png'
}

else {
    hubBg.src = './img/hub-night.png'
}



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
