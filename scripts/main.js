function drinkCoffee() {
    document.getElementById("coffee").classList.add("drink");

    setTimeout(function () {
        document.getElementById("coffee-note").style.textDecoration = "line-through";
    }, 3200);
}


