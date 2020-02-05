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

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


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
    setTimeout(showSlides, 5000);
}