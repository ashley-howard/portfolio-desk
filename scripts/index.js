var monthText = document.getElementById('month');

const date = new Date; 
const month = date.toLocaleString('default', { month: 'long' });

monthText.innerHTML = month;

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