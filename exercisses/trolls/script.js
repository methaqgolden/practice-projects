var vowels = ['a', 'e', 'i', 'o', 'u']

function disemVowel(str) {
    var str = str.toLowerCase();
    var print = '';
    for (var i = 0; i < str.length; i++) {
        var noMatch = true;
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] == vowels[j]) {
                noMatch = false;
            }
        }
        if (noMatch == true) {

            print += str[i]
        }
    }
    console.log(print);
}
disemVowel('yOu are dumb');