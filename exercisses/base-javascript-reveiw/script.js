var data = [];
var showList = function () {
    document.getElementById("output").innerHTML = "comment";
    for (var i = 0; i < data.length; i++) {
        var listText = document.createElement("li");
        var btn = document.createElement("button");
        btn.setAttribute("id", i);
        btn.innerHTML = "LIKE";
        var textNode = document.createTextNode(data[i].text);
        var likesList = document.createTextNode("likes: " + data[i].likes);
        listText.appendChild(likesList);
        listText.appendChild(textNode);
        listText.appendChild(btn);
        btn.addEventListener("click", function() {
            data.splice(this.id, 1);
            localStorage.setItem("hi", data);
            showList();
        })
        document.getElementById("output").appendChild(listText);
    }
}
document.getElementById("btn").addEventListener("click", function() {
    var listItem = document.getElementById("me").value;
    var newComment = {
    text: listItem,
    likes: 0
}
    data.push(newComment);
    showList();
})