var btn = document.querySelector("#submit1");
var output = document.querySelector("#output1");
var btn2 = document.querySelector("#submit2");
var output2 = document.querySelector("#output2");
var counter = 100;
var handelClickBtn = function (toFewClicks) {
    if (counter < 100) {
        toFewClicks();
    } else {
        toManyClicks();
    }
}

function askForMoreClicks() {
    output2.innerHTML = " " + counter;
}

btn.addEventListener("click", function () {
    counter--

    handelClickBtn(askForMoreClicks);
});

function askForMoreClicks1() {
    output.innerHTML = " " + counter;
}

btn2.addEventListener("click", function () {
    counter--
    handelClickBtn(askForMoreClicks1);
});
