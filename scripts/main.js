function drinkCoffee() {
    document.getElementById("coffee").classList.add("drink");

    setTimeout(function () {
        document.getElementById("coffee-note").style.textDecoration = "line-through";
    }, 3200);
}


// // use loop | put extendable on all elements that you want to extend
// // create button to activate
var extendables = document.getElementsByClassName('extendable')
// extendables.classList.add("xl");
// extendables.classList.remove("xl");

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