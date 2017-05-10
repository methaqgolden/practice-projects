var repeat = function(str) {
    var arr = str.split(" ");
    for(var i = 0; i < str.length; i++){
       if(arr[i] !== arr[i + 1]){
           return arr[i + 1];
       }
           
    }
}
console.log(repeat("uuuuuuuurbhgjgkg"));

var repeat = function(str) {
    var arr = str.split(" ");
    for(var i = 0; i < str.length; i++){
       if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
           return str[i];
       }
           
    }
}
console.log(repeat("uuuuuuuurbhgjgrkg"));
//var vowels = ['a', 'e', 'i', 'o', 'u']
//
//function disemVowel(str) {
//    var str = str.toLowerCase();
//    var print = '';
//    for (var i = 0; i < str.length; i++) {
//        var noMatch = true;
//        for (var j = 0; j < vowels.length; j++) {
//            if (str[i] == vowels[j]) {
//                noMatch = false;
//            }
//        }
//        if (noMatch == true) {
//
//            print += str[i]
//        }
//    }
//    console.log(print);
//}
//disemVowel('yOu are dumb');
    
















//var repeat = function (string) {
//    var str = string.split('');
//    for (var i = 0; i < string.length; i++) {
//        if (str.filter(function (j) {
//                return j == string.charAt(i);
//            }).length == 1) return string.charAt(i);
//    }
//};
//console.log(repeat("uuuuuueeeeebbbbbbbra"));