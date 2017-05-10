$("#btn").on("click", function() {
    alert("hello my first jquery");
});
$("#btn").on("mouseover", function() {
    $("#btn").addClass("big");
    $("#btn").removeClass("small");
});
$("#btn").on("mouseleave", function() {
    $("#btn").addClass("small");
    $("#btn").removeClass("big");
});
$("#btn").on("scroll", function() {
    $("#btn").addClass("small");
    $("#btn").removeClass("big");
});
$("#btn").on("click",function() {
    $("#btn").css("border-color", "red");
    $("#btn").css("backround", "green");
});