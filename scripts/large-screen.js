var screenProjects = document.getElementById('screen-projects');
var largeScreen = document.getElementById('large-screen');
var explorerUrl = document.getElementById("explorer-url");
var prependTyped = document.getElementById('prepend-typed');
var backButton = document.getElementById('back-button');

var projectTiles = document.getElementById('project-tiles');
// var projectOpen = document.getElementById('project-open');
var projectAshley = document.getElementById('project-ashley');
var projectAkin = document.getElementById('project-a-kin');
var projectJd = document.getElementById('project-jd');
var projectRibbit = document.getElementById('project-ribbit');
var projectNote = document.getElementById('project-note');
var projectFocus;

var typed;

function openHome() {
    screenProjects.style.display = "none";
    document.getElementById('folders').style.display = "flex";

    prependTyped.innerHTML = 'C:\\Users\\Ash\\';
    backButton.style.display = "none";
}

function openProject(project) {
    // if (project === 'main') {
    //     largeScreen.style.display = "block";

    //     var typed = new Typed('#typed', {
    //         strings: ['C:\\Users\\Ash\\Projects'],
    //         typeSpeed: 50,
    //         showCursor: false,
    //         startDelay: 2000
    //     });

    //     setTimeout(function () {
    //         projectTiles.style.display = "grid";
    //         typed.destroy() // resets Typed
    //         prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
    //     }, 3600);
    // }
    if (project === 'main') {
        screenProjects.style.display = "block";
        backButton.style.display = "flex";
        backButton.setAttribute("onclick", "openHome()")

        extend()

        prependTyped.innerHTML = '';

        var typed = new Typed('#typed', {
            strings: ['C:\\Users\\Ash\\Projects'],
            typeSpeed: 50,
            showCursor: false,
            startDelay: 2000
        });

        setTimeout(function () {
            projectTiles.style.display = "grid";
            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
        }, 3600);
    }

    else if (project === 'back') {
        projectTiles.style.display = "grid";
        // backButton.style.display = "none";
        backButton.style.display = "flex";
        backButton.setAttribute("onclick", "openHome()")
        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
        document.getElementById(`project-${projectFocus}`).style.display = "none";
    }

    else if (project === 'ashley') {
        projectFocus = 'ashley';

        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
        var typed = new Typed('#typed', {
            strings: ['\\Breaking-the-second-wall'],
            typeSpeed: 50,
            showCursor: false,
        });

        setTimeout(function () {
            projectAshley.style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects\\Breaking-the-second-wall';
        }, 1750);

        projectTiles.style.display = "none";
        backButton.style.display = "flex";
        backButton.setAttribute("onclick", "openProject('back')")
    }

    else if (project === 'a-kin') {
        projectFocus = 'a-kin';

        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
        var typed = new Typed('#typed', {
            strings: ['\\a-kin'],
            typeSpeed: 50,
            showCursor: false,
        });

        setTimeout(function () {
            projectAkin.style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects\\a-kin';
        }, 600);

        projectTiles.style.display = "none";
        backButton.style.display = "flex";
        backButton.setAttribute("onclick", "openProject('back')")
    }

    else if (project === 'jd') {
        projectFocus = 'jd';

        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
        var typed = new Typed('#typed', {
            strings: ['\\jack-daniels'],
            typeSpeed: 50,
            showCursor: false,
        });

        setTimeout(function () {
            projectJd.style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects\\jack-daniels';
        }, 1000);

        projectTiles.style.display = "none";
        backButton.style.display = "flex";
        backButton.setAttribute("onclick", "openProject('back')")
    }

    else if (project === 'ribbit') {
        projectFocus = 'ribbit';

        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
        var typed = new Typed('#typed', {
            strings: ['\\ribbit'],
            typeSpeed: 50,
            showCursor: false,
        });

        setTimeout(function () {
            projectRibbit.style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects\\ribbit';
        }, 550);

        projectTiles.style.display = "none";
        backButton.style.display = "flex";
        backButton.setAttribute("onclick", "openProject('back')")
    }

    else if (project === 'note') {
        projectFocus = 'note';

        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
        var typed = new Typed('#typed', {
            strings: ['\\note-convert'],
            typeSpeed: 50,
            showCursor: false,
        });

        setTimeout(function () {
            projectNote.style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects\\note-convert';
        }, 900);

        projectTiles.style.display = "none";
        backButton.style.display = "flex";
        backButton.setAttribute("onclick", "openProject('back')")
    }


    // document.body.style.perspective = "unset"
}

function openSkills() {
    largeScreen.style.display = "block";

    var typed = new Typed('#typed', {
        strings: ['C:\\Users\\Ash\\Skills'],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 2000
    });

    setTimeout(function () {
        typed.destroy() // resets Typed
        prependTyped.innerHTML = 'C:\\Users\\Ash\\Skills';
    }, 3600);
}

function minimise() {
    // largeScreen.style.display = "none";
    // document.getElementById('folders').style.display = "none"
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
    largeScreen.style.display = "none";
    // reset everything
    prependTyped.innerHTML = '';
    document.getElementById('typed').innerHTML = "";
    projectTiles.style.display = "none";
    document.getElementById(`project-${projectFocus}`).style.display = "none";
    backButton.style.display = "none";
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


