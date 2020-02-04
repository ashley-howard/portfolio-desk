const largeScreen = document.getElementById('large-screen');
const prependTyped = document.getElementById('prepend-typed');
const backButton = document.getElementById('back-button');
const extendables = document.getElementsByClassName('extendable');

var screenCache, typed, typedString, typedStartDelay, timeout;

if (window.matchMedia("(max-width: 991px)")) {
    prependTyped.innerHTML = `https://ashley.how`;
}

function openScreen(screen) {
    extend()
    document.getElementById('folders').style.display = "none";

    if (screen === 'projects') {
        timeout = 3900;
    }

    else if (screen === 'main') {
        timeout = 0;
    }

    else if (screen === 'about') {
        timeout = 3700;
    }

    else if (screen === 'skills') {
        timeout = 3800;
    }

    else if (screen === 'contact') {
        timeout = 3900;
    }

    if (screen === 'main') {
        prependTyped.innerHTML = `https://ashley.how`;
    }

    else if (screenCache === 'main' && screen !== 'main' || (window.matchMedia("(max-width: 991px)"))) {
        timeout = timeout - 3100;
        typedString = `/${screen}`
        typedStartDelay = 0

        var typed = new Typed('#typed', {
            strings: [typedString],
            typeSpeed: 50,
            showCursor: false,
            startDelay: typedStartDelay
        });
    }

    else {
        typedString = `https://ashley.how/${screen}`;

        // prependTyped.innerHTML = ``;

        // if screen width lower than 991px, delay is 0
        if (window.matchMedia("(max-width: 991px)")) {
            typedStartDelay = 0;
        } else {
            typedStartDelay = 2000
        }

        var typed = new Typed('#typed', {
            strings: [typedString],
            typeSpeed: 50,
            showCursor: false,
            startDelay: typedStartDelay
        });
    }

    setTimeout(function () {
        if (screen === 'main') {
            screenCache.style.display = "none";
            document.getElementById('folders').style.display = "flex";
            prependTyped.innerHTML = 'https://ashley.how';
            backButton.style.display = "none";
            screenCache = 'main';
        }

        else {
            typed.destroy()
            document.getElementById('folders').style.display = "none";
            document.getElementById(`screen-${screen}`).style.display = "block";
            prependTyped.innerHTML = `https://ashley.how/${screen}`;
            screenCache = document.getElementById(`screen-${screen}`);
            backButton.style.display = "flex";
            // backButton.setAttribute("onclick", "openScreen('main')")
        }
    }, timeout);
}

function minimise() {
    shrink()
    document.getElementById('minimised').style.display = "flex";
    document.getElementById(screenCache.id).style.display = "none";
}

function maximise() {
    extend()
    document.getElementById('minimised').style.display = "none";
    document.getElementById(screenCache.id).style.display = "block";
}

function closeScreen() {
    shrink()
    document.getElementById(screenCache.id).style.display = "none";
    document.getElementById('folders').style.display = "flex";
    prependTyped.innerHTML = '';
}

function extend() {
    if (!window.matchMedia("(max-width: 991px)")) {
        var i;
        for (i = 0; i < extendables.length; i++) {
            extendables[i].classList.add("extended");
        }
    }
    else {
        console.log("don't extend")
    }
}

function shrink() {
    var i;
    for (i = 0; i < extendables.length; i++) {
        extendables[i].classList.remove("extended");
    }
}