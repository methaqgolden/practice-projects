var box = document.querySelector(".dj-box");
box.addEventListener("click", function () {
    box.style.backgroundColor = "blue";
    box.style.borderRadius = "50%";
});
window.addEventListener("scroll", function () {
    box.style.backgroundColor = "red";

});
window.addEventListener("keyup", function (event) {

    console.log(event.which);
    if (event.which === 80) {
        box.style.background = "pink";
    } else if (event.which === 89) {
        box.style.background = "yellow";
    }

});