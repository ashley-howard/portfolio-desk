var screenProjects = document.getElementById('screen-projects');
var screenAbout = document.getElementById('screen-about');
var screenSkills = document.getElementById('screen-skills');
var screenContact = document.getElementById('screen-contact');
var largeScreen = document.getElementById('large-screen');
var explorerUrl = document.getElementById("explorer-url");
var prependTyped = document.getElementById('prepend-typed');
var backButton = document.getElementById('back-button');
var projectTiles = document.getElementById('project-tiles');
var screenCache;
var typed;
var typedString;
var typedStartDelay;
var timeout;
var screenName;

function openScreen(screenName) {
    extend()

    if (screenName === 'projects') {
        timeout = 3900;
    }

    else if (screenName === 'main') {
        timeout = 0;
    }

    else if (screenName === 'about') {
        timeout = 3700;
    }

    else if (screenName === 'skills') {
        timeout = 3800;
    }

    else if (screenName === 'contact') {
        timeout = 3900;
    }

    if (screenName === 'main') {
        prependTyped.innerHTML = `https://ashley.how`;
    }

    else if (screenCache === 'main' && screenName !== 'main') {
        timeout = timeout - 3100;
        typedString = `/${screenName}`
        typedStartDelay = 0

        var typed = new Typed('#typed', {
            strings: [typedString],
            typeSpeed: 50,
            showCursor: false,
            startDelay: typedStartDelay
        });
    }

    else {
        typedString = `https://ashley.how/${screenName}`;
        typedStartDelay = 2000

        var typed = new Typed('#typed', {
            strings: [typedString],
            typeSpeed: 50,
            showCursor: false,
            startDelay: typedStartDelay
        });
    }

    setTimeout(function () {
        if (screenName === 'main') {
            screenCache.style.display = "none";
            document.getElementById('folders').style.display = "flex";
            prependTyped.innerHTML = 'https://ashley.how';
            backButton.style.display = "none";
            screenCache = 'main';
        }
        
        else {
            typed.destroy()
            document.getElementById('folders').style.display = "none";
            document.getElementById(`screen-${screenName}`).style.display = "block";
            prependTyped.innerHTML = `https://ashley.how/${screenName}`;
            screenCache = document.getElementById(`screen-${screenName}`);
            backButton.style.display = "flex";
            backButton.setAttribute("onclick", "openScreen('main')")
        }
    }, timeout);
}





function minimise() {
    // largeScreen.style.display = "none";
    // document.getElementById('folders').style.display = "none"
    shrink()
    document.getElementById('minimised').style.display = "flex";
    largeScreen.style.bottom = "calc(100vh * 2)";
}

function maximise() {
    // largeScreen.style.display = "block";
    // document.getElementById('folders').style.display = "none"
    document.getElementById('minimised').style.display = "none";
    largeScreen.style.bottom = "initial";
}

function closeScreen() {

    shrink()
    screenCache = undefined;
    prependTyped.innerHTML = '';

    // largeScreen.style.display = "none";
    // reset everything
    // document.getElementById('typed').innerHTML = "";
    // projectTiles.style.display = "none";
    // document.getElementById(`project-${projectCache}`).style.display = "none";
    // backButton.style.display = "none";
}

// // use loop | put extendable on all elements that you want to extend
// // create button to activate
var extendables = document.getElementsByClassName('extendable')

function extend() {
    var i;
    for (i = 0; i < extendables.length; i++) {
        extendables[i].classList.add("extended");
    }
}
function shrink() {
    var i;
    for (i = 0; i < extendables.length; i++) {
        extendables[i].classList.remove("extended");
    }
}


