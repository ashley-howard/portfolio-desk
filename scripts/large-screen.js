var screenProjects = document.getElementById('screen-projects');
var screenAbout = document.getElementById('screen-about');
var screenSkills = document.getElementById('screen-skills');
var screenContact = document.getElementById('screen-contact');
var largeScreen = document.getElementById('large-screen');
var explorerUrl = document.getElementById("explorer-url");
var prependTyped = document.getElementById('prepend-typed');

var backButton = document.getElementById('back-button');

var projectTiles = document.getElementById('project-tiles');
// var aboutTiles = document.getElementById('about-tiles');
// var skillsTiles = document.getElementById('skills-tiles');
// var contactTiles = document.getElementById('contact-tiles');

var projectCache;
var screenCache;
var typed;
var typedString;
var typedStartDelay;
var projectName;
var timeout;

//renamed to 'main'
function openHome() {
    screenCache.style.display = "none"
    // screenProjects.style.display = "none";
    // screenAbout.style.display = "none";
    // screenContact.style.display = "none";
    // screenSkills.style.display = "none";
    document.getElementById('folders').style.display = "flex";
    prependTyped.innerHTML = 'https://ashley.how';
    // prependTyped.style.display = "none";
    backButton.style.display = "none";
    // document.getElementById(`project-${projectCache}`).style.display = "none";
    projectCache = 0
}

// function openProject(project) {
//     if (project === 'main') {
//         extend()
//         document.getElementById('folders').style.display = "none";
//         // screenCache = screenProjects;

//         backButton.style.display = "flex";
//         // prependTyped.style.display = "block";
//         backButton.setAttribute("onclick", "openHome()")

//         if (project === 0) {
//             var typed = new Typed('#typed', {
//                 strings: ['/projects'],
//                 typeSpeed: 50,
//                 showCursor: false,
//                 // startDelay: 0
//             });

//             setTimeout(function () {
//                 screenProjects.style.display = "block";
//                 projectTiles.style.display = "flex"; // grid?
//                 typed.destroy() // resets Typed
//                 prependTyped.innerHTML = 'https://ashley.how/projects';
//             }, 800);
//         }

//         else {
//             prependTyped.innerHTML = '';

//             var typed = new Typed('#typed', {
//                 strings: ['https://ashley.how/projects'],
//                 typeSpeed: 50,
//                 showCursor: false,
//                 startDelay: 2000
//             });

//             setTimeout(function () {
//                 screenProjects.style.display = "block";
//                 projectTiles.style.display = "flex"; // grid?
//                 typed.destroy() // resets Typed
//                 prependTyped.innerHTML = 'https://ashley.how/projects';
//             }, 3900);
//         }
//         screenCache = screenProjects;

//     }

//     else if (project === 'back') {
//         projectTiles.style.display = "flex"; //grid?
//         backButton.style.display = "flex";
//         backButton.setAttribute("onclick", "openHome()")
//         prependTyped.innerHTML = 'https://ashley.how/projects';
//         document.getElementById(`project-${projectCache}`).style.display = "none";
//     }

//     else if (project === '1' || project === '2' || project === '3' || project === '4' || project === '5') {

//         if (project === '1') {
//             typedString = 'portfolio'; // ashley
//             projectTimeout = 800;
//         }

//         else if (project === '2') {
//             typedString = 'a-kin';
//             projectTimeout = 600;
//         }

//         else if (project === '3') {
//             typedString = 'jack-daniels';
//             projectTimeout = 1000;
//         }

//         else if (project === '4') {
//             typedString = 'ribbit';
//             projectTimeout = 550;
//         }

//         else if (project === '5') {
//             typedString = 'note-convert';
//             projectTimeout = 900;
//         }

//         projectCache = project;
//         screenCache = screenProjects;

//         prependTyped.innerHTML = 'https://ashley.how/projects';

//         var typed = new Typed('#typed', {
//             strings: [`/${typedString}`],
//             typeSpeed: 50,
//             showCursor: false,
//         });

//         setTimeout(function () {
//             document.getElementById(`project-${project}`).style.display = "block";
//             backButton.style.display = "flex";

