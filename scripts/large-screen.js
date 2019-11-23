// var screenProjects = document.getElementById('screen-projects');
var largeScreen = document.getElementById('large-screen');
var explorerUrl = document.getElementById("explorer-url");
var prependTyped = document.getElementById('prepend-typed');
var backButton = document.getElementById('back-button');

var projectTiles = document.getElementById('project-tiles');
// var projectOpen = document.getElementById('project-open');
var openHome = document.getElementById('open-home');
var openAkin = document.getElementById('open-a-kin');
var openJd = document.getElementById('open-jd');
var openRibbit = document.getElementById('open-ribbit');
var openNote = document.getElementById('open-note');
var projectFocus;

var typed;

function openProjects(project) {
    if (project === 'main') {
        largeScreen.style.display = "block";

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
        backButton.style.display = "none";
        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
        document.getElementById(`open-${projectFocus}`).style.display = "none";
    }

    else if (project === 'home') {
        projectFocus = 'home';

        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
        var typed = new Typed('#typed', {
            strings: ['\\Breaking-the-second-wall'],
            typeSpeed: 50,
            showCursor: false,
        });

        setTimeout(function () {
            openHome.style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects\\Breaking-the-second-wall';
        }, 1750);

        projectTiles.style.display = "none";
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
            openAkin.style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects\\a-kin';
        }, 600);

        projectTiles.style.display = "none";
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
            openJd.style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects\\jack-daniels';
        }, 1750);

        projectTiles.style.display = "none";
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
            openRibbit.style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects\\ribbit';
        }, 1750);

        projectTiles.style.display = "none";
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
            openNote.style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects\\note-convert';
        }, 1750);

        projectTiles.style.display = "none";
    }

}

function hideScreen() {
    largeScreen.style.display = "none";
    document.getElementById('folders').style.display = "none"
}
function closeScreen() {
    largeScreen.style.display = "none";
    // reset everything
    prependTyped.innerHTML = '';
    document.getElementById('typed').innerHTML = "";
    projectTiles.style.display = "none";
}



