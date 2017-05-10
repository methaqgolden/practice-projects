function removeEx(exclamation) {
    var str = exclamation.split("");
    var print = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "!") {
            str[i] = " "
        }
    }
    //          
    var result = str.join("");
    return result;

}

console.log(removeEx("!!!!!!!!!hi!!!!!"));


