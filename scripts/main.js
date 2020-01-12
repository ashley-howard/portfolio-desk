function drinkCoffee() {
    document.getElementById("coffee").classList.add("drink");

    setTimeout(function () {
        document.getElementById("coffee-note").style.textDecoration = "line-through";
    }, 3200);
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


