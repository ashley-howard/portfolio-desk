var monthText = document.getElementById('month');
var calendarDate = document.getElementById('calendar-day');

const date = new Date; 
const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate();

monthText.innerHTML = month;

var i;
for (i = 0; i < (day - 1); i++) {
    calendarDate.children[i].classList.add("checked-day");
}

if (month === 'January' || 'March' || 'May' || 'July' || 'August' || 'October' || 'December') {
    console.log('31 days');
    // update dom with correct days
}
else if (month === 'April' || 'June' || 'September' || 'November'){
    console.log ('30 days');
}
else {
    console.log('28 days');
}