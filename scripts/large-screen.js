// var screenProjects = document.getElementById('screen-projects');
var largeScreen = document.getElementById('large-screen');
var explorerUrl = document.getElementById("explorer-url");
var prependTyped = document.getElementById('prepend-typed');

function openProjects(project) {
    largeScreen.style.display = "block";
    var typed = new Typed('#typed', {
        strings: ['C:\\Users\\Ash\\Projects\\'],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 2000
    });

    setTimeout(function () {
        document.getElementById('project-tiles').style.display = "grid";
    }, 3600);

    // PROJECT - HOME
    if (project === "home") {
        typed.destroy() // resets Typed
        prependTyped.innerHTML = 'C:\\Users\\Ash\\Projects\\';
        var typed = new Typed('#typed', {
            strings: ['Breaking-the-second-wall'],
            typeSpeed: 50,
            showCursor: false,
        });
    }

}

function hideScreen() {
    largeScreen.style.display = "none";
    // reset everything
    prependTyped.innerHTML = '';
    document.getElementById('typed').innerHTML = "";
    document.getElementById('project-tiles').style.display = "none";
}