//             typed.destroy() // resets Typed
//             prependTyped.innerHTML = `https://ashley.how/projects/${typedString}`;
//         }, projectTimeout);

//         projectTiles.style.display = "none";
//         backButton.setAttribute("onclick", "openProject('back')")

//     }

// }




// function openAbout() {
//     extend()
//     screenCache = screenAbout;
//     backButton.setAttribute("onclick", "openHome()")

//     var typed = new Typed('#typed', {
//         strings: ['https://ashley.how/ard'],
//         typeSpeed: 50,
//         showCursor: false,
//         startDelay: 2000
//     });

//     setTimeout(function () {
//         screenAbout.style.display = "block";
//         aboutTiles.style.display = "flex";
//         typed.destroy() // resets Typed
//         prependTyped.innerHTML = 'https://ashley.how/ard';
//     }, 3650);
// }

// function openSkills() {
//     extend()
//     screenCache = screenSkills;
//     backButton.setAttribute("onclick", "openHome()")

//     var typed = new Typed('#typed', {
//         strings: ['https://ashley.how/skills'],
//         typeSpeed: 50,
//         showCursor: false,
//         startDelay: 2000
//     });

//     setTimeout(function () {
//         screenSkills.style.display = "block";
//         skillsTiles.style.display = "flex"; // grid?
//         typed.destroy() // resets Typed
//         prependTyped.innerHTML = 'https://ashley.how/skills';
//     }, 3400);

// }


// function openContact() {
//     extend()

//     screenCache = screenContact;
//     backButton.setAttribute("onclick", "openHome()")

//     var typed = new Typed('#typed', {
//         strings: ['https://ashley.how/contact'],
//         typeSpeed: 50,
//         showCursor: false,
//         startDelay: 2000
//     });

//     setTimeout(function () {
//         screenContact.style.display = "block";
//         contactTiles.style.display = "flex";
//         typed.destroy() // resets Typed
//         prependTyped.innerHTML = 'https://ashley.how/contact';
//     }, 3900);

// }


function openScreen(screenName, projectNo) {
    extend()

    console.log(screenName)

    if (screenName === 'projects') {

        timeout = 3900;

        if (projectNo) {
            if (projectNo === 1) {
                projectName = 'portfolio';
                timeout = 800;
            }

            else if (projectNo === 2) {
                projectName = 'a-kin';
                timeout = 600;
            }

            else if (projectNo === 3) {
                projectName = 'jack-daniels';
                timeout = 1000;
            }

            else if (projectNo === 4) {
                projectName = 'ribbit';
                timeout = 550;
            }

            else {
                projectName = 'note-convert';
                timeout = 900;
            }
            console.log(projectNo)
        }
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

    // // if screenCache doesn't exist, write full URL, or only have it when the tag "large screen" is active
    // if (projectName) {
    //     typedString = `/${projectName}`
    //     typedStartDelay = 0
    // }

    if (screenCache) {
        typedString = `/${screenName}`
        typedStartDelay = 0
    } else {
        typedString = `https://ashley.how/${screenName}`;
        typedStartDelay = 2000
    }

    var typed = new Typed('#typed', {
        strings: [typedString],
        typeSpeed: 50,
        showCursor: false,
        startDelay: typedStartDelay
    });

    setTimeout(function () {
        document.getElementById(`screen-${screenName}`).style.display = "block";
        typed.destroy()

        // if (projectName) {
        //     prependTyped.innerHTML = `https://ashley.how/projects/${projectName}`;
        //     document.getElementById(`project-${projectNo}`).style.display = "block";
        //     projectTiles.style.display = "none";
        //     backButton.setAttribute("onclick", "openScreen('projects')")
        // }
        // else {
        //     prependTyped.innerHTML = `${typedString}`;
        //     backButton.setAttribute("onclick", "openScreen('main')")
        // }

        prependTyped.innerHTML = `${typedString}`;
        backButton.setAttribute("onclick", "openScreen('main')")

    }, timeout);

    screenCache = document.getElementById(`screen-${screenName}`);
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


