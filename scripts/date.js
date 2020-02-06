const date = new Date;
const day = date.getDate();
const hubBg = document.getElementById('hub-bg')
var hour = date.getHours();
var welcomeText = document.getElementById('welcome-text');

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