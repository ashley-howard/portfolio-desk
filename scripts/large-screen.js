// var screenProjects = document.getElementById('screen-projects');
var largeScreen = document.getElementById('large-screen');
var explorerUrl = document.getElementById("explorer-url");
var prependTyped = document.getElementById('prepend-typed');
var backButton = document.getElementById('back-button');

var projectOpen = document.getElementById('project-open');

var projectImg = document.getElementById('project-img');
var projectName = document.getElementById('project-name');
var projectUrl = document.getElementById('project-url');
var projectDesc = document.getElementById('project-desc');
var tagHtml = document.getElementById('tag-html');
var tagCss = document.getElementById('tag-css');
var tagScss = document.getElementById('tag-scss');
var tagBs = document.getElementById('tag-bs');
var tagJs = document.getElementById('tag-js');

var typed;

function openProjects(project) {
    // MAIN SETTINGS
    if (project === 'main') {
        largeScreen.style.display = "block";

        var typed = new Typed('#typed', {
            strings: ['C:\\Users\\Ash\\Projects'],
            typeSpeed: 50,
            showCursor: false,
            startDelay: 2000
        });

        setTimeout(function () {
            document.getElementById('project-tiles').style.display = "grid";
            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
        }, 3600);
    }

    else if (project === 'back') {
        document.getElementById('project-tiles').style.display = "grid";
        backButton.style.display = "none";
        document.getElementById('project-open').style.display = "none";
        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';

        tagHtml.style.display = "none";
        tagCss.style.display = "none";
        tagScss.style.display = "none";
        tagBs.style.display = "none";
        tagJs.style.display = "none";
    }

    // OPEN HOME -- repeat this code for all projects
    else if (project === 'home') {

        // LOAD IN DATA FIRST
        projectOpen.className = "project-open project-open-home"
        projectImg.src = '/img/home-l.png';
        projectName.innerText = 'Home';
        projectUrl.href = '/';
        projectUrl.innerText = '/index.html';
        projectDesc.innerText = 'What started out as a fun project to see what objects I could make using CSS, I got a bit carried away and recreated my bedroom desk.';
        tagHtml.style.display = "flex";
        tagScss.style.display = "flex";
        tagJs.style.display = "flex";

        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects';
        var typed = new Typed('#typed', {
            strings: ['\\Breaking-the-second-wall'],
            typeSpeed: 50,
            showCursor: false,
        });

        setTimeout(function () {
            document.getElementById('project-open').style.display = "block";
            backButton.style.display = "flex";

            typed.destroy() // resets Typed
            prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects\\Breaking-the-second-wall';
        }, 1750);

        document.getElementById('project-tiles').style.display = "none";
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
    document.getElementById('project-tiles').style.display = "none";
}



