var data = [];
var renderList = function () {
    var txt = $("#input1").val();
    $("#output").html("");
    for (var i = 0; i < data.length; i++) {
        $("#output").append(`<li>${data[i]}<button id="delete">x</button>`);
    }
}
$("#btn").on("click", function () {
    var txt = $("#input1").val();
    $("#input1").val("");
    data.push(txt);
    renderList();
});

$(window).on("keypress", function (e) {

    if (e.keyCode === 13) {
        var txt = $("#input1").val();
        $("#output").append(`<li>${txt}<button id="delete">Add</button>`);
        data.push(txt);
        console.log(data)
        $("#input1").val("");
        renderList();
    }
    $(document).on('click', '#delete', function () {
        $(this).parent('li').remove();
    })

})

//var data = [];
//var showList = function () {
//    document.getElementById("output").innerHTML = "comment";
//    for (var i = 0; i < data.length; i++) {
//        var listText = document.createElement("li");
//        var btn = document.createElement("button");
//        btn.setAttribute("id", i);
//        btn.innerHTML = "LIKE";
//        var textNode = document.createTextNode(data[i].text);
//        var likesList = document.createTextNode("likes: " + data[i].likes);
//        listText.appendChild(likesList);
//        listText.appendChild(textNode);
//        listText.appendChild(btn);
//        btn.addEventListener("click", function() {
//            data.splice(this.id, 1);
//            localStorage.setItem("hi", data);
//            showList();
//        })
//        document.getElementById("output").appendChild(listText);
//    }
//}
//document.getElementById("btn").addEventListener("click", function() {
//    var listItem = document.getElementById("me").value;
//    var newComment = {
//    text: listItem,
//    likes: 0
//}
//    data.push(newComment);
//    showList();
//})
