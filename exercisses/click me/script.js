//var btn = document.querySelector(".btn");
//btn.addEventListener("click", function(){
//    btn.style.background = "pink";
//})

//var btn = document.querySelector(".btn");
//var output = document.querySelector("#output1");
//var counter = 0;
//function handelClickBtn(numsOfClicks) {
//    output.innerHTML = "hello click me in danger" + numsOfClicks;
//}
//btn.addEventListener("click", function (){
//    counter++
//    handelClickBtn(counter);
//})
var btn = document.querySelector(".btn");
var output = document.querySelector("#output1");
var counter = 0;

var handelClickBtn = function (toFewClicks, toManyClicks) {
    if (counter < 10) {
        toFewClicks();
    } else {
        toManyClicks();
    }
}
    function askForMoreClicks() {
        output.innerHTML = "hello click me in danger!!" + counter;
    }

    function yell() {
        output.innerHTML = "stop click me in danger" + counter;
    }
    btn.addEventListener("click", function () {
        counter++
        handelClickBtn(askForMoreClicks, yell);
    });
