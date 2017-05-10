var caughtObj = document.querySelector("#caught1");
var pricingObj = document.querySelector('#pricing1');
var caughtObj2 = document.querySelector("#caught2");
var pricingObj2 = document.querySelector('#pricing2');
var caughtObj3 = document.querySelector("#caught3");
var pricingObj3 = document.querySelector('#pricing3');
var totalObj = document.querySelector("#total")
var cal = document.querySelector("#btnCalc");
var reset = document.querySelector("#btnReset");

cal.addEventListener("click", function () {
    var caught = Number(caughtObj.value);
    pricingObj.value = caught * 5;
    var caught = Number(caughtObj2.value);
    pricingObj2.value = caught * 7;
    var caught = Number(caughtObj3.value);
    pricingObj3.value = caught * 11;


    totalObj.value = Number(pricingObj.value) + Number(pricingObj2.value) + Number(pricingObj3.value);

})

var caught = document.querySelector("#caught1");
caught1.addEventListener("click", function () {
    caught1.style.backgroundColor = "yellow";
    caught1.style.borderRadius = "30%";
});
var caught = document.querySelector("#caught2");
caught2.addEventListener("click", function () {
    caught2.style.backgroundColor = "#b3f0ff";
    caught2.style.borderRadius = "30%";
});
var caught = document.querySelector("#caught3");
caught3.addEventListener("click", function () {
    caught3.style.backgroundColor = "yellow";
    caught3.style.borderRadius = "30%";
});
var coombas = document.querySelector("#square");
coombas.addEventListener("click", function () {
    coombas.style.backgroundColor = "#ffffb3";
    coombas.style.borderRadius = "100%";
});
var coombas1 = document.querySelector("#square1");
coombas1.addEventListener("click", function () {
    coombas1.style.backgroundColor = "#ff99dd";
    coombas1.style.borderRadius = "100%";
});
var coombas2 = document.querySelector("#square2");
coombas2.addEventListener("click", function () {
    coombas2.style.backgroundColor = "#ffffb3";
    coombas2.style.borderRadius = "100%";
});
var center = document.querySelector(".center");
center.addEventListener("click", function () {
    center.style.backgroundColor = "#ffffb3";
    center.style.borderRadius = "100%";
});

var total = document.querySelector("#total");
total.addEventListener("click", function () {
    total.style.backgroundColor = "#ffffb3";
    total.style.borderRadius = "100%";
});

function myFunction() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://68.media.tumblr.com/645845e53bfba2af314cba3c3b4ff12e/tumblr_o6kvemUuTE1uhtlx0o1_500.gif')";
}


var reset = document.querySelector("#btnReset");
reset.addEventListener("click", function () {
    caughtObj.value = '';
    pricingObj.value = '';
    caughtObj2.value = '';
    pricingObj2.value = '';
    caughtObj3.value = '';
    pricingObj3.value = '';
    totalObj.value = '';
    reset.value = "";
})