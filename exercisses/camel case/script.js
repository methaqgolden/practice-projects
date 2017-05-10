var name = "Jacob,Is,Gentelman";
var newname = function (name) {
    var newname = name.split("-");
    //    console.log(newname);
    var newword = [];
    for (i = 0; i < newname.length; i++) {
        if (i == 0) {
            newword.push(newname[i].toLowerCase());
        } else {
            var first = newname[i][0].toUpperCase();
            var last = newname[i].substr(1, newname[i].length).toLocaleLowerCase();
            var methaq = first + last
            newword.push(methaq);
        }

    }
    console.log(newword.join(""));
}
newname(name)
function num() {
    for(var i = 0; i >= 100; i++) {
        
    }
}