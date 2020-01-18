var screenProjects = document.getElementById('screen-projects');
var screenAbout = document.getElementById('screen-about');
var screenSkills = document.getElementById('screen-skills');
var screenContact = document.getElementById('screen-contact');
var largeScreen = document.getElementById('large-screen');
var explorerUrl = document.getElementById("explorer-url");
var prependTyped = document.getElementById('prepend-typed');
var backButton = document.getElementById('back-button');

var projectTiles = document.getElementById('project-tiles');
var aboutTiles = document.getElementById('about-tiles');
var skillsTiles = document.getElementById('skills-tiles');
var contactTiles = document.getElementById('contact-tiles');

var projectCache;
var typed;

function openHome() {
    screenProjects.style.display = "none";
    document.getElementById('folders').style.display = "flex";
    prependTyped.innerHTML = 'C:\\Users\\Ash';
    // prependTyped.style.display = "none";
    backButton.style.display = "none";
    // document.getElementById(`project-${projectCache}`).style.display = "none";
    projectCache = 0
}

function openProject(project) {
    if (project === 'main') {
        extend()
        document.getElementById('folders').style.display = "none";

        backButton.style.display = "flex";
        // prependTyped.style.display = "block";
        backButton.setAttribute("onclick", "openHome()")

        if (projectCache === 0) {
            var typed = new Typed('#typed', {
                strings: ['\\Projects'],
                typeSpeed: 50,
                showCursor: false,
                // startDelay: 0
            });

            setTimeout(function () {
                screenProjects.style.display = "block";
                projectTiles.style.display = "flex"; // grid?
                typed.destroy() // resets Typed
                prependTyped.innerHTML = 'https://ashley.how/projects';
            }, 800);
        }

        else {
            prependTyped.innerHTML = '';

            var typed = new Typed('#typed', {
                strings: ['https://ashley.how/projects'],
                typeSpeed: 50,
                showCursor: false,
                startDelay: 2000
            });

            setTimeout(function () {
                screenProjects.style.display = "block";
                projectTiles.style.display = "flex"; // grid?
                typed.destroy() // resets Typed
                prependTyped.innerHTML = 'https://ashley.how/projects';
            }, 3900);
        }

    }

    else if (project === 'back') {
        projectTiles.style.display = "flex"; //grid?
        backButton.style.display = "flex";
        backButton.setAttribute("onclick", "openHome()")
        prependTyped.innerHTML = 'https://ashley.how/projects';
        document.getElementById(`project-${projectCache}`).style.display = "none";
    }

    else if (project === '1' || project === '2' || project === '3' || project === '4' || project === '5') {

        if (project === '1') {
            typedString = 'portfolio'; // ashley
            projectTimeout = 800;
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

        prependTyped.innerHTML = 'https://ashley.how/projects';

        var typed = new Typed('#typed', {
            strings: [`/${typedString}`],
            typeSpeed: 50,
            showCursor: false,
        });

        setTimeout(function () {
            document.getElementById(`project-${project}`).style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = `https://ashley.how/projects/${typedString}`;
        }, projectTimeout);

        projectTiles.style.display = "none";
        backButton.setAttribute("onclick", "openProject('back')")
    }

}




function openAbout() {
    extend()

    var typed = new Typed('#typed', {
        strings: ['https://ashley.how/ard'],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 2000
    });

    setTimeout(function () {
        screenAbout.style.display = "block";
        aboutTiles.style.display = "flex";
        typed.destroy() // resets Typed
        prependTyped.innerHTML = 'https://ashley.how/ard';
    }, 3650);
}

function openSkills() {
    extend()

    var typed = new Typed('#typed', {
        strings: ['https://ashley.how/skills'],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 2000
    });

    setTimeout(function () {
        screenSkills.style.display = "block";
        skillsTiles.style.display = "flex"; // grid?
        typed.destroy() // resets Typed
        prependTyped.innerHTML = 'https://ashley.how/skills';
    }, 3400);

}


function openContact() {
    extend()

    var typed = new Typed('#typed', {
        strings: ['https://ashley.how/contact'],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 2000
    });

    setTimeout(function () {
        screenContact.style.display = "block";
        contactTiles.style.display = "flex";
        typed.destroy() // resets Typed
        prependTyped.innerHTML = 'https://ashley.how/contact';
    }, 3900);

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


