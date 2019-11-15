var screenProjects = document.getElementById('screen-projects');
var largeScreen = document.getElementById('large-screen');
var explorerUrl = document.getElementById("explorer-url");

function openProjects(){
    largeScreen.style.display = "block";
    // console.log('open projects');
    explorerUrl.innerText = `C:\\Users\\Ash\\Projects\\`;
}

function hideScreen(){
    largeScreen.style.display = "none";
}