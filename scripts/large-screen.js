var screenProjects = document.getElementById('screen-projects');
var screenSkills = document.getElementById('screen-skills');
var largeScreen = document.getElementById('large-screen');
var explorerUrl = document.getElementById("explorer-url");
var prependTyped = document.getElementById('prepend-typed');
var backButton = document.getElementById('back-button');

var projectTiles = document.getElementById('project-tiles');
var skillsTiles = document.getElementById('skills-tiles');
var projectCache;
var typed;

function openHome() {
    screenProjects.style.display = "none";
    document.getElementById('folders').style.display = "flex";
    prependTyped.innerHTML = 'C:\\Users\\Ash\\';
    backButton.style.display = "none";
}

function openProject(project) {
    if (project === 'main') {
        extend()
        document.getElementById('folders').style.display = "none";
        screenProjects.style.display = "block";
        backButton.style.display = "flex";
        backButton.setAttribute("onclick", "openHome()")

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
        backButton.style.display = "flex";
        backButton.setAttribute("onclick", "openHome()")
        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
        document.getElementById(`project-${projectCache}`).style.display = "none";
    }

    else if (project === '1' || project === '2' || project === '3' || project === '4' || project === '5') {

        if (project === '1') {
            typedString = 'Breaking-the-second-wall'; // ashley
            projectTimeout = 1750;
        }

        else if (project === '2') {
            typedString = 'a-kin';
            projectTimeout = 600;
        }

        else if (project === '3') {
            typedString = 'jack-daniels';
            projectTimeout = 1000;
        }

        else if (project === '4') {
            typedString = 'ribbit';
            projectTimeout = 550;
        }

        else if (project === '5') {
            typedString = 'note-convert';
            projectTimeout = 900;
        }

        projectCache = project;

        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';

        var typed = new Typed('#typed', {
            strings: [`\\${typedString}`],
            typeSpeed: 50,
            showCursor: false,
        });

        setTimeout(function () {
            document.getElementById(`project-${project}`).style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = `C:\\Users\\Ash\\Projects\\${typedString}`;
        }, projectTimeout);

        projectTiles.style.display = "none";
        backButton.setAttribute("onclick", "openProject('back')")
    }

}

function openSkills() {
    // largeScreen.style.display = "block";

    extend() 
    screenSkills.style.display = "block";
    skillsTiles.style.display = "block";

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
   
    largeScreen.style.display = "none";
    // reset everything
    prependTyped.innerHTML = '';
    document.getElementById('typed').innerHTML = "";
    projectTiles.style.display = "none";
    document.getElementById(`project-${projectCache}`).style.display = "none";
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


