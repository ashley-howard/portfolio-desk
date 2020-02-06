function drinkCoffee() {
    document.getElementById("coffee-note").classList.add("strike");
}

// var typed = new Typed('#intro-typed', {
//     stringsElement: '#intro-typed-strings',
//     typeSpeed: 75,
//     showCursor: false
// });

const introScreen = document.getElementById('intro-screen');
const lightSwitch = document.getElementById('light-switch')

var firstTime = localStorage.getItem('firstTime');

// load splash
if (!firstTime) {
    console.log("load splash")
    localStorage.setItem('firstTime', 'true');
    firstTime = localStorage.getItem('firstTime');
}
// dont load splash
else {
    console.log("don't load splash")
    // introScreen.style.display = 'none' 
    localStorage.setItem('firstTime', 'false');
    firstTime = localStorage.getItem('firstTime');
}

function light(action) {
    if (action === 'on') {
        introScreen.style.display = 'flex';
        lightSwitch.attributes.onclick.value = "light('off')"
        lightSwitch.style.boxShadow = 'rgb(50, 50, 50) -1px -4px 2px inset, rgb(69, 69, 69) 1px 2px 5px 0px'
    } else {
        introScreen.style.display = 'none';
        lightSwitch.attributes.onclick.value = "light('on')"
        lightSwitch.style.boxShadow = 'rgb(50, 50, 50) -1px 4px 2px inset, rgb(69, 69, 69) 1px 2px 5px 0px'
    }

    localStorage.setItem('firstTime', 'false');
}

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// window.addEventListener('resize', () => {
//     if (window.matchMedia("(max-width: 992px)").matches) {
//         document.getElementById('desk').style.perspective = 'initial';
//     }
//     else {
//         document.getElementById('desk').style.perspective = '100px';
//     }
// });


// slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 8000);
}


// weather
const appKey = "6a42348f3f2db5f744296408f0807ef2";
var weatherUnit = "&units=metric"; // or "imperial" for fahrenheit - if doesn't update, it's because localstorage needs clearing
let weatherLocation = 'London'; // getting location from HTML
const temperature = document.getElementById("weather-temp");
const weatherSlide = document.getElementById("weather-slide");
const weatherCond = document.getElementById("weather-cond");

var api = "https://api.openweathermap.org/data/2.5/weather?q=" + weatherLocation + "&appid=" + appKey + weatherUnit;

var userTime = new Date().getTime();
let getUserTime = localStorage.getItem('userTime');

// if userTime is not set, set it now and load weather details OR if userTime is more than 1 hour (3600000 ms) do this
if (!getUserTime || userTime > (Number(getUserTime) + 3600000)) {
    userTime = new Date().getTime();
    localStorage.setItem('userTime', userTime);
    findWeatherDetails();
    setTimeout(function () {
        localStorage.setItem('weatherBg', weatherSlide.style.background); // set weather bg
        localStorage.setItem('weatherCond', weatherCond.innerText); // set weather condition
        localStorage.setItem('weatherTemp', temperature.innerText); // set temperature
    }, 3000);
}

// don't reload weather, only retrieve info
else {
    weatherCond.innerText = localStorage.getItem('weatherCond'); // retrieve icon 
    weatherSlide.style.background = localStorage.getItem('weatherBg'); // retrieve icon 
    temperature.innerText = localStorage.getItem('weatherTemp'); // retrieve temp

    console.log(Math.trunc((3600000 - (userTime - Number(getUserTime))) / 60000) + " minute(s) until next weather update.")
}

function findWeatherDetails() {
    httpRequestAsync(api, theResponse);
}

function theResponse(response) {
    let jsonObject = JSON.parse(response);
    temperature.innerHTML = parseInt(jsonObject.main.temp) + "°";
    weatherCond.innerHTML = jsonObject.weather[0].main;

    if (200 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 232) {
        weatherSlide.style.background = 'radial-gradient(at 153px 13px, rgb(242, 242, 242) 0%, rgb(162, 115, 0) 100%)'
    }
    else if (300 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 531) {
        weatherSlide.style.background = 'radial-gradient(at 153px 13px, rgb(2, 46, 71) 0%, rgb(122, 122, 122) 100%)'
    }
    else if (600 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 622) {
        weatherSlide.style.background = 'radial-gradient(at 153px 13px, rgb(255, 255, 255) 0%, rgb(122, 122, 122) 100%)'
    }
    else if (701 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 781) {
        weatherSlide.style.background = 'radial-gradient(at 153px 13px, rgb(143, 143, 143) 0%, rgb(65, 65, 65) 100%)'
    }
    else if (jsonObject.weather[0].id && jsonObject.weather[0].id === 800) {
        weatherSlide.style.background = 'radial-gradient(farthest-corner at 153px 13px, #fff 0%, #338fee 100%)'
    }
    else if (801 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 804) {
        weatherSlide.style.background = 'radial-gradient(at 153px 13px, rgb(255, 255, 255) 0%, rgb(63, 63, 63) 100%)'
    }
    else {
        console.log("Error");
    }

    // console.log(jsonObject.weather[0].id)
    // console.log(jsonObject.weather[0].main)
}

function httpRequestAsync(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

function bigBrother(){
    document.getElementById('poster').classList.add('fade')
    document.getElementById('poster').style.backgroundImage = "url(../img/big-brother.svg)";
}