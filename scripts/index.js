var monthText = document.getElementById('month');

const date = new Date; 
const month = date.toLocaleString('default', { month: 'long' });

monthText.innerHTML = month;