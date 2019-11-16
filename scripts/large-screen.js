// var screenProjects = document.getElementById('screen-projects');
var largeScreen = document.getElementById('large-screen');
var explorerUrl = document.getElementById("explorer-url");

function openProjects() {
    largeScreen.style.display = "block";
    // console.log('open projects');
    // explorerUrl.innerText = `C:\\Users\\Ash\\Projects\\`;
    document.getElementById('typed-url').innerHTML = `C:\\Users\\Ash\\Projects\\`;
    // document.getElementById('typed-strings').style.display="block";
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        showCursor: false,
        startDelay: 2000
    });

    setTimeout(function () {
        document.getElementById('project-tiles').style.display = "grid";
    }, 3600);


}

function hideScreen() {
    largeScreen.style.display = "none";
}



